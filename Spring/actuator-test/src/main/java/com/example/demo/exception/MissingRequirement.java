package com.example.demo.exception;

public class MissingRequirement extends RuntimeException {
    public MissingRequirement(String message) {
        super(message);
    }
}
