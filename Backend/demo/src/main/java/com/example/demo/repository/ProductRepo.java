package com.example.demo.repository;

import com.example.demo.model.ProductModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepo extends JpaRepository<ProductModel,Integer> {
}