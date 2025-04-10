package com.dvhung.shopping.service;

import com.dvhung.shopping.model.Product;
import com.dvhung.shopping.repository.ProductRepository;
import com.dvhung.shopping.exception.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    // Chứa logic xử lý nghiệp vụ

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    public Product findById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Không tìm thấy sản phẩm có ID: " + id));
    }

    public Product updateProduct(Long id, Product updated) {
        Product product = productRepository.findById(id).orElse(null);
        if (product != null) {
            product.setName(updated.getName());
            product.setDescription(updated.getDescription());
            product.setPrice(updated.getPrice());
            return productRepository.save(product);
        }
        return null;
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

}
