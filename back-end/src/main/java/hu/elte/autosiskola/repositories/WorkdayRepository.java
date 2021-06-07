package hu.elte.autosiskola.repositories;

import hu.elte.autosiskola.entities.Workday;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkdayRepository extends CrudRepository<Workday, Integer> {

}
