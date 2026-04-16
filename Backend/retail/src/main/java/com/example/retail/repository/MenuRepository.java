package com.example.retail.repository;
import com.example.retail.entity.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.retail.entity.MenuItem;
import java.util.*;
@Repository
public interface MenuRepository extends JpaRepository<MenuItem, Long> {

    // Optional (better than filtering in service)
    List<MenuItem> findByRestaurantId(Long restaurantId);

}
