package com.zeeva.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zeeva.sbeans.Consultation;

public interface ConsultationRepository extends JpaRepository<Consultation, Long> {}