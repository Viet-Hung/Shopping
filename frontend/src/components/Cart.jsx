import { useCart } from '../contexts/CartContext';

const Cart = () => {
    const { cartItems } = useCart();

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div>
            <h2>🛒 Giỏ hàng</h2>
            {cartItems.length === 0 ? (
                <p>Chưa có sản phẩm nào trong giỏ.</p>
            ) : (
                <ul>
                    {cartItems.map((item, idx) => (
                        <li key={idx}>
                            {item.name} - {item.price}đ
                        </li>
                    ))}
                </ul>
            )}
            <hr />
            <p><strong>Tổng cộng:</strong> {total}đ</p>
        </div>
    );
};

export default Cart;
