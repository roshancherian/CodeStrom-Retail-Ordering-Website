package com.example.retail.controller;
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