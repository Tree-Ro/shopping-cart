import { Sidebar } from '../components'
import { Outlet } from 'react-router-dom'
import styles from './app.module.css'

function App() {

  return(
    <div className={styles.app}>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default App