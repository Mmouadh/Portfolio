import { useEffect } from "react";
import { useState } from "react";

export const LoadingScreen = ({onComplete}) => {
  const [text, settext] = useState("");
  const fulltext = "  <WELCOME.. /> ";
  useEffect(() => {
    let index= 0;
    const interval = setInterval(() =>{
      settext(fulltext.substring(0,index))
      index++;

      if(index > fulltext.length){
        clearInterval(interval)

        setTimeout(() => {1
         onComplete() 
        },1000)
      }
    }, 100)

    return () => clearInterval(interval)
  },[onComplete])

 
  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-3xl font-mono font-bold ml-10">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>

      <div className="w-[250px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};

