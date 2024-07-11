import React,{useContext} from "react"
import ColorContext from "../context/ColorContext"
import { LiaBrushSolid } from "react-icons/lia";

const Design1 = () =>{
    const{theme,night}= useContext(ColorContext);



    return(
        <div>
        <div styel={{
            color:theme.color,
            backgroundColor: theme.backgroundColor,
            border:theme.border
        }}>
            <h1>Pushpendra Chaudhary</h1>
            <h2>React Developer</h2>
            <h3>Color Theme</h3>
            <button>Visited Pushpendra</button>

        </div>
         

        <button onClick={night}><LiaBrushSolid /></button> 
        </div>
    )

}
export default Design1
