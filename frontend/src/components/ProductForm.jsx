import { useState, useEffect } from 'react';
import { createProduct, updateProduct } from '../services/productService'
import { toast } from 'react-toastify';

// Thêm mới sản phẩm
const ProductForm = ({ selectedProduct, onSaveDone }) => {

    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
    });
    // Khởi tạo giá trị cho các thuộc tính của sản phẩm mới

    useEffect(() => {
        if (selectedProduct) {
            setProduct(selectedProduct);
        } else {
            setProduct({
                name: "",
                description: "",
                price: "",
            });
        }
    }, [selectedProduct]); // Chạy lại khi selectedProduct thay đổi
    // Khi selectedProduct thay đổi, cập nhật giá trị của product

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({
            ...prev,
            [name]: value,
        }));
    }
    // Cập nhật giá trị của thuộc tính tương ứng trong product khi người dùng nhập liệu
    // Sử dụng destructuring để lấy name và value từ event target

    // const handleSubmit = (e) => {
    //     e.preventDefault(); // Ngăn chặn hành vi mặc định của form (tải lại trang)
    //     const action = selectedProduct ? updateProduct(product.id, product) : createProduct(product);
    //     // Chọn hàm tạo hoặc cập nhật sản phẩm dựa trên selectedProduct
    //     action.then(() => {
    //         alert("Lưu thành công!");
    //         onSaveDone(); // Gọi hàm onSaveDone để thông báo cho cha biết rằng việc lưu đã hoàn tất
    //     });
    // };
    const handleSubmit = (e) => {
        e.preventDefault();
        const action = selectedProduct
            ? updateProduct(product.id, product)
            : createProduct(product);

        action
            .then(() => {
                toast.success('✔️ Lưu thành công!');
                onSaveDone();
            })
            .catch(() => {
                toast.error('❌ Lưu thất bại!');
            });
    };
    // Gọi hàm tạo hoặc cập nhật sản phẩm và thông báo cho cha biết việc lưu đã hoàn tất
    // Sử dụng destructuring để lấy id và product từ selectedProduct

    return (
        <div>
            <h2>{product.id ? '✏️ Sửa' : '➕ Thêm'} sản phẩm</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    placeholder="Tên sản phẩm"
                    value={product.name}
                    onChange={handleChange}
                    required
                /><br />
                <input
                    name="description"
                    placeholder="Mô tả sản phẩm"
                    value={product.description}
                    onChange={handleChange}
                /><br />
                <input
                    name="price"
                    placeholder="Giá sản phẩm"
                    value={product.price}
                    onChange={handleChange}
                    required
                /><br />
                <button type="submit">{product.id ? 'Sửa' : 'Thêm'}</button>
                {/* Nếu có id thì hiển thị nút sửa, ngược lại hiển thị nút thêm */}
                {/* <button type="button" onClick={onSaveDone}>Hủy</button> */}
                {/* Nút hủy sẽ gọi hàm onSaveDone để thông báo cho cha biết rằng việc lưu đã hoàn tất */}
            </form>
        </div>
    )
}

export default ProductForm;