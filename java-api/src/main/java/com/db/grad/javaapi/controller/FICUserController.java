package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.model.FICUser;
import com.db.grad.javaapi.repository.FICUsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.List;

@RestController
@CrossOrigin
public class FICUserController {
    @Autowired
    private FICUsersRepository usersRepository;

    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @PostMapping("/user/signup")
    public int createUser(@RequestBody FICUser user) {

        try {
            user.setPassword(encoder.encode(user.getPassword()));
            usersRepository.saveAndFlush(user);
        } catch (Exception E) {
            System.out.println(E.getMessage());
            return -1;
        }
        return 1;
    }

    @GetMapping("/user/getall")
    public List<FICUser> findALL() {
        return usersRepository.findAll();
    }

    @PostMapping("/user/login")
    public FICUser findUser(@RequestBody LoginCredentials credentials) {
        try {
            FICUser user = usersRepository.findFirstByEmail(credentials.email);

            if (user == null)
                return null; // user not found

            if (encoder.matches(credentials.password, user.getPassword())) {
                return user; // authentication successful
            }
            return null; // incorrect password
        } catch (Exception E) {
            System.out.println(E.getMessage());
            return null;
        }
    }
}

class LoginCredentials {
    String email;
    String password;

    public LoginCredentials(String email, String password) {
        this.email = email;
        this.password = password;
    }
}
