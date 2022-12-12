import { createContext } from "react"

const Context = createContext(
    {
        theme:0,
        changeTheme:(newTheme)=>{},
        favImages:[],
        setFavImages:(favImages)=>{}
    })

export default Context