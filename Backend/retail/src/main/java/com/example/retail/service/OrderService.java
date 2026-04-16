package com.example.retail.service;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final CartRepository cartRepo;
    private final OrderRepository orderRepo;
    private final UserRepository userRepo;

    public Orders placeOrder(Long userId) {

        User user = userRepo.findById(userId).orElseThrow();
        List<CartItem> cartItems = cartRepo.findByUser(user);

        double total = cartItems.stream()
                .mapToDouble(c -> c.getMenuItem().getPrice() * c.getQuantity())
                .sum();

        Orders order = new Orders();
        order.setUser(user);
        order.setTotalAmt(total);
        order.setStatus("PLACED");
        order.setCreatedAt(LocalDateTime.now());

        orderRepo.save(order);

        cartRepo.deleteAll(cartItems);

        return order;
    }

    public List<Orders> getHistory(Long userId) {
        User user = userRepo.findById(userId).orElseThrow();
        return orderRepo.findByUser(user);
    }

    public Orders getById(Long id) {
        return orderRepo.findById(id).orElseThrow();
    }

    public Orders cancel(Long id) {
        Orders order = orderRepo.findById(id).orElseThrow();
        order.setStatus("CANCELLED");
        return orderRepo.save(order);
    }
}