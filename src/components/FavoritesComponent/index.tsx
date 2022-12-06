import {useState, useEffect} from 'react'
import { getImages,deleteImage } from "../../utils/storage"
import './style.css'
import FavCard from '../FavCard'
import MainMenuComponent from '../MainMenuComponent'

const FavoritesComponent = () => {

    const [urls,setUrls] = useState([])

    const setImages = async () => {
        const storage = await getImages()
        setUrls(storage)
    }

    const deleteFav = async (url) => {
        setUrls(urls.filter((current) => {
            return current !== url
        }));
        deleteImage(url)
    }

    useEffect(() => {
        setImages()
    },[])

    return(
        <div className='fav-container'>
            {
                urls.length ?
                urls.map((url) => {
                    return <FavCard url={url} deleteImage={() => deleteFav(url)} />
                }) :
                <div className="empty">
                    <p>Parece que no tienes ningun favorito, añade alguno!</p>
                    <MainMenuComponent showFav={false}/>
                </div>
            }
        </div>
    )
}

export default FavoritesComponent;