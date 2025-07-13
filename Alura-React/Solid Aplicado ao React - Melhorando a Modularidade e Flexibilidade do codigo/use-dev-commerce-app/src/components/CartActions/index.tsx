import Button from "../Button";
import Styles from "./CartActions.module.css";

type CartActionsProps = {
  handleRedirect: () => void;
};

const CartActions = ({ handleRedirect }: CartActionsProps) => {
  return (
    <div className={Styles.cartActions}>
      <Button variant="secondary" onClick={handleRedirect}>
        Continuar comprando
      </Button>
      <Button onClick={() => console.log("pagamento")}>
        Ir para pagamento
      </Button>
    </div>
  );
}

export default CartActions;