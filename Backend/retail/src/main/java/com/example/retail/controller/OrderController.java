package com.example.retail.controller;

import com.example.retail.entity.Orders;
import com.example.retail.entity.User;
import com.example.retail.repository.OrderRepository;
import com.example.retail.repository.UserRepository;
import com.example.retail.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService service;
    private final UserRepository userRepo;
    private final OrderRepository repo;

    @PostMapping
    public Orders place() {
        return service.placeOrder(1L); // ✅ pass userId
    }

    @GetMapping("/history")
    public List<Orders> history() {
        User user = userRepo.findById(1L).orElseThrow();
        return repo.findByUser(user);
    }
}