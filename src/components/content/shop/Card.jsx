import { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './card.module.css'

function Card({ id='amount', title='', desc='', price, image='', addItemToCart }) {
  const [count, setCount] = useState(1)
  const item = {
    id: id,
    title: title,
    desc: desc,
    price: price,
    image: image,
    count: count,
  }

  return (
    <div>
      <div>
        <img className={styles.img} src={image} alt="" />
        <h3>{title}</h3>
        <p>{desc}</p>
        <p>{price + '$'}</p>
      </div>
      <label htmlFor={id}>
        Amount:
        <input id={id} type="number" max={10} placeholder='1' min={1} onChange={(e) => setCount(+e.target.value)} />
      </label>
      <button onClick={() => addItemToCart(item)}>Add to Cart</button>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  desc: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  addItemToCart: PropTypes.func,
}

export default Card