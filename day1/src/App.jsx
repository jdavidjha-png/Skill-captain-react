export default function(){
const list= ["apple, banana. guava, pineapple, litchi"]
const btn= [1,2,3,4,5,6,7,8,9]
return(
  <>
  <h1>Day6</h1>
  <ul>
    {list.map((item,index)=>(
        <li>{item}</li>
      ))}
  </ul>
  {btn.map((item,index)=>(
      <button>{item}</button>
    ))}
  </>
)
}