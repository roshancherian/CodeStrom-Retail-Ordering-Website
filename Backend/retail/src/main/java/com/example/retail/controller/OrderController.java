package com.example.retail.controller;

import com.example.retail.entity.Orders;
import com.example.retail.entity.User;
import com.example.retail.repository.OrderRepository;
import com.example.retail.repository.UserRepository;
import com.example.retail.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService service;
    private final UserRepository userRepo;
    private final OrderRepository repo;

    @PostMapping
    public Orders place(@RequestBody Map<String, Long> req) {

        Long userId = req.get("userId");

        return service.placeOrder(userId);
    }

    @GetMapping("/history")
    public List<Orders> history(@RequestParam Long userId) {

        User user = userRepo.findById(userId).orElseThrow();
        return repo.findByUser(user);
    }
}