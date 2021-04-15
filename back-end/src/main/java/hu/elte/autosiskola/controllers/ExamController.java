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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/available")
    public ResponseEntity<Iterable<Exam>> getAvail() {
        return null;
    }
}

