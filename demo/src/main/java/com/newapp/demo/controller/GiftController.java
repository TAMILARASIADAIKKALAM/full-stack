package com.newapp.demo.controller;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.newapp.demo.DTO.GiftDTO;
import com.newapp.demo.service.GiftService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/gift")

public class GiftController {

    private GiftService giftser;

    // Build Add Employee REST API
    @PostMapping
    public ResponseEntity<GiftDTO> createGift(@RequestBody GiftDTO giftDTO) {
        GiftDTO savedUser = giftser.createGift(giftDTO);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    // Build Get Employee REST API
    @GetMapping("{id}")
    public ResponseEntity<GiftDTO> getGiftById(@PathVariable("id") Long UserId) {
        GiftDTO userDto = giftser.getGiftById(UserId);
        return ResponseEntity.ok(userDto);
    }

    // Build Get All Employee REST API
    @GetMapping
    public ResponseEntity<List<GiftDTO>> getAllGift() {
        List<GiftDTO> user = giftser.getAllGift();
        return ResponseEntity.ok(user);
    }

}

