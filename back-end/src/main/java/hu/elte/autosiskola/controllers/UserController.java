package hu.elte.autosiskola.controllers;

import hu.elte.autosiskola.entities.DriveClass;
import hu.elte.autosiskola.entities.User;
import hu.elte.autosiskola.entities.Workday;
import hu.elte.autosiskola.entities.Workweek;
import hu.elte.autosiskola.helper.CalendarHelper;
import hu.elte.autosiskola.helper.UserUpdateHolder;
import hu.elte.autosiskola.repositories.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ExamRepository examRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private DriveClassRepository driveClassRepository;

    @Autowired
    private WorkdayRepository workdayRepository;

    @Autowired
    private WorkweekRepository workweekRepository;

    @GetMapping("")
    public ResponseEntity<Iterable<User>> getAll() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        List<String> roles = auth.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList());
        if (roles.contains("ROLE_ADMIN")) {
            return ResponseEntity.ok(userRepository.findAll());
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("{id}")
    public ResponseEntity<User> getUser(@PathVariable Integer id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            return ResponseEntity.ok(user.get());
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(User.Role.ROLE_GUEST);
        userRepository.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping("/makestudent/{id}")
    public ResponseEntity<User> update(@PathVariable Integer id) {
        Optional<User> toUpdateUser = userRepository.findById(id);
        if (toUpdateUser.isPresent()) {
            toUpdateUser.get().setRole(User.Role.ROLE_STUDENT);
            userRepository.save(toUpdateUser.get());
            return ResponseEntity.status(HttpStatus.ACCEPTED).build();
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    @PutMapping("/addexam/{id}")
    public ResponseEntity<User> addExam(@PathVariable Integer id, @RequestBody User user) {
        Optional<User> toUpdateUser = userRepository.findByName(user.getName());
        if (toUpdateUser.isPresent()) {
            if (toUpdateUser.get().getExams().contains(id)) {
                return ResponseEntity.badRequest().build();   //ha már van ilyen exam
            }
            toUpdateUser.get().getExams().add(examRepository.findById(id).get());
            userRepository.save(toUpdateUser.get());
            return ResponseEntity.accepted().build();
        }
        return ResponseEntity.badRequest().build();
    }

    @DeleteMapping("/delete")
    public ResponseEntity<User> removeUser(@RequestBody User user) {
        Optional<User> removeUser = userRepository.findByName(user.getName());
        if (removeUser.isPresent()) {
            userRepository.delete(user);
            return ResponseEntity.accepted().build();
        }
        return ResponseEntity.badRequest().build();
    }

    @PatchMapping("/update")
    public ResponseEntity<User> updateUser(@RequestBody UserUpdateHolder info) {
        Optional<User> updateUser = userRepository.findByName(info.getUser().getName());
        if (updateUser.isPresent()) {
            userRepository.delete(info.getUser());
            userRepository.save(info.getUpdatedUser());
            return ResponseEntity.accepted().build();
        }
        return ResponseEntity.badRequest().build();
    }

    @GetMapping("/workweek/{id}")
    private ResponseEntity<Iterable<DriveClass>> getDriveClasses(@PathVariable Integer id) {
        Optional<User> user = userRepository.findById(id);
        if (!user.isPresent()) {
            return ResponseEntity.badRequest().build();
        }

        return ResponseEntity.ok(driveClassRepository.getAll(user.get().getName()));
    }

    @PutMapping("/{id}")
    private ResponseEntity<User> setNewCourse(@PathVariable Integer id, @RequestBody CalendarHelper calendarHelper) {
        DriveClass dc = new DriveClass();
        Optional<User> user = userRepository.findById(calendarHelper.getStudentId());
        if (!user.isPresent()) {
            return ResponseEntity.badRequest().build();
        }
        dc.setUser(user.get().getName());
        dc.setFree(false);
        dc.setHour(calendarHelper.getClassNum());
        Workday wd = new Workday();
        wd.setName(String.valueOf(calendarHelper.getDayNum()));
        wd.setWorkweek(workweekRepository.findById(calendarHelper.getWeekNum()).get());
        dc.setWorkday(wd);
        driveClassRepository.save(dc);
        return ResponseEntity.ok().build();
    }

}
