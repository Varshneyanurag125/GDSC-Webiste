
'use client';
import Profile from "../../public/crown.png";
import { useState } from "react";
import Image from "next/image";
export default function Home() {

    const [ moto , Setmoto] = useState("  GDSC: Empowering the next generation of developers ")
    return(
    <div className=" max-h-full w-full m-0 box-border bg-black flex flex-col justify-between items-center p-6 no-scrollbar">
      <div className=" h-32 "></div>
      <div className=" text-white p-4 max-w-md flex flex-col gap-4 relative mb-2"> 
        <Image className="  w-14 h-14 -rotate-[30deg] absolute -top-3 left-3" width={30} height={30} alt="crown" src={Profile} ></Image>
        <h1 className= "text-5xl font-bold text-wrap text-center w-96 leading-tight">We're Students <br /> of <br />Google's Club </h1>
        <p className=" text-center ">{moto}</p>
      </div>   
      <div className=" h-72 w-full mt-10 flex items-center gap-4 overflow-x-auto no-scrollbar scroll-smooth">
        <div className=" w-60 bg-gray-600 h-full rounded-3xl flex-shrink-0"><Image height={100} width={100} alt="random" src=""></Image></div>
        <div className=" w-60 bg-gray-600 h-full rounded-3xl flex-shrink-0"><Image height={100} width={100} alt="random" src=""></Image></div>
        <div className=" w-60 bg-gray-600 h-full rounded-3xl flex-shrink-0"><Image height={100} width={100} alt="random" src=""></Image></div>
        <div className=" w-60 bg-gray-600 h-full rounded-3xl flex-shrink-0"><Image height={100} width={100} alt="random" src=""></Image></div>
        <div className=" w-60 bg-gray-600 h-full rounded-3xl flex-shrink-0"><Image height={100} width={100} alt="random" src=""></Image></div>
        <div className=" w-60 bg-gray-600 h-full rounded-3xl flex-shrink-0"><Image height={100} width={100} alt="random" src=""></Image></div>
        <div className=" w-60 bg-gray-600 h-full rounded-3xl flex-shrink-0"><Image height={100} width={100} alt="random" src=""></Image></div>
        <div className=" w-60 bg-gray-600 h-full rounded-3xl flex-shrink-0"><Image height={100} width={100} alt="random" src=""></Image></div>
      </div>
    </div>
    )
}