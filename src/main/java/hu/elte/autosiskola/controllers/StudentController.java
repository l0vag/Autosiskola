package hu.elte.autosiskola.controllers;

import hu.elte.autosiskola.entities.Student;
import hu.elte.autosiskola.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    @GetMapping("")
    public ResponseEntity<Iterable<Student>> getAll() {
        return ResponseEntity.ok(studentRepository.findAll());
    }
}
