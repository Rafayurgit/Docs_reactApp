import React from 'react'
import { LuDownload } from "react-icons/lu";
import { FaRegFileAlt } from "react-icons/fa";
import {IoClose} from "react-icons/io5";


function Card({data}) {
  return (
    <div className='relative flex-shrink-0 overflow-hidden w-60 h-72 bg-zinc-900/90 rounded-[20px] text-white p-5'>
        <FaRegFileAlt/>
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className=' footer absolute w-full bottom-0 left-0'>
            <div className='flex items-center justify-between px-8 py-3 mb-3'>
            <h3>{data.fileSize}</h3>
            <span className='w-6 h-6 bg-zinc-600 rounded-full flex justify-center items-center'>
                {data.close ? <IoClose/> :<LuDownload size=".7em" color='#fff'/>}
            </span> 
            </div>
            {data.tag.isOpen ? <div className='tag w-full h-9 bg-sky-400 flex justify-center items-center text-sm'>Download Now</div> : null}
             
        </div>
    </div>
  )
}

export default Card
