import {useState,useContext, useEffect} from 'react'
import Loader from '../Loader'
import './style.css'
import Context from '../../utils/Context'
import { storeImage, deleteImage } from '../../utils/storage'
import { Link } from 'react-router-dom'

const CatsComponent = () => {
    
    const [loading,setLoading] = useState(false)
    const [url,setUrl] = useState('')
    const {changeTheme, favImages, setFavImages} = useContext(Context)

    const getCat = async () => {
        setLoading(true)
        const response:any =  await (await fetch('https://api.thecatapi.com/v1/images/search')).json()
        setLoading(false)
        setUrl(response[0].url)
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

    useEffect(() =>{
        changeTheme(1)
    },[])

    return(
        <div className="cat-card">
            {
                loading ? 
                <Loader/> :
                <img src={url} alt="" />
            }
            
            <button onClick={getCat}>Get Cat</button>
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

export default CatsComponent;