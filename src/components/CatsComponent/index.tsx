import {useState} from 'react'
import Loader from '../Loader'
import './style.css'

const CatsComponent = () => {
    
    const [loading,setLoading] = useState(false)
    const [url,setUrl] = useState('')

    const getCat = async () => {
        setLoading(true)
        const response:any =  await (await fetch('https://api.thecatapi.com/v1/images/search')).json()
        setLoading(false)
        setUrl(response[0].url)
      }

    return(
        <div className="cat-card">
            {
                loading ? 
                <Loader/> :
                <img src={url} alt="" />
            }
            
            <button onClick={getCat}>Get Cat</button>
        </div>
    )
}

export default CatsComponent;