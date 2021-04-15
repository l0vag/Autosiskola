package hu.elte.autosiskola.controllers;

import hu.elte.autosiskola.entities.Exam;
import hu.elte.autosiskola.repositories.ExamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/exams")
public class ExamController {
    @Autowired
    private ExamRepository examRepository;

    @GetMapping("")
    public ResponseEntity<Iterable<Exam>> getAll() {
        return ResponseEntity.ok(examRepository.findAll());
    }
}
