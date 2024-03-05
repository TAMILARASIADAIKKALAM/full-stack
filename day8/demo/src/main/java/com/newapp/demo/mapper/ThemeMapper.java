package com.newapp.demo.mapper;

import com.newapp.demo.DTO.ThemeDTO;
import com.newapp.demo.model.Theme;

public class ThemeMapper {

    public static ThemeDTO maptoThemeDto(Theme theme) {
        
        ThemeDTO themeDTO=new ThemeDTO();

        themeDTO.setThemeId(theme.getThemeId());
        themeDTO.setThemeName(theme.getThemeName());
        themeDTO.setThemeDetails(theme.getThemeDetails());
        themeDTO.setThemePrice(theme.getThemePrice());
          
        return themeDTO;
    }

    public static Theme maptoTheme(ThemeDTO themeto) {

        Theme theme=new Theme();
        theme.setThemeId(themeto.getThemeId());
        theme.setThemeName(themeto.getThemeName());
        theme.setThemeDetails(themeto.getThemeDetails());
        theme.setThemePrice(themeto.getThemePrice());
          
        return theme;        
    }

}