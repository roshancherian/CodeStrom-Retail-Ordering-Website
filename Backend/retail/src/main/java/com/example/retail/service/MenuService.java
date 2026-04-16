package com.example.retail.service;

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
