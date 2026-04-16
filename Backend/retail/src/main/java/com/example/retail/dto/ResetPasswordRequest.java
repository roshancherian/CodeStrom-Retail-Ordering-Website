package com.example.retail.dto;

@Data
public class ResetPasswordRequest {
    private String token;
    private String newPassword;
}