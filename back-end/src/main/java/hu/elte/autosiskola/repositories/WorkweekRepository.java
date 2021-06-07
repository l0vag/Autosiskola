package hu.elte.autosiskola.repositories;

import hu.elte.autosiskola.entities.Workweek;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkweekRepository extends CrudRepository<Workweek, Integer> {


}
