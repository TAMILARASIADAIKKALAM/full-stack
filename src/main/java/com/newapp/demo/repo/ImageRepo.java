package com.newapp.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.newapp.demo.model.Image;

public interface ImageRepo extends JpaRepository<Image, Long> {
}

