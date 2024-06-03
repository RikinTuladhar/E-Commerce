package com.example.demo.repository;

import com.example.demo.model.ProductModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepo extends JpaRepository<ProductModel,Integer> {

    @Query(value = "SELECT * FROM products p WHERE p.category_id = :c_id", nativeQuery = true)
    List<ProductModel> findProductsByCategoryId(@Param("c_id") Integer c_id);
}
