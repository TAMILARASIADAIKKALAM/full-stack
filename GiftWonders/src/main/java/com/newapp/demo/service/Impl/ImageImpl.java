package com.newapp.demo.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.newapp.demo.model.Image;
import com.newapp.demo.repo.ImageRepo;
import com.newapp.demo.service.ImageService;

import java.io.IOException;

@Service
public class ImageImpl implements ImageService {
    @Autowired
    private ImageRepo imageRepository;

    public void saveImage(Image image) {
        imageRepository.save(image);
    }

    public Image getImageById(Long id) {
        return imageRepository.findById(id).orElse(null);
    }
}
