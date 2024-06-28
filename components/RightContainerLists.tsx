import React from 'react'

const RightContainerLists = ({icon,text,number}:{icon:any,text:string,number:string}) => {
  return (
    <div className='flex flex-row items-center justify-between px-[8px] py-[12px] border-b border-[#E7E7E7] w-full'>
      <h3 className='flex flex-row items-center gap-[8px] text-[#4F4F4F] font-medium'> {icon} {text}</h3> 
      <h3 className='flex flex-row items-center gap-[8px] text-[#3D3D3D] font-semibold'>{number}</h3>
    </div>
  )
}

export default RightContainerLists
