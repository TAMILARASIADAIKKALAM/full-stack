package com.newapp.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter


@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="themes")
public class Theme {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name="themeId",nullable = false)
    private Long themeId;
    @Column(name="themeName",nullable = false)
    private String themeName;
    @Column(name="themeDetails",nullable = false)
    private String themeDetails;
    @Column(name="themePrice",nullable = false)
    private Double themePrice;
    

}
