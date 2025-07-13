import { useNavigate } from "react-router-dom";
import Typography from "../../components/Typography";
import Styles from "./CartPage.module.css";

import { Product } from "../../common/types/product";
import CartEmptyMessage from "../../components/CartEmptyMessage";
import CartItem from "../../components/CartItem";
import CartSummary from "../../components/CartSummary";
import CartActions from "../../components/CartActions";

type CartPageProps = {
  cartItems: Product[];
  cartCount: number;
  removeFromCart: (id: number) => void;
};

const CartPage = ({ cartItems, cartCount, removeFromCart }: CartPageProps) => {
  const navigate = useNavigate();

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  const freight = cartItems.length > 0 ? 8 : 0;

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <main className="container">
      <div className={Styles.cartTitle}>
        <Typography variant="h4">Carrinho de Compras</Typography>
      </div>

      <section className={Styles.cartPage}>
        <div className={Styles.cartItems}>
          <Typography
            variantStyle="body-large-bold"
            className={Styles.cartItemTitle}
          >
            Detalhes da compra
          </Typography>
          {cartItems?.length > 0 ? (
            cartItems.map((item) => (
              <CartItem item={item} removeFromCart={removeFromCart} />
            ))
          ) : (
            <CartEmptyMessage />
          )}
        </div>
        <CartSummary
          count={cartCount}
          total={total}
          freight={freight}
          actions={<CartActions handleRedirect={handleRedirect} />}
        />
      </section>
    </main>
  );
};

export default CartPage;
