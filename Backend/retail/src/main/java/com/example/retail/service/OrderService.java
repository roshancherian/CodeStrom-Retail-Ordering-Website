package com.example.retail.service;
import com.example.retail.entity.CartItem;
import com.example.retail.entity.Orders;
import com.example.retail.entity.User;
import com.example.retail.repository.CartRepository;
import com.example.retail.repository.OrderRepository;
import com.example.retail.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

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