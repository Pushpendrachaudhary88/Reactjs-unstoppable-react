import React,{useState} from "react"
import ColorContext from "./ColorContext"

let morning ={
    color: "black",
    background:"white",
    border:"1px solid red",
    align: "left"

}
const ColorProvider = ({children}) =>{
    const[theme,setTheme] = useState(morning)

    return(
        <ColorContext.Provider value={
            {
                theme : theme,

                morning:()=> setTheme({morning}),

                twilight: () => setTheme({

                    color: "navy",
                    background: "orange",
                    border: "1px solid blue",
                    align: "center"
                }),
                night : () => setTheme({
                    

                   
                    color: "white",
                    background: "black",
                    border: "1px solid blue",
                    align: "right"

                })
            }
        }>
          {children}

        </ColorContext.Provider>
    )
}

export default ColorProvider