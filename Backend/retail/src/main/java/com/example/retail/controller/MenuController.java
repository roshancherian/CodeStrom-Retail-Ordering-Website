package com.example.retail.controller;
import com.example.retail.entity.MenuItem;
import com.example.retail.service.MenuService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/menu")
@RequiredArgsConstructor
public class MenuController {

    private final MenuService service;


    @GetMapping("/restaurant/{restId}")
    public List<MenuItem> getByRestaurant(@PathVariable Long restId) {
        return service.getMenuByRestaurant(restId);
    }


    @GetMapping("/{id}")
    public MenuItem getById(@PathVariable Long id) {
        return service.getById(id);
    }


    @PostMapping
    public MenuItem add(@RequestBody MenuItem item,
                        @RequestParam Long restId) {
        return service.add(item, restId);
    }


    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        service.delete(id);
        return "Deleted successfully";
    }
}
