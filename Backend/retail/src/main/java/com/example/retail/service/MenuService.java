package com.example.retail.service;
import com.example.retail.entity.MenuItem;
import com.example.retail.entity.Restaurant;
import com.example.retail.entity.User;
import com.example.retail.repository.MenuRepository;
import com.example.retail.repository.RestaurantRepository;
import com.example.retail.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.*;
@Service
@RequiredArgsConstructor
public class MenuService {

    private final MenuRepository repo;
    private final RestaurantRepository restaurantRepo;

    public List<MenuItem> getMenuByRestaurant(Long restId) {
        return repo.findAll()
                .stream()
                .filter(m -> m.getRestaurant().getId().equals(restId))
                .toList();
    }

    public MenuItem getById(Long id) {
        return repo.findById(id).orElseThrow();
    }

    public MenuItem add(MenuItem item, Long restId) {
        Restaurant r = restaurantRepo.findById(restId).orElseThrow();
        item.setRestaurant(r);
        return repo.save(item);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}
