package hu.elte.autosiskola.helper;

import hu.elte.autosiskola.entities.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserUpdateHolder {
    User user;
    User updatedUser;
}