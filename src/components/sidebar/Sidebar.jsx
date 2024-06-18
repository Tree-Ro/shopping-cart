import { Link } from 'react-router-dom'
import shoppingIcon from '../../assets/cart-shopping-solid.svg'
import checkoutIcon from '../../assets/basket-shopping-solid.svg'
import homeIcon from '../../assets/house-solid.svg'
import styles from './sidebar.module.css'

function Sidebar() {

  return(
    <>
      <div>
        <div>
          <h1 className={''}>Shop Example Name</h1>
        </div>
        <div>
          <img className={styles.img} src={homeIcon} alt="" />
          <Link to={'/'}>Home</Link>
        </div>
        <div>
          <img className={styles.img} src={shoppingIcon} alt="" />
          <Link to={'/shop'}>Shop</Link>
        </div>
        <div>
          <img className={styles.img} src={checkoutIcon} alt="" />
          <Link to={'/checkout'}>Checkout</Link>
        </div>
      </div>
    </>
  )
}

export default Sidebar