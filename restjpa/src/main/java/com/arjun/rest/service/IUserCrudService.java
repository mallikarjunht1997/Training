package com.arjun.rest.service;

import com.arjun.rest.model.User;

import java.util.List;
import java.util.Optional;

public interface IUserCrudService {

    User createUser(User user);
    List<User> getAllUsers();
    Optional<User> getUser(int id);
    Integer deleteUser(int id);
    User updateUser(User user);

}
