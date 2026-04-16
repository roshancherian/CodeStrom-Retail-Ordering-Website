package com.example.retail.entity;
import jakarta.persistence.*;
import lombok.*;
@Entity
@Data
public class OrderItem {
    @Id @GeneratedValue
    private Long id;

    @ManyToOne
    private Orders order;

    @ManyToOne
    private MenuItem menuItem;

    private int quantity;
    private Double price;
}
