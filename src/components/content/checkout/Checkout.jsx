import { useOutletContext } from 'react-router-dom'
import { Link } from 'react-router-dom'

import CheckoutItem from './CheckoutItem'
import styles from './checkout.module.css'

function Checkout() {
const [itemsInCart, setItemsInCart] = useOutletContext()


  function handleItemUpdate(itemId) {
    const filteredItems = itemsInCart.filter((item) => item.id !== itemId)
    setItemsInCart(filteredItems)
  }

  return (
    <div className={styles.container}>
    {itemsInCart.length > 0 ? itemsInCart.map((item) => 
      <CheckoutItem 
        key={item.id}
        image={item.image}
        title={item.title}
        count={item.count}
        handleItemUpdate={() => handleItemUpdate(item.id)}
      />) : 
      <div className={styles.placeholder}>
        <h2 className={styles.placeholderText}>It seems like your shopping cart is empty!</h2>
        <p className={styles.placeholderText}>Click <Link to={'/shop'}>here</Link> to see what there is on offer</p>
      </div>
      }
    </div>
  )
}

export default Checkout