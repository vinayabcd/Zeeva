package com.zeeva.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zeeva.dao.UserRepository;
import com.zeeva.sbeans.User;



@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localost:5173")
public class AuthController 
{
	@Autowired
	private UserRepository userRepo;
	
	
		@PostMapping("/login")
		public ResponseEntity<String> login(@RequestBody User login) throws Exception
		{
			try {
			return userRepo.findByEmail(login.getEmail())
					.filter(user->user.getPassword().equals(login.getPassword()))
					.map(user->ResponseEntity.ok("Login Successful"))
					.orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials"));
		}
		catch(Exception e) 
		{
			e.printStackTrace();
			throw e;
			
			

		}
	}
	
	
}
