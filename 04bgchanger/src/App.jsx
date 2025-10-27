import { useState } from "react"
 
import './App.css'

function App() {
  const [color,setColor]  = useState("black") 

  return (
    <>
     <h1 className="text-3xl font-bold text-center py-4">
      Background Changer 
    </h1>
    
    <div className="w-full h-screen duration" style={{backgroundColor: color}}>

      <div className="fixed  flex flex-wrap justify-center top-20 px-10" >
      <div className="flex flex-wrap justify-center gap-5 bg-white px-3 py-2 rounded-xl">
        <button 
         onClick ={()=> setColor("white")}
        className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"white"}}>white</button>
        
        <button 
         onClick ={()=> setColor("red")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>

        <button 
         onClick ={()=> setColor("green")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>

        <button
         onClick ={()=> setColor("blue")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>BLue</button>

        <button 
         onClick ={()=> setColor("brown")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"brown"}}>Brown</button>

        <button 
         onClick ={()=> setColor("orange")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"}}>Orange</button>

        <button 
         onClick ={()=> setColor("pink")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"pink"}}>Pink</button>

        <button 
         onClick ={()=> setColor("purple")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"purple"}}>Purple</button>

        <button 
        onClick ={()=> setColor("grey")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"grey"}}></button>

        <button 
        onClick ={()=> setColor("grey")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"grey"}}></button>

        <button 
        onClick ={()=> setColor("grey")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"grey"}}></button>


        <button 
        onClick ={()=> setColor("grey")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"grey"}}></button>

        <button 
        onClick ={()=> setColor("grey")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"grey"}}></button>

        <button 
        onClick ={()=> setColor("grey")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"grey"}}></button>

        
      </div>






      </div>

    </div>










    </>
  )
}

export default App
