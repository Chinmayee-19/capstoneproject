package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Job;
import com.entity.User;
import com.repository.UserRepository;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
	
	@Autowired
	private UserRepository Userrepo;
	
	@GetMapping("/seeallusers")
	public List<User> getAllUsers() {
		return Userrepo.findAll();
	}
	
	@PostMapping("/saveuser")
	public User saveUserDetails(@RequestBody User user) {
		return Userrepo.save(user);
	}
	
	@GetMapping("/{id}")
	public User getUserById(@PathVariable Long id) {
		return Userrepo.findById(id).get();
	}
	
	@PutMapping("/updateuser")
	public User updateUser(@RequestBody User user) {
		return Userrepo.save(user);
	}
	
	@DeleteMapping("/deluser/{id}")
	public ResponseEntity<HttpStatus> deleteUserById(@PathVariable Long id) {
		Userrepo.deleteById(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	
	
}
