import { useEffect, useState } from 'react';
import { getProducts } from './services/productService';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Lỗi khi gọi API:", err));
  }, []);

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <strong>{p.name}</strong> - {p.price}đ <br />
            <em>{p.description}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
