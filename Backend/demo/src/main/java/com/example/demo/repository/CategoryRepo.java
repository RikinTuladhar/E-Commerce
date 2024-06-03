package com.example.demo.repository;

import com.example.demo.model.CategoryModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CategoryRepo extends JpaRepository<CategoryModel,Integer> {
   @Query(value = "select count(*) from category c where c.name = :s",nativeQuery = true)
   Integer countByName(@Param("s") String s);
}
