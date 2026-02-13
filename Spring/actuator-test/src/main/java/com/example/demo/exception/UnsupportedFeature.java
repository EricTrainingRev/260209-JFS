package com.example.demo.exception;

public class UnsupportedFeature extends RuntimeException {
    public UnsupportedFeature(String message) {
        super(message);
    }
}
