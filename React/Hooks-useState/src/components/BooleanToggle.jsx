import { useState } from "react";


export default function BooleanToggle(){
    const [toggle,setToggle]=useState(false);
    const [answer,setAnswer]=useState('No');

    function handleClick(){
        setToggle(!toggle);
        if(toggle){
            setAnswer('Yes')
        }
        else{
            setAnswer('No');
        }
    }

    return(
        <div>
            <button
            onClick={handleClick}
            
            >
                The Boolean is {answer}
            </button>
        </div>
    )
}