package com.example.demo.controller;

import com.example.demo.dto.ProductDto;
import com.example.demo.dto.ProductRequest;
import com.example.demo.dto.ProductResponse;
import com.example.demo.model.CategoryModel;
import com.example.demo.model.ProductModel;
import com.example.demo.repository.CategoryRepo;
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
    @Autowired
    CategoryRepo categoryRepo;

    @GetMapping
    ResponseEntity<Object> getProducts() {
        try {
            List<ProductModel> productModels = productRepo.findAll();
            List<ProductResponse> productResponses = new ArrayList<>();
            for (ProductModel product : productModels) {
                ProductResponse productResponse = new ProductResponse();
                productResponse.setName(product.getName());
                productResponse.setDescription(product.getDescription());
                productResponse.setImages(product.getImages());
                productResponse.setPrice(product.getPrice());

                // Check if categoryModel is not null before setting categoryName
                CategoryModel categoryModel = product.getCategoryModel();
                if (categoryModel != null) {
                    productResponse.setCategoryName(categoryModel.getName());
                } else {
                    productResponse.setCategoryName("Uncategorized"); // Set a default value or handle it as needed
                }

                productResponses.add(productResponse);
            }
            return ResponseEntity.ok(productResponses);
        } catch (EmptyResultDataAccessException ex) {
            return ResponseEntity.notFound().build();
        }
    }



    @GetMapping("/{id}")
    ResponseEntity getProductById(@PathVariable int id) {
        ProductModel productModel = productRepo.findById(id).orElse(null);
        if (productModel != null) {
            ProductResponse productResponse = new ProductResponse();
            CategoryModel categoryModel = productModel.getCategoryModel();
            productResponse.setName(productModel.getName());
            productResponse.setDescription(productModel.getDescription());
            productResponse.setImages(productModel.getImages());
            productResponse.setPrice(productModel.getPrice());
            productResponse.setCategoryName(categoryModel.getName());
            return ResponseEntity.ok(productResponse);
        } else {
            ErrorMessage errorMessage = new ErrorMessage("Not Found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorMessage);
        }
    }





    @PostMapping
    public ResponseEntity<Object> postProduct(@RequestBody ProductRequest productRequest) {
        CategoryModel categoryModel =  categoryRepo.findById(productRequest.getCategoryId()).orElse(null);

        if (categoryModel == null) {
            ErrorMessage errorMessage = new ErrorMessage("Category Not Found");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMessage);
        } else {

            ProductModel productModel = new ProductModel();
            productModel.setName(productRequest.getName());
            productModel.setDescription(productRequest.getDescription());
            productModel.setImages(productRequest.getImages());
            productModel.setPrice(productRequest.getPrice());
            productModel.setCategoryModel(categoryModel);
            if(areAllFieldsPresent(productModel)){
                productRepo.save(productModel);
                Message message = new Message("Inserted product");
                return ResponseEntity.ok(message);
            }else {
                ErrorMessage errorMessage = new ErrorMessage("Could not insert product. Please provide all fields.");
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMessage);
            }

        }
    }



    private boolean areAllFieldsPresent(ProductModel productModel) {
        return productModel.getName() != null && !productModel.getName().isEmpty()
                && productModel.getDescription() != null && !productModel.getDescription().isEmpty()
                && productModel.getImages() != null && !productModel.getImages().isEmpty();
    }

}
