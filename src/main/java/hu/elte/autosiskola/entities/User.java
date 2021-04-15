package hu.elte.autosiskola.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = true)
    private String name;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Role role;

    public enum Role {
        ROLE_GUEST, ROLE_STUDENT, ROLE_INSTRUCTOR, ROLE_ADMIN
    }

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Exam> exams;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Studentclass> studentclasses;

}
