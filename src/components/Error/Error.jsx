import './Error.css'
import { Link } from "react-router"

const Error = () => {

  return (
    <>
      <div>
        <h1>404 Page not found</h1>
        <div className="errorBack">
            <Link to="/">Back</Link>
        </div>
      </div>
    </>
  )
}

export default Error
