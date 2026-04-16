package com.example.retail.entity;
import jakarta.persistence.*;
import lombok.*;
@Entity
@Data
public class Orders {
    @Id @GeneratedValue
    private Long id;

    @ManyToOne
    private User user;

    private Double totalAmt;
    private String status;
    private LocalDateTime createdAt;
}