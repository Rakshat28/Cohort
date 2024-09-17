import { useState } from "react";

export default function Input(){
    const [input,setInput]=useState("");

    return(
        <div>
            <input 
                id="userInput"
                type="text" 
                placeholder="Enter a string "
                onChange={(e)=>setInput(e.target.value)}/>

            <h2>{input}</h2>
        </div>
    )
}