
import { useState } from "react"
import { useDispatch } from "react-redux";
import { changeTextColor } from "./themeSlice";


export default function Theme() {
   const [color , setColor ]  = useState("black");

       const   dispatch = useDispatch();

    return (
    <div>

        <input type="text" className="textBox"    onChange={(e)=> setColor(e.target.value)} />
        <button className="button-theme" onClick={()=> {dispatch(changeTextColor(color))  }}>Change Text Color</button>
        <h1>{color}</h1> 
    </div>
  )
}
