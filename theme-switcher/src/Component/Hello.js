import React,{useContext} from "react"

import ColorContext from "../Context/ColorContext"


const  Hello = () =>{


    const{theme,twilight,night,morning} = useContext(ColorContext)


    return (
        <div>
        <div style={{
            color:theme.color,
            background:theme.background,
            border:theme.border,
            align:theme.align
        }}>
            <h1>Ram is dancing</h1>
            <p>Ram is a nice person</p>
        </div>

        <button onClick={twilight}>twilight</button>
        <button onClick={night}>night</button>
        <button onClick={morning}>morning</button>

        </div>
    )

}

export default Hello

