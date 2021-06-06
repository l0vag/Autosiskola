package hu.elte.autosiskola.repositories;

import hu.elte.autosiskola.entities.Calendar;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;

@Repository
public interface CalendarRepository extends CrudRepository<Calendar, Integer> {

    @Query(value="SELECT * FROM Calendar WHERE Calendar.user_id = ?1", nativeQuery=true)
    Iterable<Calendar> findByInstructorId(Integer id);

    @Query(value="SELECT * FROM Calendar WHERE Calendar.user_id = ?1 and Calendar.date = ?2", nativeQuery = true)
    Iterable<Calendar> findExisting(Integer user_id, Date date);

}
