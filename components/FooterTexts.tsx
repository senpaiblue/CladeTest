import React from 'react'

const FooterTexts = ({heading,description}:{heading:string,description:string}) => {
  return (
    <div>
      <h2 className='text-[#6E6D6D] text-[14px] font-medium'>
        {heading}
      </h2>
      <p className='text-[#3D3D3D] text-[16px] font-medium'>
        {description}
      </p>
    </div>
  )
}

export default FooterTexts
