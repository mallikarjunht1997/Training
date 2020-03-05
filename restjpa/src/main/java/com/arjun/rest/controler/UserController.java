package com.arjun.rest.controler;

import java.util.List;
import java.util.Optional;

import com.arjun.rest.service.IUserCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.arjun.rest.model.User;

import javax.websocket.server.PathParam;

@RestController
@CrossOrigin
public class UserController {
	@Autowired
	IUserCrudService userCrudService;

	@RequestMapping("/")
	public List<User> home() {
		return userCrudService.getAllUsers();
	}
	@RequestMapping(value = "/add/{name}", method=RequestMethod.POST)
	public User add(User name) {
		return userCrudService.createUser(name);
	}
	//delete user api
	@RequestMapping(value = "/delete/{id}", method=RequestMethod.DELETE)
	public Integer delete(@PathVariable("id") Integer id) {
		return userCrudService.deleteUser(id);
	}
	//update
	@RequestMapping(value = "/update/{id}/{name}", method=RequestMethod.POST)
	public User update(User user) {

		return userCrudService.updateUser(user);
	}

	@RequestMapping(value = "/find", method=RequestMethod.GET)
	public List<User> find() {
		return userCrudService.getAllUsers();
	}
	@RequestMapping(value = "/find/{id}", method=RequestMethod.GET)
	public Optional<User> find(@PathVariable int id){
		return userCrudService.getUser(id);
	}


}
