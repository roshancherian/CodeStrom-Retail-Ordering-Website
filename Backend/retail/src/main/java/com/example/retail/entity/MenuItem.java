package com.example.retail.entity;
import jakarta.persistence.*;
import lombok.*;
@Entity
@Data
public class MenuItem {
    @Id @GeneratedValue
    private Long id;

    private String name;
    private Double price;
    private String category;

    @ManyToOne
    private Restaurant restaurant;
}
