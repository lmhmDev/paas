import { useEffect, useContext} from 'react'
import { deleteImage } from "../../utils/storage"
import './style.css'
import FavCard from '../FavCard'
import Context from '../../utils/Context';
import MainMenuComponent from '../MainMenuComponent'
import { Link } from 'react-router-dom';

const FavoritesComponent = () => {

    const {favImages,setFavImages} = useContext(Context)

    const deleteFav = async (url) => {
        setFavImages(favImages.filter((current) => {
            return current !== url
        }));
        deleteImage(url)
    }

    useEffect(() => {
    },[])

    return(
        <>
            <Link to="/" className="back-btn">Main menu</Link>
            <div className='fav-container'>
                {
                    favImages.length ?
                    favImages.map((url) => {
                        return <FavCard url={url} deleteImage={() => deleteFav(url)} />
                    }) :
                    <div className="empty">
                        <p>Parece que no tienes ningun favorito, añade alguno!</p>
                        <MainMenuComponent showFav={false}/>
                    </div>
                }
            </div>
        </>
    )
}

export default FavoritesComponent;