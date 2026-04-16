package com.example.retail.security;
import org.springframework.stereotype.Component;

import java.util.Base64;

@Component
public class JwtUtil {

    public String generateToken(String email) {
        return Base64.getEncoder().encodeToString(email.getBytes());
    }

    public String getEmail(String token) {
        return new String(Base64.getDecoder().decode(token));
    }

    public boolean isValid(String token, String email) {
        return getEmail(token).equals(email);
    }
}