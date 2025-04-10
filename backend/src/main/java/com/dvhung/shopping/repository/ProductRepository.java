package com.dvhung.shopping.repository;

import com.dvhung.shopping.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
    // This is a placeholder for the ProductRepository class.
    // In a real application, this class would extend JpaRepository or another
    // Spring Data repository interface.
    // It would provide methods for CRUD operations on the Product entity.

    // Giao tiếp với database, xử lý truy vấn CRUD Kế thừa từ JpaRepository,
    // ta sẽ có sẵn các hàm như: findAll(), save(), deleteById(), findById()
    // Không cần viết SQL, Spring Data JPA lo hết.
}