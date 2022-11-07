import React, { useEffect, useState } from 'react'
import classNames from "classnames"

const Slide = ({images}) => {

    const [current , Setcurrent]  = useState(0);

    useEffect(() => {
       let timer;
       timer = setTimeout(()=>{
        if(current === images.length-1){
            Setcurrent(0)
        }else{
            Setcurrent((prev) => ++prev)
        }
       },4000);

       return() => {
        clearTimeout(timer)
       }

    }, [images , current]);


  return <ul className='list-none flex relative' style={{marginTop:19 , marginLeft: 151}}>
    {images.map((image,index)=>(
        <li style={{width : 270 , height: 427 , transitionDuration: "2.5s"}}
         className={classNames("absolute top-0 left-0" , current===index ? "visible opacity-100" : "invisible opacity-0")} key={index}>
            <img  
            src={image} 
            alt={`slide-1${index + 1}`}
            width={250}
            height={427}
            />  
        </li>
    ))}
  </ul>
}

export default Slide;