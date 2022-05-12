package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.User;
import com.entity.UserProfile;
import com.repository.UserProfileRepository;

@RestController
@RequestMapping("/userprofile")
@CrossOrigin("*")
public class UserProfileController {

	@Autowired
	private UserProfileRepository uprepo;
	
	@PostMapping("/saveuserjob")
	public UserProfile saveUserDetails(@RequestBody UserProfile userpro) {
		return uprepo.save(userpro);
	}
	@GetMapping("/{id}")
	public UserProfile getUserById(@PathVariable Long id) {
		return uprepo.findById(id).get();
	}
}
