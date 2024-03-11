package com.newapp.demo.mapper;

import org.springframework.stereotype.Component;

import com.newapp.demo.DTO.ImageDTO;
import com.newapp.demo.model.Image;

@Component
public class ImageMapper {
    
    public ImageDTO toDTO(Image image) {
        ImageDTO dto = new ImageDTO();
        dto.setId(image.getId());
        dto.setName(image.getName());
        dto.setContentType(image.getContentType());
        dto.setData(image.getData());
        return dto;
    }
    
    public Image toEntity(ImageDTO dto) {
        Image image = new Image();
        image.setId(dto.getId());
        image.setName(dto.getName());
        image.setContentType(dto.getContentType());
        image.setData(dto.getData());
        return image;
    }
}

