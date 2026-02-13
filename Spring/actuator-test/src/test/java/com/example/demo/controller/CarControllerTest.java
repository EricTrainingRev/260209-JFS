package com.example.demo.controller;


import com.example.demo.entity.Car;
import com.example.demo.entity.Make;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import tools.jackson.databind.ObjectMapper;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class CarControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    public void createCar() throws Exception {
        Car car = Car.builder()
                .color("Red")
                .make(Make.FORD)
                .build();
        String carJson = objectMapper.writeValueAsString(car);
        MvcResult result = mockMvc.perform(post("/car").contentType(MediaType.APPLICATION_JSON).content(carJson))
                .andExpect(status().isOk())
                .andReturn();
        String responseBody = result.getResponse().getContentAsString();
        Car carResult = objectMapper.readValue(responseBody,Car.class);
        assertNotNull(carResult.getId());
        assertEquals("Red", carResult.getColor());
        assertEquals(Make.FORD, carResult.getMake());
    }

}
