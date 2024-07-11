// import React from "react"

// props => properties
const Button  = ({name, quantity, store, color}) =>{ 
    
     
    return(
        <div>
            <button style={{backgroundColor:color}}> {name} </button>
            <p>We have {quantity} in stocks </p>
            <p>Location: {store.join(",")}</p>
        </div>
    )
}


export default Button

//  console.log(props, typeof props) // {name: "Apple"}
    //  props.name="Abhishek" //  props => read only object
    //  console.log(props.name, props.color, props.price)