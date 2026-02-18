package com.revature.library.exception;

public class AuthFail extends RuntimeException {
    public AuthFail(String message) {
        super(message);
    }
}
