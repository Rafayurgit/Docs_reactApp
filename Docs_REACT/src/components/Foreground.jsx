import React from 'react'
import Card from './Card'

function Foreground() {

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
                isOpen:false , tagTitle:"Download Now", tagColor:"green"},
        },
        {
            desc:"This is just a random description for the project",
            fileSize: ".9mb",
            close: true,
            tag:{
                isOpen:false , tagTitle:"Download Now", tagColor:"green"},
        },
    ];

  return (
    <div className="fixed top-0 left-0 w-full h-full f z-[5] flex gap-5 flex-wrap p-5">
        {data.map((item, index)=>(
            <Card data={item}/>
        ))}
    </div>
  )
}

export default Foreground
