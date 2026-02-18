package com.revature.library.controller;

import com.revature.library.exception.AuthFail;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalController {

    @ExceptionHandler(AuthFail.class)
    public ResponseEntity<Map<String, String>> handleAuthFail(AuthFail exception){
        Map<String, String> responseMap = new HashMap<>();
        responseMap.put("message", exception.getMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseMap);
    }

}
