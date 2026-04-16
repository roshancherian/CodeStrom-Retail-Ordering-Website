package com.example.retail.dto;

@Data
@AllArgsConstructor
public class OrderResponse {
    private Long orderId;
    private Double totalAmount;
    private String status;
}