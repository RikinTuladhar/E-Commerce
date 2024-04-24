package com.example.demo.dto;

import lombok.Data;

@Data
public class ProductRequest {
    private String name;
    private String description;
    private long price;
    private String images;
    private int categoryId;

}
