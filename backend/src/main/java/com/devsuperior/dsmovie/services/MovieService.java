package com.devsuperior.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.repositories.MovieRepository;

@Service
public class MovieService {
	
	@Autowired
	MovieRepository movieRepository;
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		Movie movie =  movieRepository.findById(id).get();
		MovieDTO movieDto = new MovieDTO(movie);
		return movieDto;
	}
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAll(Pageable pageable) {
		Page<Movie> movie =  movieRepository.findAll(pageable);
		Page<MovieDTO> movieDto = movie.map(x -> new MovieDTO(x));
		return movieDto;
	}

}
