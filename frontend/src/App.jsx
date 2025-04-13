import { useState } from "react";
import ProductList from "./components/ProductList";
import ProductForm from './components/ProductForm';
import ToastConfig from "./toast/ToastConfig";
import Cart from './components/Cart';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  // selectedProduct là một state để lưu trữ sản phẩm đang được chọn để sửa
  const [reloadFlag, setReloadFlag] = useState(false);
  // reloadFlag là một state để đánh dấu việc cần tải lại danh sách sản phẩm

  const handleEdit = (product) => {
    setSelectedProduct(product);
    // Khi người dùng nhấn nút sửa, cập nhật selectedProduct với sản phẩm được chọn
  };

  const handleSaveDone = () => {
    setSelectedProduct(null);
    // Khi việc lưu hoàn tất, đặt selectedProduct về null
    setReloadFlag(!reloadFlag); // kích reload
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🛍️ Quản lý sản phẩm</h1>
      <ProductForm
        selectedProduct={selectedProduct}
        onSaveDone={handleSaveDone}
      />
      {/* Truyền selectedProduct và hàm handleSaveDone vào ProductForm */}
      <hr />
      <ProductList
        key={reloadFlag}
        onEdit={handleEdit}
      />
      {/* Truyền hàm handleEdit vào ProductList */}

      <Cart />

      <ToastConfig />
      {/* Gọi ToastConfig để hiển thị thông báo */}
    </div>

  );
}

export default App;