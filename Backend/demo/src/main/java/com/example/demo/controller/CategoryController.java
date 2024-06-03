package com.example.demo.controller;

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
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/category")
public class CategoryController {
    @Autowired
    CategoryRepo categoryRepo;
    @Autowired
    ProductRepo productRepo;

    @GetMapping
    ResponseEntity<Object> getCategory(){
        try {
           List<CategoryModel>  categoryModels = categoryRepo.findAll();
            if(categoryModels != null){
                return ResponseEntity.ok(categoryModels);
            }else {
                return ResponseEntity.notFound().build();
            }

        }catch (EmptyResultDataAccessException ex){
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/getProduct/{id}")
    ResponseEntity<?> getProductsByCategoryId(@PathVariable("id")Integer id){
        if(id != null){
        Optional<CategoryModel> categoryModel = categoryRepo.findById(id);
        if(categoryModel.isPresent()){
            List<ProductModel> productModel = productRepo.findProductsByCategoryId(id);
            return  ResponseEntity.ok(productModel);

        }else{
            ErrorMessage errorMessage = new ErrorMessage("Category Not Found");
            return ResponseEntity.badRequest().body(errorMessage);
        }
        }else {
            ErrorMessage errorMessage = new ErrorMessage("Id not inserted");
            return  ResponseEntity.badRequest().body(errorMessage);
        }

    }

    @GetMapping("/{id}")
    ResponseEntity<Object> getCategoryById(@PathVariable int id){
       Optional<CategoryModel> categoryModel =  categoryRepo.findById(id);
    if (categoryModel.isPresent() ){
        return ResponseEntity.ok(categoryModel);
    }else {
        ErrorMessage errorMessage = new ErrorMessage("Not Found");
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorMessage);
    }
    }

    @PostMapping
    ResponseEntity<Object> postCategory(@RequestBody CategoryModel categoryModel){
      if(allFieldsPresent(categoryModel)){
          Integer count= categoryRepo.countByName(categoryModel.getName());
          System.out.println(count);
          if(count > 0){
              ErrorMessage errorMessage = new ErrorMessage("Already Exist");
              return ResponseEntity.badRequest().body(errorMessage);
          }else {
              categoryRepo.save(categoryModel);
              Message message = new Message("Insted Category");
              return  ResponseEntity.ok(message);
          }


      }else {
          ErrorMessage errorMessage = new ErrorMessage("Could not insert category. Please provide all fields.");
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMessage);
      }
    }
    public boolean allFieldsPresent(CategoryModel categoryModel){
//        name != null -> true &&  name == "" -> flase -> ! -> true = true
        return categoryModel.getName() != null && !categoryModel.getName().isEmpty();
    }

}
