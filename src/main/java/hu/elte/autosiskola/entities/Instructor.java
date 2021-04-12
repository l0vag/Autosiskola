package hu.elte.autosiskola.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode

public class Instructor {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    @NotNull
    private String name;

    @JsonIgnore
    @OneToMany(mappedBy = "instructor")
    private List<Student> students;

    @JsonIgnore
    @OneToMany(mappedBy = "instructor")
    private List<Exam> exams;

}
