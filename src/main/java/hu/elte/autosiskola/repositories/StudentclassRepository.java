package hu.elte.autosiskola.repositories;

import hu.elte.autosiskola.entities.Studentclass;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentclassRepository extends CrudRepository<Studentclass, Integer> {

}
