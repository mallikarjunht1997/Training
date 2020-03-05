package com.arjun.rest.service.impl;

import com.arjun.rest.model.User;
import com.arjun.rest.repository.UserRepository;
import com.arjun.rest.service.IUserCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class UserCrudServiceImpl implements IUserCrudService {

    @Autowired
    UserRepository userRepository;
    private Optional<User> res;

    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public Optional<User> getUser(int id) {
        return userRepository.findById(id);
    }

    @Override
    public Integer deleteUser(int id) {
        int ids = id;
        userRepository.deleteById(id);
        return ids;
    }

    @Override
    public User updateUser(User user) {
        return userRepository.save(user);
    }
}
