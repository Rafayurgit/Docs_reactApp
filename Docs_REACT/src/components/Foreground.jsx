import React, { useRef } from 'react'
import Card from './Card'


function Foreground() {
    const ref=useRef(null);


    const data =[
        {
            desc:"This is just a random description for the project",
            fileSize: ".9mb",
            close: true,
            tag:{
                isOpen:false , tagTitle:"Download Now", tagColor:"green"},
        },
        {
            desc:"This is just a random description for the project",
            fileSize: ".9mb",
            close: true,
            tag:{
                isOpen:true , tagTitle:"Download Now", tagColor:"green"},
        },
        {
            desc:"This is just a random description for the project",
            fileSize: ".mb",
            close: true,
            tag:{
                isOpen:true , tagTitle:"Upload", tagColor:"blue"},
        },
    ];

  return (
    <div ref={ref} className="fixed top-0 left-0 w-full h-full f z-[5] flex gap-5 flex-wrap p-5">
        {data.map((item, index)=>(
            <Card data={item} refrence={ref}/>
        ))}
    </div>
  )
}

export default Foreground
