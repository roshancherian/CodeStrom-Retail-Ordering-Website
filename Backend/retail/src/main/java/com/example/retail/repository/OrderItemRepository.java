package com.example.retail.repository;
import com.example.retail.entity.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.retail.entity.OrderItem;
import com.example.retail.entity.Orders;
import java.util.*;
@Repository
public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

    List<OrderItem> findByOrder(Orders order);

}