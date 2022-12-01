import { Link } from "react-router-dom"
import './style.css'


const MainMenuComponent = () => {
    return(
        <div className="container">
            <Link to="dogs" className="dog-link">Dogs Person</Link>
            <Link to="cats" className="cat-link">Cats Person</Link>
        </div>
    )
}

export default MainMenuComponent