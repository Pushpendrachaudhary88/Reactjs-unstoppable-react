import React, {useState} from "react"
import ColorContext from "./ColorContext"

let dayStyle ={
    color:"black",
    backgroundColor:"white",
    border:"1px solid red"

}

const ColorProvider = ({children}) =>{
    const[theme,setTheme] = useState(dayStyle)
       

    return(
        <ColorContext.Provider value={{
            theme: theme,
            night: () => setTheme({
                color:"white",
                backgroundColor:"black",
                border:"2px solid white"
            }),

            }}>
            {children}
        </ColorContext.Provider>
    )
}
export default ColorProvider