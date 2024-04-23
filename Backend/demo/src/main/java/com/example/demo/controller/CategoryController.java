package com.example.demo.controller;

import com.example.demo.model.CategoryModel;
import com.example.demo.repository.CategoryRepo;
import com.example.demo.response.ErrorMessage;
import com.example.demo.response.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/category")
public class CategoryController {
    @Autowired
    CategoryRepo categoryRepo;

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

    @PostMapping
    ResponseEntity<Object> postCategory(@RequestBody CategoryModel categoryModel){
      if(allFieldsPresent(categoryModel)){
          categoryRepo.save(categoryModel);
          Message message = new Message("Insted Category");
          return  ResponseEntity.ok(message);

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
