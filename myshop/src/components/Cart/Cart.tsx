import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import { RootReducer } from "../../redux/root-reducer";
import { TrashIcon } from "@phosphor-icons/react/dist/ssr";
import { removeProduct } from "../../redux/Cart/cart-slice";

interface CartProps {
  showCart: boolean;
}

export const Cart: React.FC<CartProps> = ({ showCart }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );
  const dispatch = useDispatch();

  const total = cart.reduce((totalCart, product) => {
    return totalCart + product.price;
  }, 0);

  return (
    <S.Container showCart={showCart}>
      <S.Title>Carrinho</S.Title>

      <S.CartProductsList>
        {cart.map((product) => (
          <S.CartProductItem key={product.id}>
            <strong>{product.title}</strong> - ${product.price}
            <S.DeleteItemCart onClick={() => dispatch(removeProduct(product))}>
              Remover
              <TrashIcon />
            </S.DeleteItemCart>
          </S.CartProductItem>
        ))}
      </S.CartProductsList>

      <S.CartTotal>Total: ${total}</S.CartTotal>
    </S.Container>
  );
};
