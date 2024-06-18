
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

import { Sidebar } from '../components'
import styles from './app.module.css'

function App() {
  const [itemsInCart, setItemsInCart] = useState([])
  
  return(
    <div className={styles.app}>
      <Sidebar itemsInCart={itemsInCart}/>
      <Outlet context={[itemsInCart, setItemsInCart]}/>
    </div>
  )
}

export default App