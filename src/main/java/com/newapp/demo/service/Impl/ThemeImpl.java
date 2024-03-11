package com.newapp.demo.service.Impl;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;
import com.newapp.demo.DTO.ThemeDTO;
import com.newapp.demo.mapper.ThemeMapper;
import com.newapp.demo.model.Theme;
import com.newapp.demo.repo.ThemeRepo;
import com.newapp.demo.service.ThemeService;
import com.newapp.demo.exception.ResourceNotFoundException;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class ThemeImpl implements ThemeService {
  private ThemeRepo themeRepo;

  @Override
  public ThemeDTO createTheme(ThemeDTO u) {
    Theme r = ThemeMapper.maptoTheme(u);
    Theme saved = themeRepo.save(r);
    return ThemeMapper.maptoThemeDto(saved);
  }

  @Override
  public ThemeDTO getThemeById(Long themeid) {
    Theme u = themeRepo.findById(themeid)
        .orElseThrow(() -> new ResourceNotFoundException("User is not exist with given id:" + themeid));
    return ThemeMapper.maptoThemeDto(u);
  }

  @Override
  public List<ThemeDTO> getAllTheme() {
    List<Theme> li = themeRepo.findAll();
    List<ThemeDTO> lis = new ArrayList<>();
    for (Theme u : li) {
      lis.add(ThemeMapper.maptoThemeDto(u));
    }
    return lis;
  }
}
