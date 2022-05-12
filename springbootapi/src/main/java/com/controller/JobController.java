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
import com.repository.JobRespository;

@RestController
@RequestMapping("/job")
@CrossOrigin("*")
public class JobController {

	@Autowired
	private JobRespository Jobrepo;
	
	@GetMapping("/seealljobs")
	public List<Job> getAllUsers() {
		return Jobrepo.findAll();
	}
	
	@GetMapping("/{id}")
	public Job getJobById(@PathVariable Long id) {
		return Jobrepo.findById(id).get();
	}
	@PostMapping("/postjob")
	public Job saveJobDetails(@RequestBody Job job) {
		return Jobrepo.save(job);
	}
	
	@DeleteMapping("/deletejob/{id}")
	public ResponseEntity<HttpStatus> deleteJobById(@PathVariable Long id) {
		Jobrepo.deleteById(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	@PutMapping("/updatejob/{id}")
	public Job updateJob(@RequestBody Job job) {
		return Jobrepo.save(job);
	}
	
	
}
