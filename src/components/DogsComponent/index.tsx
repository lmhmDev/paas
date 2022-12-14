import {useState, useEffect, useContext} from 'react'
import Loader from '../Loader'
import './style.css'
import Context from '../../utils/Context'
import { storeImage, deleteImage } from '../../utils/storage'
import { Link } from 'react-router-dom'

const DogsComponent = () => {
    
    const [loading,setLoading] = useState(false)
    const [url,setUrl] = useState('')

    const {changeTheme, favImages, setFavImages} = useContext(Context)

    const getDog = async () => {
        setLoading(true)
        const response:any =  await (await fetch('https://dog.ceo/api/breeds/image/random')).json()
        setLoading(false)
        setUrl(response.message)
    }

    const addToFavorites = () =>{
        setFavImages((current) => {
            if(!current.length) return [url]
            return [...current, url]
        })
        storeImage(url)
    }

    const deleteFromFavorites = async () => {
        setFavImages(favImages.filter((current) => {
            return current !== url
        }));
        deleteImage(url)
    }

    useEffect(() => {
        changeTheme(2)
    },[])

    return(
        <div className="dog-card">
            {
                loading ? 
                <Loader/> :
                <img src={url} alt="" />
            }
            
            <button onClick={getDog}>Get Dog</button>
            { url &&
                <>
                    {(favImages.length && favImages.includes(url)) ?
                    <button onClick={()=> deleteFromFavorites()}>Remove favorite</button> :
                    <button onClick={()=> addToFavorites()}>Add to favorites</button>}
                </>   
            }
            <Link to="/">Back</Link>
        </div>
    )
}

export default DogsComponent;