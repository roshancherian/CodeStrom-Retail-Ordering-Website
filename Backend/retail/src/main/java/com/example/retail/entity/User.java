package com.example.retail.entity;
import jakarta.persistence.*;
import lombok.*;
@Entity
@Data
public class User {
    @Id @GeneratedValue
    private Long id;

    private String name;
    private String email;
    private String password;
    private Long phone;
    private String address;
}