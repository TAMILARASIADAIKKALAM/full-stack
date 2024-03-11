package com.newapp.demo.controller;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.newapp.demo.DTO.ThemeDTO;
import com.newapp.demo.service.ThemeService;
import lombok.AllArgsConstructor;
@AllArgsConstructor
@RestController
@RequestMapping("/api/theme")

public class ThemeController {

    private ThemeService themeser;

    // Build Add Employee REST API

    @PostMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<ThemeDTO> createTheme(@RequestBody ThemeDTO themeDTO) {
        ThemeDTO savedTheme = themeser.createTheme(themeDTO);
        return new ResponseEntity<>(savedTheme, HttpStatus.CREATED);
    }

    // Build Get Employee REST API
    @GetMapping("{id}")
    public ResponseEntity<ThemeDTO> getThemeId(@PathVariable("id") Long ThemeId) {
        ThemeDTO themeDto = themeser.getThemeById(ThemeId);
        return ResponseEntity.ok(themeDto);
    }

    // Build Get All Employee REST API
    @GetMapping

    public ResponseEntity<List<ThemeDTO>> getAllTheme() {
        List<ThemeDTO> theme = themeser.getAllTheme();
        return ResponseEntity.ok(theme);
    }

}


