import { useState } from "react";

const Something = ()=>{
    let [count,setCount ] = useState(0)
    const handleClick =()=>{
        setCount(count+1);
    }


    return <>
    <h1>Findo Trip Dashboard</h1>
    <button onClick={handleClick}>Increment</button>
    <p>The Value is {count}</p>
     <input type="file" accept="video/*" />

     

    
    </>
}

export default Something;