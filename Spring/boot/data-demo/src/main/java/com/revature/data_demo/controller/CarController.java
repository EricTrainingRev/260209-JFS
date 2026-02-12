package com.revature.data_demo.controller;

import com.revature.data_demo.entity.Car;
import com.revature.data_demo.repo.CarRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/car")
public class CarController {

    private final CarRepo repo;

    @PostMapping
    public Car createCar(@RequestBody Car car){
        return repo.save(car);
    }

    @GetMapping
    public List<Car> getAllCars(){
        return repo.findAll();
    }

}
