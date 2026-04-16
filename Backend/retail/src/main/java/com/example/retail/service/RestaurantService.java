package com.example.retail.service;

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