package com.revature.library.exception;

public class LoginFail extends RuntimeException {
    public LoginFail(String message) {
        super(message);
    }
}
