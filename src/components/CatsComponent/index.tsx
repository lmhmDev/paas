import {useState,useContext, useEffect} from 'react'
import Loader from '../Loader'
import './style.css'
import Context from '../../utils/Context'
import { storeImage } from '../../utils/storage'

const CatsComponent = () => {
    
    const [loading,setLoading] = useState(false)
    const [url,setUrl] = useState('')
    const {changeTheme} = useContext(Context)

    const getCat = async () => {
        setLoading(true)
        const response:any =  await (await fetch('https://api.thecatapi.com/v1/images/search')).json()
        setLoading(false)
        setUrl(response[0].url)
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
            { url && <button onClick={()=> storeImage(url)}>Add to favorites</button>}
        </div>
    )
}

export default CatsComponent;