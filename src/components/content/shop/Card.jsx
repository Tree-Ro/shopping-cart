import { useState } from 'react'
import PropTypes from 'prop-types'

function Card({ id='amount', title='', desc='', imgUrl='', addItemToCart=()=>{console.error('Missing cart param for this item')} }) {
  const [count, setCount] = useState(1)
  const item = {
    id: id,
    title: title,
    desc: desc,
    imgUrl: imgUrl,
    count: count,
  }

  return (
    <div>
      <img src={imgUrl} alt="" />
      <h3>{title}</h3>
      <p>{desc}</p>
      <label htmlFor={id}>
        Amount:
        <input id={id} type="number" max={10} min={0} onChange={(e) => setCount(e.target.value, 10)} />
      </label>
      <button onClick={() => addItemToCart(item)}>Add to Cart</button>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  desc: PropTypes.string,
  imgUrl: PropTypes.string,
  addItemToCart: PropTypes.func,
}

export default Card