package com.newapp.demo.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class ThemeDTO {
    private Long themeId;
    private String themeName;
    private String themeDetails;
    private Double themePrice;
}

