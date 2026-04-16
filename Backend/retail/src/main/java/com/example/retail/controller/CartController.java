package com.example.retail.controller;

import com.example.retail.dto.CartRequest;
import com.example.retail.entity.CartItem;
import com.example.retail.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartController {

    private final CartService service;

    @PostMapping
    public CartItem add(@RequestBody CartRequest req) {
        return service.addToCart(req.getUserId(), req.getMenuId(), req.getQty());
    }

    @GetMapping
    public List<CartItem> get(@RequestParam Long userId) {
        return service.getCart(userId);
    }

    @PutMapping("/{id}")
    public CartItem update(@PathVariable Long id,
                           @RequestParam int qty) {
        return service.update(id, qty);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        service.delete(id);
        return "Deleted successfully";
    }
}