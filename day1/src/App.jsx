import { useState } from "react"

export default function App(){
  const[msg,setmsg] = useState(false);
  return(
    <>
    <h1>Hello</h1>
    <button onClick={()=>setmsg(!msg)}>Click me</button>
    {msg && (
      <>
      <h1>Hello everyone,
My name is David, I'm from gwalior (Madhya Pradesh) and I’m a first-year BSc student.
This is one of the first times I’m presenting my project, so please consider this my debug mode 😄


First of all, thank you to SkillCaptain for giving me this opportunity.

I am very fond of gaming, and instead of just playing games, I decided to build one myself.
So today, I’m presenting my project — a Chess Game built using HTML, CSS, and JavaScript.

I focused on keeping the game simple, clear, and user-friendly.

While building this project, I realized something important:
coding is harder than actual chess

This project is inspired by a nation that produced legends like Viswanathan Anand,
and it helped me improve my logic, problem-solving skills, and confidence.

Thank you everyone for your time. I hope you enjoyed my project.</h1>
<p>Thank you</p>
      </>
      
    )}
    </>
  )
}