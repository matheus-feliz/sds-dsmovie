package com.feliz.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.feliz.dsmovie.entities.Score;
import com.feliz.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
	
}
