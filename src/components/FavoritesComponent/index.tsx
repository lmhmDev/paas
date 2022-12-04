import {useState, useEffect} from 'react'
import { getImages,deleteImage } from "../../utils/storage"
import './style.css'
import FavCard from '../FavCard'

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
                urls.map((url) => {
                    return <FavCard url={url} deleteImage={() => deleteFav(url)} />
                })
            }
        </div>
    )
}

export default FavoritesComponent;