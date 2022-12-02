import {useState, useEffect, useContext} from 'react'
import Loader from '../Loader'
import './style.css'
import Context from '../../utils/Context'

const DogsComponent = () => {
    
    const [loading,setLoading] = useState(false)
    const [url,setUrl] = useState('')

    const {changeTheme} = useContext(Context)

    const getDog = async () => {
        setLoading(true)
        const response:any =  await (await fetch('https://dog.ceo/api/breeds/image/random')).json()
        setLoading(false)
        setUrl(response.message)
    }

    useEffect(() => {
        changeTheme(2)
        console.log('s')
    },[])

    return(
        <div className="dog-card">
            {
                loading ? 
                <Loader/> :
                <img src={url} alt="" />
            }
            
            <button onClick={getDog}>Get Dog</button>
        </div>
    )
}

export default DogsComponent;