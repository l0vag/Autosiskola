package hu.elte.autosiskola.controllers;

import hu.elte.autosiskola.entities.User;
import hu.elte.autosiskola.helper.UserUpdateHolder;
import hu.elte.autosiskola.repositories.ExamRepository;
import hu.elte.autosiskola.repositories.UserRepository;
import lombok.Getter;
import lombok.Setter;
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

    Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ExamRepository examRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @GetMapping("")
    public ResponseEntity<Iterable<User>> getAll() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        List<String> roles = auth.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList());
        if (roles.contains("ROLE_ADMIN")) {
            return ResponseEntity.ok(userRepository.findAll());
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
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();   //ha már van ilyen exam
            }
            toUpdateUser.get().getExams().add(examRepository.findById(id).get());
            userRepository.save(toUpdateUser.get());
            return ResponseEntity.status(HttpStatus.ACCEPTED).build();
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/delete")
    public ResponseEntity<User> removeUser(@RequestBody User user) {
        Optional<User> removeUser = userRepository.findByName(user.getName());
        if (removeUser.isPresent()) {
            userRepository.delete(user);
            return ResponseEntity.status(HttpStatus.ACCEPTED).build();
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    @PatchMapping("/update")
    public ResponseEntity<User> updateUser(@RequestBody UserUpdateHolder info) {
        Optional<User> updateUser = userRepository.findByName(info.getUser().getName());
        if (updateUser.isPresent()) {
            userRepository.delete(info.getUser());
            userRepository.save(info.getUpdatedUser());
            return ResponseEntity.status(HttpStatus.ACCEPTED).build();
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

}
