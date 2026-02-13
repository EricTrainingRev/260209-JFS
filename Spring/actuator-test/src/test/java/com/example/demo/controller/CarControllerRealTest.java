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

/*
    If you need to make actual http requests as part of your tests you can tell Spring to initialize the web environment.
    This will make Spring actually start up the web server when it spings up the ApplicationContext. To make real
    HTTP requests to the server you can use the TestRestTemplate class. Make sure to use the AutoConfigureTestRestTemplate
    annotation so Spring has instructions for how to autowire the resource. Also note the Spring Boot Web test
    dependency does not include the implementation code for TestRestTemplate, so you need to add spring-boot-starter-restclient
    as a dependency to your project
 */
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
@AutoConfigureTestRestTemplate
public class CarControllerRealTest {
    // this sets the port value for whatever port was randomly chosen
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

        // here we set any header information
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        // here we create an HttpEntity that will provide our rest template with the body and header data for the http request
        HttpEntity<Car> requestEntity = new HttpEntity<>(car, headers);

        // here we make the request and get back the response
        ResponseEntity<Car> response = restTemplate.postForEntity(
                "http://localhost:" + port + "/car", requestEntity, Car.class);

        // now we can perform assertions on the response
        assertEquals(HttpStatus.OK, response.getStatusCode());
        Car carResult = response.getBody();
        assertNotNull(carResult);
        assertNotNull(carResult.getId());
        assertEquals("Red", carResult.getColor());
        assertEquals(Make.FORD, carResult.getMake());
    }
}
