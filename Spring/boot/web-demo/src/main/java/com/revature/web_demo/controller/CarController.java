package com.revature.web_demo.controller;

import com.revature.web_demo.entity.Car;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
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
        car.setAge(40);
        return car;
    }

    @GetMapping("/{make}")
    public Car utilizePathParameter(@PathVariable("make") String make){
        Car car = new Car();
        if(make.equals("ford")){
            car.setColor("Blue");
            car.setMake(make);
            car.setAge(2);
        } else {
            car.setColor("Green");
            car.setMake(make);
            car.setAge(12);
        }
        return car;
    }

    @GetMapping("/search")
    public Car utilizeQueryParameters(@RequestParam String make){
        Car car = new Car();
        if(make.equals("ford")){
            car.setColor("Blue");
            car.setMake(make);
            car.setAge(2);
        } else {
            car.setColor("Green");
            car.setMake(make);
            car.setAge(12);
        }
        return car;
    }

    @PostMapping
    public ResponseEntity<Car> workingWithResponseEntities(@RequestBody Car car){
        car.setAge(car.getAge()*2);
        car.setColor(car.getColor().toUpperCase());
        car.setMake(car.getMake().toUpperCase());
        return ResponseEntity.status(HttpStatus.MOVED_PERMANENTLY).header("custom-header", "custom value").body(car);
    }



}
