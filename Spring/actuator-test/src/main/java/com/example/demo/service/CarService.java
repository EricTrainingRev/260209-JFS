package com.example.demo.service;

import com.example.demo.entity.Car;
import com.example.demo.exception.MissingRequirement;
import com.example.demo.exception.UnsupportedFeature;
import com.example.demo.repo.CarRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CarService {

    private final CarRepo repo;

    public Car createCar(Car car){
        if (car.getColor() == null){
            throw new MissingRequirement("Car must have a designated color");
        }
        if (car.getColor().equalsIgnoreCase("purple")){
            throw new UnsupportedFeature("Purple cars are not yet supported");
        }
        return repo.save(car);
    }

}
