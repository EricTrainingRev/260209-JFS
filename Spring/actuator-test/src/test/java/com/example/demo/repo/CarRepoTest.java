package com.example.demo.repo;

import com.example.demo.entity.Car;
import com.example.demo.entity.Make;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.data.jpa.test.autoconfigure.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@DataJpaTest
@ActiveProfiles("test")
public class CarRepoTest {
    @Autowired
    private CarRepo repo;

    @BeforeEach
    public void setup(){
        repo.save(Car.builder().color("Red").make(Make.FORD).build());
    }

    @AfterEach
    public void teardown(){
        repo.deleteAll();
    }

    @Test
    public void checkUUIDIsCreated(){
        Car generatedCar = repo.findAll().getFirst();
        assertNotNull(generatedCar.getId());
    }

    @Test
    public void getCarByColor(){
        Car retrievedCar = repo.findByColor("Red");
        assertEquals("Red", retrievedCar.getColor());
    }

}
