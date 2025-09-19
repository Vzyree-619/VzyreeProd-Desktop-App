import { useState } from "react";
import { useEffect } from "react";

const Something = ()=>{
    let [count,setCount ] = useState(0)
    const handleClick =()=>{
        setCount(count+1);
    }

  useEffect(()=>{
    console.log("The data is being received")
  },[])

    return <>
    <h1>Findo Trip Dashboard</h1>
    <div style={{height:"200px",width: "80vw", backgroundColor:"orange",border: "2px solid black"}}></div>
    <button onClick={handleClick}>Increment</button>
    <p>The Value is {count}</p>
     <input type="file" accept="video/*" />

     

    
    </>
}

export default Something;