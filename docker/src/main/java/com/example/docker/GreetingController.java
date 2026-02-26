package com.example.docker;

import java.io.IOException;
import java.util.logging.FileHandler;
import java.util.logging.Logger;
import java.util.logging.SimpleFormatter;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.annotation.PostConstruct;

@RestController
public class GreetingController {

    private static final Logger logger = Logger.getLogger(GreetingController.class.getName());
    private int count = 0;

    @PostConstruct
    public void setupLogger() throws IOException{
        FileHandler fileHandler = new FileHandler("greeting.log", true);
        fileHandler.setFormatter(new SimpleFormatter());
        logger.addHandler(fileHandler);
    }

    @RequestMapping("/greet")
    public String greet(){
        logger.info("greeting count: " + count++);
        return "Hello there!";
    }
}
