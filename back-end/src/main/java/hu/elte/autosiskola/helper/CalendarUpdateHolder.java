package hu.elte.autosiskola.helper;


import hu.elte.autosiskola.entities.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CalendarUpdateHolder {
    User student;
    Date date;
}
