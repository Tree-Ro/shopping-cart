import { Link } from 'react-router-dom'

function ErrorPage() {

  return (
    <>
    <h2>404 Resource not found</h2>
    <p>Click here to go back <Link to={"/"}>Home</Link></p>
    </>
  )
}

export default ErrorPage