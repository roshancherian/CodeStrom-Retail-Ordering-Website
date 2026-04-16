package com.example.retail.entity;
import jakarta.persistence.*;
import lombok.*;
@Entity
@Data
public class CartItem {
    @Id @GeneratedValue
    private Long id;

    @ManyToOne
    private User user;

    @ManyToOne
    private MenuItem menuItem;

    private int quantity;
}