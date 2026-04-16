package com.example.retail.service;

@Service
@RequiredArgsConstructor
public class CartService {

    private final CartRepository cartRepo;
    private final MenuRepository menuRepo;
    private final UserRepository userRepo;

    public CartItem addToCart(Long userId, Long menuId, int qty) {

        User user = userRepo.findById(userId).orElseThrow();
        MenuItem item = menuRepo.findById(menuId).orElseThrow();

        CartItem cart = new CartItem();
        cart.setUser(user);
        cart.setMenuItem(item);
        cart.setQuantity(qty);

        return cartRepo.save(cart);
    }

    public List<CartItem> getCart(Long userId) {
        User user = userRepo.findById(userId).orElseThrow();
        return cartRepo.findByUser(user);
    }

    public CartItem update(Long id, int qty) {
        CartItem cart = cartRepo.findById(id).orElseThrow();
        cart.setQuantity(qty);
        return cartRepo.save(cart);
    }

    public void delete(Long id) {
        cartRepo.deleteById(id);
    }
}
