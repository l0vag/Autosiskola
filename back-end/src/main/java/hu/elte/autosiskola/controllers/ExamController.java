package hu.elte.autosiskola.controllers;

import hu.elte.autosiskola.entities.Exam;
import hu.elte.autosiskola.entities.User;
import hu.elte.autosiskola.repositories.ExamRepository;
import hu.elte.autosiskola.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/exams")
public class ExamController {

    @Autowired
    private ExamRepository examRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("")
    public ResponseEntity<Iterable<Exam>> getAll() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        List<String> roles = auth.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList());
        if (roles.contains("ROLE_ADMIN")) {
            return ResponseEntity.ok(examRepository.findAll());
        }
        String username = auth.getName();
        Optional<User> user = userRepository.findByName(username);
        if (user.isPresent()) {
            return ResponseEntity.ok(user.get().getExams());
        }
        return ResponseEntity.badRequest().build();
    }

    @GetMapping("{id}")
    public ResponseEntity<Exam> getExam(@PathVariable Integer id) {
        Optional<Exam> exam = examRepository.findById(id);
        if (!exam.isPresent()) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(exam.get());
    }

    @PostMapping("adduser/{id}")
    public ResponseEntity<Exam> addUser(@PathVariable Integer id, @RequestBody User user) {
        Optional<Exam> exam = examRepository.findById(id);
        Optional<User> userToAdd = userRepository.findById(user.getId());
        if (!exam.isPresent() || !userToAdd.isPresent()) {
            return ResponseEntity.badRequest().build();
        }
        exam.get().getUsers().add(userToAdd.get());
        userToAdd.get().getExams().add(exam.get());
        examRepository.save(exam.get());
        userRepository.save(userToAdd.get());
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Exam> deleteExam(@PathVariable Integer id) {
        Optional<Exam> exam = examRepository.findById(id);
        if (!exam.isPresent()) {
            return ResponseEntity.badRequest().build();
        }
        examRepository.delete(exam.get());
        return ResponseEntity.ok().build();
    }

    @PutMapping("")
    public ResponseEntity<Iterable<Exam>> insertExam(@RequestBody Exam exam) {
        examRepository.save(exam);
        return ResponseEntity.ok(examRepository.findAll());
    }

    @PatchMapping("{id}")
    public ResponseEntity<Exam> updateExam(@RequestBody Exam exam, @PathVariable Integer id) {
        Optional<Exam> examToUp = examRepository.findById(id);
        if (!examToUp.isPresent()) {
            return ResponseEntity.badRequest().build();
        }
        exam.setId(examToUp.get().getId());
        examRepository.save(exam);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/available")
    public ResponseEntity<Iterable<Exam>> getAvail() {
        return ResponseEntity.ok(examRepository.getAvailable());
    }
}

