package hu.elte.autosiskola.repositories;

import hu.elte.autosiskola.entities.DriveClass;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DriveClassRepository extends CrudRepository<DriveClass, Integer> {

    @Query(value = "SELECT * FROM workweek,workday,drive_class WHERE workweek.id=workday.workweek_id and workday.id=drive_class.workday_id and drive_class.user=?1", nativeQuery = true)
    Iterable<DriveClass> getAll(String userName);

}
