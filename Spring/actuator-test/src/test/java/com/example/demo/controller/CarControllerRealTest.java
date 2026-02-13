package com.example.demo.controller;

import com.example.demo.entity.Car;
import com.example.demo.entity.Make;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.resttestclient.TestRestTemplate;
import org.springframework.boot.resttestclient.autoconfigure.AutoConfigureTestRestTemplate;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.test.context.ActiveProfiles;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
@AutoConfigureTestRestTemplate
public class CarControllerRealTest {
    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void createCar() {
        Car car = Car.builder()
                .color("Red")
                .make(Make.FORD)
                .build();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<Car> requestEntity = new HttpEntity<>(car, headers);

        ResponseEntity<Car> response = restTemplate.postForEntity(
                "http://localhost:" + port + "/car", requestEntity, Car.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        Car carResult = response.getBody();
        assertNotNull(carResult);
        assertNotNull(carResult.getId());
        assertEquals("Red", carResult.getColor());
        assertEquals(Make.FORD, carResult.getMake());
    }
}
