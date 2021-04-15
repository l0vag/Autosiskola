package hu.elte.autosiskola.repositories;

import hu.elte.autosiskola.entities.Exam;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ExamRepository extends CrudRepository<Exam, Integer> {
    @Query(value = "SELECT * FROM exam WHERE exam.examDate > CURRENT_DATE ", nativeQuery = true)
    Optional<Exam> getAvailable();
}
