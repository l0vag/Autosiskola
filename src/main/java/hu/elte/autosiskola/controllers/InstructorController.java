package hu.elte.autosiskola.controllers;

import hu.elte.autosiskola.entities.Instructor;
import hu.elte.autosiskola.repositories.ExamRepository;
import hu.elte.autosiskola.repositories.InstructorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/instructors")
public class InstructorController {
    @Autowired
    private InstructorRepository instructorRepository;

    @GetMapping("")
    public ResponseEntity<Iterable<Instructor>> getAll() {
        return ResponseEntity.ok(instructorRepository.findAll());
    }
}
