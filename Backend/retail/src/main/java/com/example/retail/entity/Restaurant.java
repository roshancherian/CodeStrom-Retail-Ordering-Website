package com.example.retail.entity;
import jakarta.persistence.*;
import lombok.*;
@Entity
@Data
public class Restaurant {
    @Id @GeneratedValue
    private Long id;

    private String name;
    private String location;
    private String category;
}
