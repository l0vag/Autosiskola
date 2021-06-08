package hu.elte.autosiskola.controllers;

import hu.elte.autosiskola.entities.Studentclass;
import hu.elte.autosiskola.entities.User;
import hu.elte.autosiskola.repositories.StudentclassRepository;
import hu.elte.autosiskola.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/courses")
public class StudentclassController {
    @Autowired
    private StudentclassRepository studentclassRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("")
    public ResponseEntity<Iterable<Studentclass>> getAll() {
        return ResponseEntity.ok(studentclassRepository.findAll());
    }

    @GetMapping("{id}")
    public ResponseEntity<Studentclass> getStudentClass(@PathVariable Integer id) {
        Optional<Studentclass> studentclass = studentclassRepository.findById(id);
        if (!studentclass.isPresent()) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(studentclass.get());
    }

    @PostMapping("adduser/{id}")
    public ResponseEntity<Studentclass> addUser(@PathVariable Integer id, @RequestBody User user) {
        Optional<Studentclass> studentclass = studentclassRepository.findById(id);
        Optional<User> userToAdd = userRepository.findById(user.getId());
        if (!studentclass.isPresent() || !userToAdd.isPresent()) {
            return ResponseEntity.badRequest().build();
        }
        studentclass.get().getUsers().add(user);
        userToAdd.get().getStudentclasses().add(studentclass.get());
        studentclassRepository.save(studentclass.get());
        userRepository.save(userToAdd.get());
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Studentclass> deleteCourse(@PathVariable Integer id) {
        Optional<Studentclass> studentclass = studentclassRepository.findById(id);
        if (!studentclass.isPresent()) {
            return ResponseEntity.badRequest().build();
        }
        studentclassRepository.delete(studentclass.get());
        return ResponseEntity.ok().build();
    }

    @PutMapping("")
    public ResponseEntity<Iterable<Studentclass>> addCourse(@RequestBody Studentclass course) {
        studentclassRepository.save(course);
        return ResponseEntity.ok(studentclassRepository.findAll());
    }

    @PatchMapping("{id}")
    public ResponseEntity<Studentclass> updateCourse(@PathVariable Integer id, @RequestBody Studentclass studentclass) {
        Optional<Studentclass> studentclassToUp = studentclassRepository.findById(id);
        if (!studentclassToUp.isPresent()) {
            return ResponseEntity.badRequest().build();
        }
        studentclass.setId(studentclassToUp.get().getId());
        studentclassRepository.save(studentclass);
        return ResponseEntity.ok().build();
    }


}
