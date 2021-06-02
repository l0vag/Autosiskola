package hu.elte.autosiskola.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode

public class Exam {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String title;

    @Column
    @Temporal(TemporalType.DATE)
    private Date examDate;

    /*
    @JsonIgnore
    @OneToMany(mappedBy = "exam" )
    private List<Studentclass> studentclasses;
    */

    @JsonIgnore
    @ManyToMany
    private List<User> users;

    @OneToMany(mappedBy = "exam")
    private List<Examresult> results;

}
