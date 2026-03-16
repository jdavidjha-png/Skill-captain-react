import { useState } from "react";

export default function App(){


  const [name,setName] = useState("");
  const[email,setEmail] = useState("");

  const handle = (e)=>{
    e.preventDefault();
    console.log(name);
    console.log(email);
  }
  return(
   <>
   <h1>Signup </h1>
   <form onSubmit={handle}>
  <input
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    placeholder="Username"
  />
  <input
    type="email"
    value={email}
    onChange={(e) => {
      setEmail(e.target.value)}}
    placeholder="Email"
  />
  <button type="submit">Submit</button>
</form>

    </>
  )
}