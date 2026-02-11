package com.revature.web_demo.controller;

import com.revature.web_demo.entity.Car;
import org.springframework.web.bind.annotation.*;

/*
    the @RestController annotation combines the functionality of two important annotations:
    @Controller -> this tells Spring the class has methods that dictate what endpoints the API
                   should expose
    @ResponseBody -> this tells Spring whatever is returned by the methods in this class should be
                     serialized and attached as the body of the response returned by the server
 */
@RestController
// If you know your endpoints will share URI information you can specify it with the @RequestMapping annotation on the class
@RequestMapping("/car")
public class CarController {

    @GetMapping
    public Car getCarInformation(){
        Car car = new Car();
        car.setAge(30);
        car.setColor("Blue");
        car.setMake("Nissan");
        return car;
    }

    @PatchMapping
    public Car transformCarInformation(@RequestBody Car car){
        car.setColor(car.getColor().toUpperCase());
        car.setMake(car.getMake().toUpperCase());
        return car;
    }

}
