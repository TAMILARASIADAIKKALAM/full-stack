package com.newapp.demo.mapper;

import com.newapp.demo.DTO.UserDTO;
import com.newapp.demo.model.User;

public class UserMapper {

    public static UserDTO maptoUserDto(User user) {

        UserDTO userDTO=new UserDTO();

        userDTO.setUserId(userDTO.getUserId());
        userDTO.setUserName(userDTO.getUserName());
        userDTO.setEmail(userDTO.getEmail());
        userDTO.setPassword(userDTO.getPassword());
        userDTO.setMobile(userDTO.getMobile());
        userDTO.setUserRole(userDTO.getUserRole());
        
        return userDTO;
    }

    public static User maptoUser(UserDTO userto) {

        User user=new User();
        user.setUserId(user.getUserId());
        user.setUserName(user.getUserName());
        user.setEmail(user.getEmail());
        user.setPassword(user.getPassword());
        user.setMobile(user.getMobile());
        user.setUserRole(user.getUserRole());
          
        return user;        
    }

}
