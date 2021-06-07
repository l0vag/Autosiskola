package hu.elte.autosiskola.helper;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CalendarHelper {
    Integer studentId;
    Integer weekNum;
    Integer dayNum;
    Integer classNum;
}
