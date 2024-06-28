import Image from 'next/image'
import React from 'react'

const Skillinfo = ({image,text}:{image:string , text:string}) => {
  return (
        <div className="gap-2 flex flex-row max-w-fit px-[6px] py-[4px] border border-[#D0D5DD] bg-white rounded-[6px]"><Image src={image} width={16} height={16} alt='skills'/><h3 className='text-[#344054] text-[12px] font-medium'> {text}</h3></div>
    
  )
}

export default Skillinfo
