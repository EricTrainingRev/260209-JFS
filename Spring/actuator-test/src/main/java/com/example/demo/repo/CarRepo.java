package com.example.demo.repo;

import com.example.demo.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CarRepo extends JpaRepository<Car, UUID> {

    Car findByColor(String color);

}
