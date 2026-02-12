package com.revature.data_demo.repo;

import com.revature.data_demo.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CarRepo extends JpaRepository<Car, UUID> {
}
