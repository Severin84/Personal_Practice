'use client'
import { transform } from "next/dist/build/swc";
import React, { ReactElement, ReactNode, useState,useRef, useEffect } from "react";
import { GiJellyfish } from "react-icons/gi";
import { GiMonkey } from "react-icons/gi";
import { GiTigerHead } from "react-icons/gi";
import { GiFox } from "react-icons/gi";
import './globals.css'
import { TfiLayoutTabWindow } from "react-icons/tfi";
// import {IconType} from 'react-icons'

export default function Home() {
  const [navsmall,setNavsmall]=useState<boolean>(true)
  const [tab,setCurrentTab]=useState<ReactNode>(<GiJellyfish/>);
  const [navbarlen,setNavbarlen]=useState<number>(15);
  const [navbarlenopen,setNavbarlenopen]=useState<number>(15);
  const [windowlen,setwindowlen]=useState<number>(0);
  
  
  const handelComponent=(tempTab:ReactNode)=>{
     setCurrentTab(tempTab);
  }

  const handleNav=()=>{
    setNavsmall(!navsmall)
     
    if(navsmall===true){
      for(let i=navbarlenopen;i>10;i--){
        setNavbarlen(i)
      }

    }else{
      for(let i=navbarlen;i<16;i++){
        setNavbarlenopen(i)
      }
    }

  }

  useEffect(()=>{

  },[navbarlen])

  //small:15->3
  //big:75=>90
  return (
   <div>
      <div style={{backgroundColor:"yellow",width:"100vw",height:"100vh",display:"flex"}}>
        {
          navsmall===true?
            <div  style={navsmall===true?{backgroundColor:"red",width:`${15}vw`,height:"90vh",marginTop:"2.5rem",marginLeft:"3rem",display:"flex",justifyContent:"center"}:{visibility:"hidden"}}>
          <div style={{marginTop:"2.5rem"}}>
            <div style={{marginLeft:"12rem",cursor:'pointer'}} onClick={()=>handleNav()}>
             <TfiLayoutTabWindow />
            </div>
            <div style={{display:"flex",fontSize:"1.5rem",width:"10rem",justifyContent:"space-between",cursor:"pointer"}} onClick={()=>handelComponent(<GiJellyfish/>)}>
             <GiJellyfish style={{fontSize:"2rem"}}/>
             <div style={navsmall===true?{visibility:"visible"}:{visibility:"hidden"}}>
             <span>Fish</span>
            </div>
           </div>
           <div style={{display:"flex",fontSize:"1.5rem",width:"10rem",justifyContent:"space-between",cursor:"pointer"}}  onClick={()=>handelComponent(<GiMonkey/>)}>
           <GiMonkey style={{fontSize:"2rem"}}/>
           <div style={navsmall===true?{visibility:"visible"}:{visibility:"hidden"}}>
           <span>Monkey</span>
           </div>
           </div>
           <div style={{display:"flex",fontSize:"1.5rem",width:"10rem",justifyContent:"space-between",cursor:"pointer"}}  onClick={()=>handelComponent(<GiTigerHead/>)}>
           <GiTigerHead style={{fontSize:"2rem"}}/>
           <div style={navsmall===true?{visibility:"visible"}:{visibility:"hidden"}}>
           <span>Head</span>
           </div>
           </div>
           <div style={{display:"flex",fontSize:"1.5rem",width:"10rem",justifyContent:"space-between",cursor:"pointer"}}  onClick={()=>handelComponent(<GiFox/>)}>
           <GiFox style={{fontSize:"2rem"}}/>
           <div style={navsmall===true?{visibility:"visible"}:{visibility:"hidden"}}>
           <span>Fox</span>
           </div>
           </div>
          </div>
         </div>
          :
            <div  style={{width:"5rem",height:"100vh",backgroundColor:"blue",marginRight:"5rem"}}>
              <div>
                <div style={{marginLeft:"2rem",cursor:'pointer',marginTop:"3rem"}} onClick={()=>handleNav()}>
                <TfiLayoutTabWindow />
                </div>
              </div>
            </div>
        }
        
         <div  className={navsmall===true?"tab":"tabactive"} style={navsmall===true?{backgroundColor:"green",width:`${75}vw`,height:"90vh",marginTop:"2.5rem"}:{backgroundColor:"green",width:`${75}vw`,height:"90vh",marginTop:"2.5rem"}}>
          <div style={{display:"flex",justifyContent:"center",fontSize:"30rem",marginTop:"5rem"}}>
          {tab}
          </div>
         </div>
      </div>
   </div>
  );
}
