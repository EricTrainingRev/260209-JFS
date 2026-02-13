package com.example.demo.service;

import com.example.demo.entity.Car;
import com.example.demo.entity.Make;
import com.example.demo.exception.MissingRequirement;
import com.example.demo.repo.CarRepo;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.UUID;

@ExtendWith(MockitoExtension.class)
public class CarServiceTest {

    @Mock
    private CarRepo repo;
    @InjectMocks
    private CarService service;

    @Test
    public void positiveTest(){
        Car mockCar = Car.builder()
                .color("Red")
                .make(Make.FORD)
                .build();
        Car createdCar = Car.builder()
                .id(UUID.randomUUID())
                .color("Red")
                .make(Make.FORD)
                .build();
        Mockito.when(repo.save(mockCar)).thenReturn(createdCar);
        Car result = service.createCar(mockCar);
        Assertions.assertEquals(createdCar, result);
    }

    @Test
    public void preventEmptyColor(){
        Car colorlessCar = Car.builder()
                .make(Make.FORD)
                .build();
        Assertions.assertThrows(MissingRequirement.class, ()-> service.createCar(colorlessCar));
    }

}
