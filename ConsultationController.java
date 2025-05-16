package com.zeeva.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.zeeva.dao.ConsultationRepository;
import com.zeeva.sbeans.Consultation;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class ConsultationController 
{

	@Autowired
    private ConsultationRepository consultationRepo;
	

	@PostMapping("/consultation")
	public ResponseEntity<String> submit(@RequestBody Consultation consultation){
		try {
			consultationRepo.save(consultation);
			return ResponseEntity.ok("Consultataion submitted");
			
		}
		catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		
	}
	

}
