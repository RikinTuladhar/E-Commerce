package com.example.demo.dto;

import lombok.Data;

@Data
public class ProductResponse {
    private String name;
    private String description;
    private long price;
    private String images;
    private String categoryName;


}
