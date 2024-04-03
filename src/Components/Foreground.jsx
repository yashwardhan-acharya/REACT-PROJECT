import React, { useRef, useState } from 'react'
import Card from './Card'




function Foreground() {
    const ref = useRef(null);
    const data = [
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi quas est inventore.",
            fileSize: ".9 mb",
            close: false,
            tag: {
                isOpen: false,
                tagTitle: "Download Completed!",
                tagColor: "bg-green-500"
            },
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi quas est inventore.",
            fileSize: ".4 mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Downloading!",
                tagColor: "bg-sky-500"
            },
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi quas est inventore.",
            fileSize: "4.5 mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Completed!",
                tagColor: "bg-green-500"
            },
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi quas est inventore.",
            fileSize: "5 mb",
            close: false,
            tag: {
                isOpen: false,
                tagTitle: "Download Completed!",
                tagColor: "bg-green-500"
            },
        },
    ];

  return (
    <div ref={ref} className=' fixed top-0 left-0 z-[3] w-full flex flex-wrap gap-10 h-full p-5'>
          {data.map((item, index) => (
            <Card data={item} reference={ref} />
            // <Card data={item} key={index} />
        ))}  
              
        
      </div>    
  )
}

export default Foreground
