import { useState } from "react"

export default function App(){

  const[age,setAge] = useState(20);
  const[name, setName] = useState("Nitish");
  const[count,setCount] = useState(0);
  return(
    <>
    <h1>Hello</h1>
    <p>My age is {age}</p>
    <p>My name is {name}</p>

    <h2>Count:{count}</h2>
    <button onClick={()=>setCount(count => count+1)}>Increase</button>
    </>
  )
}