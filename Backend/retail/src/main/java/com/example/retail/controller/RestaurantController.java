package com.example.retail.controller;

import com.example.retail.entity.Restaurant;
import com.example.retail.repository.RestaurantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@RestController
@RequestMapping("/api/restaurants")
@RequiredArgsConstructor
public class RestaurantController {

    private final RestaurantRepository repo;

    @GetMapping
    public List<Restaurant> all() {
        return repo.findAll();
    }

    @PostMapping
    public Restaurant add(@RequestBody Restaurant r) {
        return repo.save(r);
    }
}