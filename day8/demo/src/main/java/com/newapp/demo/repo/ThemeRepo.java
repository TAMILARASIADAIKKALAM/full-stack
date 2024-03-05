package com.newapp.demo.repo;
import org.springframework.data.jpa.repository.JpaRepository;

import com.newapp.demo.model.Theme;


public interface ThemeRepo extends JpaRepository<Theme, Long> {

}
