package com.example.retail.controller;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartController {

    private final CartRepository repo;
    private final MenuRepository menuRepo;
    private final UserRepository userRepo;

    @PostMapping
    public CartItem add(@RequestBody Map<String,Integer> req) {
        User user = userRepo.findById(1L).orElseThrow();

        MenuItem item = menuRepo.findById(req.get("menuId").longValue()).orElseThrow();

        CartItem cart = new CartItem();
        cart.setUser(user);
        cart.setMenuItem(item);
        cart.setQuantity(req.get("qty"));

        return repo.save(cart);
    }

    @GetMapping
    public List<CartItem> get() {
        return repo.findAll();
    }
}