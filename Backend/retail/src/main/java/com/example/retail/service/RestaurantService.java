package com.example.retail.service;
import com.example.retail.entity.Restaurant;
import com.example.retail.entity.User;
import com.example.retail.repository.RestaurantRepository;
import com.example.retail.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RestaurantService {

    private final RestaurantRepository repo;

    public List<Restaurant> getAll() {
        return repo.findAll();
    }

    public Restaurant getById(Long id) {
        return repo.findById(id).orElseThrow();
    }

    public Restaurant add(Restaurant r) {
        return repo.save(r);
    }
}