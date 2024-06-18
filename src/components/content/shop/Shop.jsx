import PropTypes from 'prop-types';
import { useOutletContext } from 'react-router-dom';

import Card from './Card';
import styles from './shop.module.css';
import useAllProductData from '../../../scripts/useAllProductData';

function Shop() {
  const [itemsInCart, setItemsInCart] = useOutletContext();
  const { data, error, isLoading } = useAllProductData();

  function handleAddItemToCart(newItem) {
    const existingItemIndex = itemsInCart.findIndex(item => item.id === newItem.id);

    if (existingItemIndex !== -1) {
      const updatedItems = [...itemsInCart];
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        count: +updatedItems[existingItemIndex].count + +newItem.count
      };
      setItemsInCart(updatedItems);
    } else {
      setItemsInCart([...itemsInCart, newItem]);
    }
  }

  if (isLoading) return <div className={styles.loader}></div>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <div>
      {data.map(item => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          desc={item.description}
          imgUrl={item.image}
          addItemToCart={handleAddItemToCart}
        />
      ))}
    </div>
  );
}

Shop.propTypes = {
  itemsInCart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};

export default Shop;
