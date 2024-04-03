import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data ,reference}) {
  return (
      <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.4 } className=' relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-[#417d9b] text-white px-5 py-8 overflow-hidden'>
          <FaRegFileAlt className=' text-xl' />
          <p className=' text-s mt-5 leading-tight '>{data.desc}</p>
          <div className='Footer absolute bottom-0  w-full    left-0'>
              <div className='flex items-center justify-between px-6 py-3 mb-3'>
                  <h5 className=' text-l'>{data.fileSize}</h5>
                  <span className=' w-10 h-10 bg-zinc-600 rounded-full flex items-center justify-center'>
                      {data.close ? <IoClose /> : <LuDownload className=' text-l' />}
                  
                  </span>
              </div>
              {
                  data.tag.isOpen && (
                      <div className={ ` tag w-full py-5 ${data.tag.tagColor} text-white flex items-center        justify-center`}>
                          <h3 className=' text-md text-white  '>{ data.tag.tagTitle}</h3>
                    </div>
                  ) 
              }
          </div>
    </motion.div>
  )
}

export default Card
