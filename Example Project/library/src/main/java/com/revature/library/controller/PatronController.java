package com.revature.library.controller;

import com.revature.library.entity.Patron;
import com.revature.library.service.core.PatronService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/patron")
public class PatronController {

    private final PatronService service;

    @PostMapping
    public ResponseEntity<Patron> createPatron(@RequestBody Patron credentials){
        return ResponseEntity.status(HttpStatus.CREATED).body(service.createPatron(credentials));
    }

}
