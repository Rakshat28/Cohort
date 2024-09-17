import { useState } from "react";

export default function Button(){
    const [count,setCount]=useState(0);

    return(
        <div>
            <button 
            onClick={()=>setCount(count+1)}
            >
                Count is {count}
            </button>
        </div>
    )

}