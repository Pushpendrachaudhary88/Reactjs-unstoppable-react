import React,{useState} from "react"
import ImageSearch from "./component/ImageSearch"
import ImageItem from "./component/ImageItem";

const App = () =>{
  const[images,setImages] = useState([]); 

return (
  <div>
    <ImageSearch setImages={setImages} />
    <ImageItem  images={images}   />
  </div>
)
 
}
export default App;



// array => [] 
// object => null 
// string => ""
// number => 0
