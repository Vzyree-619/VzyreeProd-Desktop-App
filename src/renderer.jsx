
import { createRoot } from "react-dom/client";
import Something from "./Something";

const App = ()=> {
  return ( 
    <>
    <Something/>
    <h1>

      this is the starting point for the code</h1></>
  )
}

let container = document.getElementById("root")

const root = createRoot(container)

root.render(<App/>)