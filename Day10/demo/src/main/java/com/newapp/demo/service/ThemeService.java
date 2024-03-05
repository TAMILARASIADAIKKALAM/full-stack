package com.newapp.demo.service;

import java.util.List;

import com.newapp.demo.DTO.ThemeDTO;

public interface ThemeService 
{
    ThemeDTO createTheme(ThemeDTO us);
    ThemeDTO getThemeById(Long themeid);
    List<ThemeDTO> getAllTheme();     
}
