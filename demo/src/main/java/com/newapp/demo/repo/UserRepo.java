package com.newapp.demo.repo;
import org.springframework.data.jpa.repository.JpaRepository;

import com.newapp.demo.model.User;

public interface UserRepo extends JpaRepository<User, Long> {

}

