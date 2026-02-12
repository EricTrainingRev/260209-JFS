package com.revature.library.controller;

import com.revature.library.service.core.PatronService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class PatronController {

    private final PatronService service;

}
