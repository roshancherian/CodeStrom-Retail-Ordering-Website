package com.example.retail.entity;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Data
public class PasswordResetToken {
    @Id @GeneratedValue
    private Long id;

    @ManyToOne
    private User user;

    private String token;
    private LocalDateTime expiry;
}