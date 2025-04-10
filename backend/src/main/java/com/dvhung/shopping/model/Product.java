package com.dvhung.shopping.model;

import jakarta.persistence.*;

@Entity
public class Product {
    // represents the product table in MySQL database
    // When the app runs, Spring Boot will automatically create a product table
    // based on this class if it does not exist.

    @Id // primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // spring auto-incremented ID
    private Long id; // Product ID
    private String name; // Product name
    private String description; // Product description
    private double price; // Product price

    public Product() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

}
