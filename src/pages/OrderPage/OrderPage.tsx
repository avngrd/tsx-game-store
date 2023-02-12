import { useSelector } from 'react-redux';
import { OrderItem } from '../../components/OrderItem/OrderItem';
import { calcTotalPrice } from '../../components/utils/utils';
import { RootState } from '../../redux/store';

export const OrderPage: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.itemsInCart);

  if (items.length < 1) {
    return <h1>No orders</h1>;
  }

  return (
    <>
      <div className="order-page">
        <div className="order-page__left">
          {items.map((game) => (
            <OrderItem game={game} />
          ))}
        </div>
      </div>
      <div className="order-page__total-price">
        {items.length} Games price:{calcTotalPrice(items)} €
      </div>
    </>
  );
};
