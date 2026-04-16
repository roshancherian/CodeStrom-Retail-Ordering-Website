package com.example.retail.dto;

import lombok.Data;

@Data
public class CartRequest {
    private Long userId;
    private Long menuId;
    private int qty;
}