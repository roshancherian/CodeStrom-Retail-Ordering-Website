package com.example.retail.controller;
@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService service;
    private final UserRepository userRepo;
    private final OrderRepository repo;

    @PostMapping
    public Orders place() {
        User user = userRepo.findById(1L).orElseThrow();
        return service.placeOrder(user);
    }

    @GetMapping("/history")
    public List<Orders> history() {
        User user = userRepo.findById(1L).orElseThrow();
        return repo.findByUser(user);
    }
}