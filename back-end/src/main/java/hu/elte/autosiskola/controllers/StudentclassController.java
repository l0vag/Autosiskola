package hu.elte.autosiskola.controllers;

import hu.elte.autosiskola.entities.Studentclass;
import hu.elte.autosiskola.repositories.StudentclassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/courses")
public class StudentclassController {
    @Autowired
    private StudentclassRepository studentclassRepository;

    @GetMapping("")
    public ResponseEntity<Iterable<Studentclass>> getAll() {
        return ResponseEntity.ok(studentclassRepository.findAll());
    }

}
