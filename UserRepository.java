package com.zeeva.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zeeva.sbeans.User;

import jakarta.persistence.Id;


public interface UserRepository extends JpaRepository<User,Long> 
{
	Optional<User> findByEmail(String email);
	

}
