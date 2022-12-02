import {useContext,useEffect} from 'react'
import { Link } from "react-router-dom"
import './style.css'
import Context from "../../utils/Context"


const MainMenuComponent = () => {

    const {changeTheme} = useContext(Context)

    useEffect(() =>{
        changeTheme(0)
    },[])

    return(
        <div className="container">
            <div>
                <Link to="dogs" className="dog-link">Dogs Person</Link>
                <Link to="cats" className="cat-link">Cats Person</Link>
            </div>
            <Link to="" className="fav-link">Favorites</Link>
        </div>
    )
}

export default MainMenuComponent