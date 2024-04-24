package com.example.demo.controller;

import com.example.demo.dto.ProductDto;
import com.example.demo.model.ProductModel;
import com.example.demo.repository.ProductRepo;
import com.example.demo.response.ErrorMessage;
import com.example.demo.response.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "*")
public class ProductController {
    @Autowired
    ProductRepo productRepo;

    @GetMapping
    ResponseEntity<Object> getproduct() {
        try {
            List <ProductModel> productModel = productRepo.findAll();
            if (productModel != null) {
                return ResponseEntity.ok(productModel);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (EmptyResultDataAccessException ex) {
            return ResponseEntity.notFound().build();
        }
    }
    @GetMapping("/{id}")
    ResponseEntity getProductById(@PathVariable int id) {
        Optional<ProductModel> productModelOptional = productRepo.findById(id);
        if (productModelOptional.isPresent()) {
            return ResponseEntity.ok(productModelOptional.get());
        } else {
            ErrorMessage errorMessage = new ErrorMessage("Not Found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorMessage);
        }
    }





    @PostMapping
    public ResponseEntity<Object> postProduct(@RequestBody ProductModel productModel) {
        if (productModel != null && areAllFieldsPresent(productModel)) {
            productRepo.save(productModel);
            Message message = new Message("Inserted product");
            return ResponseEntity.ok(message);
        } else {
            ErrorMessage errorMessage = new ErrorMessage("Could not insert product. Please provide all fields.");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMessage);
        }
    }

    private boolean areAllFieldsPresent(ProductModel productModel) {
        return productModel.getName() != null && !productModel.getName().isEmpty()
                && productModel.getDescription() != null && !productModel.getDescription().isEmpty()
                && productModel.getImages() != null && !productModel.getImages().isEmpty();
    }

}
