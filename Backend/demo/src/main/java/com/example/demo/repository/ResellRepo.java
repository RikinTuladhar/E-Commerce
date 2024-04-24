package com.example.demo.repository;

import com.example.demo.model.ResellModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResellRepo extends JpaRepository<ResellModel,Integer> {
}
