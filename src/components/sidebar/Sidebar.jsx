import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import shoppingIcon from '../../assets/cart-shopping-solid.svg'
import checkoutIcon from '../../assets/basket-shopping-solid.svg'
import homeIcon from '../../assets/house-solid.svg'
import styles from './sidebar.module.css'

function Sidebar({ itemsInCart = [] }) {

  const amountOfCartItems = Array.isArray(itemsInCart) ? itemsInCart.length : null

  return(
    <>
      <div>
        <div>
          <h1 className={''}>Shop Example Name</h1>
        </div>
        <div className=''>
          <img className={styles.img} src={homeIcon} alt="" />
          <Link to={'/'}>Home</Link>
        </div>
        <div>
          <img className={styles.img} src={shoppingIcon} alt="" />
          <Link to={'/shop'}>Shop</Link>
        </div>
        <div>
          <img className={styles.img} src={checkoutIcon} alt="" />
          <Link to={'/checkout'}>Checkout {amountOfCartItems}</Link>
        </div>
      </div>
    </>
  )
}

Sidebar.propTypes = {
  itemsInCart: PropTypes.array.isRequired
}

export default Sidebar