import React,{useState,useEffect} from "react";
import axios from "axios";

const ImageSearch = ({setImages})=>{
    const[searchTerm,setSearchTerm] = useState("");
    // const[images ,setImages] = useState("");
  
    

    // function ImplementSearch(){
    //            axios.get("https://api.unsplash.com/search/photos",{
    //             params: {
    //                 query :searchTerm
    //             },
    //             headers: {
    //                 Authorization : "Client-ID 2sZMX5_LIms9gvOnSBHguBY6NWZ5yd3tZWsDTgdmmAk"
    //             }
    //            })
    //            .then(response => console.log("Success", response.data.results))
    //            .catch(err => console.log(err))
    //     }

    useEffect(()=>{
        ImplementSearch()

        //eslint-disable-next-line
    },[])


    async function ImplementSearch(){

        try{
        const response = await axios.get("https://api.unsplash.com/search/photos",{
         params: {
             query :searchTerm || "nature",
             photos : 150
         },
         headers: {
             Authorization : "Client-ID Qgvtz618opcuUyCyXEHCnuxwU-35CEslYSeNienJnZI"
         }
        })
            setImages(response.data.results)
        }
        catch(err){
            console.log(err)
        }
    }
    
    return(
        <div className="imagesearch">
            <h1>Find Images</h1>
            <div className="imagesearch2">
            <input type="text" placeholder="Enter Something.."
            onChange={e =>setSearchTerm(e.target.value)}
            />
            <button onClick={ImplementSearch}>Search</button>
            </div>
        </div>
    )



}
export default ImageSearch;