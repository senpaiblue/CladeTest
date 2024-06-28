import React from 'react'

const HeaderLables = ({icon,text}:{icon:any,text:string}) => {
  return (
    <div>
        <h2 className="gap-2 flex flex-row text-[#5D5D5D] items-center text-[20px] font-medium">{icon} {text}</h2>
    </div>
  )
}

export default HeaderLables
