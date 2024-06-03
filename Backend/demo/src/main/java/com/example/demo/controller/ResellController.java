package com.example.demo.controller;

import com.example.demo.model.ResellModel;
import com.example.demo.repository.ResellRepo;
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
@RequestMapping("/resell")
@CrossOrigin(origins = "*")
public class ResellController {
    @Autowired
    ResellRepo resellRepo;

    @GetMapping
    ResponseEntity<Object> getResell (){
       try {
           List<ResellModel> resellModel =  resellRepo.findAll();
           if (!resellModel.isEmpty()) {
               return ResponseEntity.ok(resellModel);
           } else {
               return ResponseEntity.notFound().build();
           }
       }catch (EmptyResultDataAccessException ex){
           ErrorMessage errorMessage = new ErrorMessage("Not Found");
           return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorMessage);

       }
    }

    @PostMapping
    ResponseEntity<Object> postResell (@RequestBody ResellModel resellModel){
        if(AllFiledsExist(resellModel)){
            resellRepo.save(resellModel);
            Message message = new Message("Inserted Resell");
            return ResponseEntity.ok(message);

        }else {
            ErrorMessage errorMessage = new ErrorMessage("Please Insert All Params");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMessage);
        }

    }
    public boolean AllFiledsExist(ResellModel resellModel){
        Boolean bolPrice =  resellModel.getPrice() > 0 ? true : false;
        Boolean bolUseTime =  resellModel.getUsedTime() > 0 ? true : false;

        return  !resellModel.getName().isEmpty() && resellModel.getName() != null &&
                !resellModel.getDescription().isEmpty() && resellModel.getDescription() !=null &&
                bolPrice  && !resellModel.getImage().isEmpty() && resellModel != null && bolUseTime ;
    }
}
