import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../services/productService";
import { toast } from "react-toastify";
// Nếu có lỗi xảy ra, hiển thị thông báo lỗi

// Hiển thị danh sách sản phẩm
const ProductList = ({ onEdit }) => {
    const [products, setProducts] = useState([]);

    const loadProducts = () => {
        getProducts()
            .then((res) => setProducts(res.data))
            .catch((err) => console.error('Lỗi sản phẩm:', err));
    };

    const handleDelete = (id) => {
        // if (window.confirm("Bạn có chắc muốn xóa sản phẩm này không?")) {
        //     deleteProduct(id)
        //         .then(() => loadProducts())
        //     // .catch((err) => console.error('Lỗi xóa sản phẩm:', err));
        // }
        if (window.confirm("Bạn có chắc muốn xóa sản phẩm này không?")) {
            deleteProduct(id)
                .then(() => {
                    toast.success('🗑️ Xóa sản phẩm thành công!');
                    loadProducts();
                })
                .catch(() => {
                    toast.error('❌ Xóa sản phẩm thất bại!');
                });
        }
    };

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <div>
            <h2>📦 Danh sách sản phẩm</h2>
            <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse' }}>
                {/* đoạn JSX tạo một bảng có: Đường viền mỏng, Các ô có khoảng trống 8px bên trong, Đường viền của ô được "sáp nhập" với nhau (border-collapse). */}
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên sản phẩm</th>
                        <th>Mô tả</th>
                        <th>Giá</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}VND</td>
                            <td>
                                <button onClick={() => onEdit(product)}>Sửa</button>
                                <button onClick={() => handleDelete(product.id)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default ProductList;