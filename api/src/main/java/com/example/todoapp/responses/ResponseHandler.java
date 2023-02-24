package com.example.todoapp.responses;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class ResponseHandler {
    public static ResponseEntity<Object> generateResponse(String message, HttpStatus status, Object responseData) {
        Map<String, Object> res = new HashMap<>();
        res.put("message", message);
        res.put("status", status.value());
        res.put("data", responseData);
        return new ResponseEntity<Object>(res, status);
    }

}
