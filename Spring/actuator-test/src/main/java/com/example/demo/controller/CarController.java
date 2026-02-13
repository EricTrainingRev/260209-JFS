package com.example.demo.controller;

import com.example.demo.entity.Car;
import com.example.demo.exception.MissingRequirement;
import com.example.demo.service.CarService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/car")
public class CarController {

    private final CarService service;

    @PostMapping
    public Car createCar(@RequestBody Car car){
        return service.createCar(car);
    }

    @ExceptionHandler(MissingRequirement.class)
    public ResponseEntity<Map<String,String>> handleMissingRequirement(MissingRequirement e){
        Map<String, String> responseMap = new HashMap<>();
        responseMap.put("message", e.getMessage());
        return ResponseEntity.badRequest().body(responseMap);
    }



}
