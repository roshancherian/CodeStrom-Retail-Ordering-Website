package com.example.retail.repository;
import com.example.retail.entity.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.retail.entity.Restaurant;
import java.util.*;
@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {

}