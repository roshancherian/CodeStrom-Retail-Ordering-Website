package com.example.retail.controller;

import com.example.retail.dto.LoginRequest;
import com.example.retail.dto.ResetPasswordRequest;
import com.example.retail.entity.User;
import com.example.retail.service.AuthService;
import com.example.retail.service.PasswordService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService service;
    private final PasswordService passwordService;

    @PostMapping("/signup")
    public ResponseEntity<User> signup(@RequestBody User user) {
        return ResponseEntity.ok(service.signup(user));
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody LoginRequest request) {
        return ResponseEntity.ok(service.login(request.getEmail(), request.getPassword()));
    }

    @PostMapping("/forgot-password")
    public ResponseEntity<String> forgot(@RequestBody Map<String, String> req) {
        try {
            String token = passwordService.forgot(req.get("email"));
            return ResponseEntity.ok("Reset token: " + token);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/reset-password")
    public ResponseEntity<String> reset(@RequestBody ResetPasswordRequest req) {
        try {
            passwordService.reset(req.getToken(), req.getNewPassword());
            return ResponseEntity.ok("Password updated successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}