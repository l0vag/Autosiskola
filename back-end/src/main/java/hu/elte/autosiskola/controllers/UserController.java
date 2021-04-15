package hu.elte.autosiskola.controllers;

import hu.elte.autosiskola.entities.Exam;
import hu.elte.autosiskola.entities.User;
import hu.elte.autosiskola.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @GetMapping("")
    public ResponseEntity<Iterable<User>> getAll() {
        return ResponseEntity.ok(userRepository.findAll());
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        //user.setRole(User.Role.ROLE_GUEST);
        userRepository.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping("/promote")
    public ResponseEntity<User> update(@RequestBody User user) {

        //user.setRole(User.Role.ROLE_STUDENT);
        userRepository.save(user);
        return ResponseEntity.status(HttpStatus.ACCEPTED).build();
    }
}
