package com.example.demo.dto;

import lombok.Data;

@Data
public class ProductDto {
    private String name;
    private String description;
    private long price;
    private String images;
}
