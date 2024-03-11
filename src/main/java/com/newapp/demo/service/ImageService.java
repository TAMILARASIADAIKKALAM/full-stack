package com.newapp.demo.service;

//import com.newapp.demo.DTO.GiftDTO;
//import com.newapp.demo.DTO.ImageDTO;
import com.newapp.demo.model.Image;

public interface ImageService {
   void saveImage(Image a);

   Image getImageById(Long id);

}