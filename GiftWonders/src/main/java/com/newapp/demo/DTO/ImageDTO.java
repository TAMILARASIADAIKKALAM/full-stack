package com.newapp.demo.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter

@NoArgsConstructor
@AllArgsConstructor

public class ImageDTO {
    private Long id;
    private String name;
    private String contentType;
    private byte[] data;

    // Constructors, getters, and setters
}

