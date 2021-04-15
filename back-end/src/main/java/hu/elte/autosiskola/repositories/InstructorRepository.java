package hu.elte.autosiskola.repositories;

import hu.elte.autosiskola.entities.Instructor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InstructorRepository extends CrudRepository<Instructor, Integer> {
}
