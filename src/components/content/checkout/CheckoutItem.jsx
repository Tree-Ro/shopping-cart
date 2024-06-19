import PropTypes from 'prop-types'
import styles from './checkoutItem.module.css'

function CheckoutItem({ image, price, title, count, handleItemUpdate }) {

  return(
    <div>
      <img src={image} className={styles.img} alt="" />
      <h3>{title}</h3>
      <p>Count: {count}</p>
      <p>{price*count + '$'}</p>
      <button onClick={handleItemUpdate}>Remove from cart</button>
    </div>
  ) 
}

CheckoutItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  handleItemUpdate: PropTypes.func.isRequired
}

export default CheckoutItem