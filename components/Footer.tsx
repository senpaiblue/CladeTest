import Image from 'next/image'
import React from 'react'
import FooterTexts from './FooterTexts'

const Footer = () => {
  return (
    <footer className='px-[40px] py-[32px] border-t border-[#E7E7E7]'>
     <div className='flex flex-row gap-4 items-center pb-[16px]'>
      <Image src="./Logo.svg" width={40} height={40} alt='logo'/>
      <h2 className='text-[#4F4F4F] text-[20px] font-semibold'>Atlassian</h2>
     </div>
     <div className='flex flex-row gap-[64px]'>
     <div className='flex flex-col gap-[16px]'>
      <FooterTexts heading='Company size' description='1k - 2k Employees'/>
      <FooterTexts heading='Sector' description='Information Technology, Infrastructure'/>
      <FooterTexts heading='Founded In' description='2019'/>
     </div>
     
     <div className='flex flex-col gap-[16px]'>
      <FooterTexts heading='Type' description='Private'/>
      <FooterTexts heading='Funding' description='Bootstrapped'/>
      <FooterTexts heading='Founded By' description='Scott Farquhar, Mike Cannon-Brookes'/>
     </div>
     </div>
    </footer>
  )
}

export default Footer
