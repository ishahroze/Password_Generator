'use client'
import { useState,useCallback,useEffect } from "react";
import Image from "next/image";

export default function Home() {
 
  const[length,setlength]=useState(8)
  const[numAllowed, setnumallowed]=useState(false)
  const[password,setpassword]=useState('')
  const[charallowed,setcharallowed]=useState(false)
  const generatepassword=useCallback(()=>{
    let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numAllowed) str +="1234567890"
  if(charallowed) str+="!@#$%^&&*()"
  for(let i=1;i<length;i++){
   const char= Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(char)
  }
  setpassword(pass)
  },[length,numAllowed,charallowed])
  useEffect(()=>{
    generatepassword()
  },[length,numAllowed,charallowed])
  return (
   
   <>
         <div className="relative min-h-screen">
        <div className="fixed inset-0 z-0">
          <Image src="/pictures.jpg" layout="fill" objectFit="cover" alt="bg" />
        </div>

   <div className="text-white font-extrabold flex justify-center text-4xl font-serif mt-5 relative z-10  flex-col items-center">Password Generator</div>
   <div className="relative z-10">
  
  <div className="flex justify-center justify-items-center  mt-9 "><input type="text"   value={password}  placeholder="Password" readOnly
  onChange={(e:any)=>setlength(e.target.value)} name="" id=""
  className="outline-none w-96 py-1 cursor-pointer " />
  <button className="bg-blue-500 h-full py-1 px-2" onClick={() => navigator.clipboard.writeText(password)}>Copy</button>
  </div>
  <div className="flex justify-center justify-items-center gap-4  mt-9">
  <input type="range" min={6} max={20} value={length} className="cursor-pointer" onChange={(e:any)=>setlength(e.target.value)}/>
  <label htmlFor="length" className="text-amber-200 font-bold">Length:{length}</label>
  <input type="checkbox" defaultChecked={numAllowed} onChange={()=>{
    setnumallowed((prev)=>!prev)
  }} />
   <label htmlFor="number" className="text-amber-200">Numbers</label>
   <input type="checkbox" defaultChecked={charallowed} onChange={()=>{
    setcharallowed((prev)=>!prev)
  }} />
   <label htmlFor="characters" className="text-amber-200">Characters:</label>
   
  </div>  </div>
  <div className="relative z-10 text-white font-normal flex justify-center justify-items-end mt-96">Developed By Rao Shahroze Ali</div>
  </div>
  
   
   </>
  );
}
