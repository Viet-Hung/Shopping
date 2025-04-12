package com.dvhung.shopping.controller;

import com.dvhung.shopping.model.Product;
import com.dvhung.shopping.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173") // Cho phép React gọi API

public class ProductController {
    // Tạo API để frontend gọi tới
    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @GetMapping // xử lý yêu cầu HTTP GET tới /api/products
    // @GetMapping("/api/products") không cần thiết vì đã có @RequestMapping ở trên
    public List<Product> getAllProducts() {
        return service.getAllProducts();
    }

    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        return service.saveProduct(product);
    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product updatedProduct) {
        return service.updateProduct(id, updatedProduct);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        service.deleteProduct(id);
    }
}
