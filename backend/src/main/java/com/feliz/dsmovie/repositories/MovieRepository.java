package com.feliz.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.feliz.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
