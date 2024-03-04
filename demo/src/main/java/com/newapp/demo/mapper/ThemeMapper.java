package com.newapp.demo.mapper;

import com.newapp.demo.DTO.ThemeDTO;
import com.newapp.demo.model.Theme;

public class ThemeMapper {

    public static ThemeDTO maptoThemeDto(Theme theme) {
        
        ThemeDTO themeDTO=new ThemeDTO();

        themeDTO.setThemeId(themeDTO.getThemeId());
        themeDTO.setThemeName(themeDTO.getThemeName());
        themeDTO.setThemeDetails(themeDTO.getThemeDetails());
        themeDTO.setThemePrice(themeDTO.getThemePrice());
          
        return themeDTO;
    }

    public static Theme maptoTheme(ThemeDTO themeto) {

        Theme theme=new Theme();
        theme.setThemeId(theme.getThemeId());
        theme.setThemeName(theme.getThemeName());
        theme.setThemeDetails(theme.getThemeDetails());
        theme.setThemePrice(theme.getThemePrice());
          
        return theme;        
    }

}