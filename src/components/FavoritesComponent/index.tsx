import {useState, useEffect} from 'react'
import { getImages } from "../../utils/storage"
import './style.css'

const FavoritesComponent = () => {

    const [urls,setUrls] = useState([])

    const setImages = async () => {
        const storage = await getImages()
        setUrls(storage)
    }

    useEffect(() => {
        setImages()
    },[])

    return(
        <div className='fav-container'>
            {
                urls.map((url) => {
                    return <img src={url} />
                })
            }
        </div>
    )
}

export default FavoritesComponent;