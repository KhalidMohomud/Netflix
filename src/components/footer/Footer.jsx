import React from 'react'
import FooterDate  from '../../content/footerLinks.json'
import FooterLiks from './FooterLiks'

 const Footer = () => {
    // console.log(FooterDate)
  return (
    <div className='mt-10 mb-16 sm:mx-auto sm:max-w-screen-lg'>
        <h1 className='text-[#6c6c6c]'> Question Content Us</h1>
         <div className='mx-10 grid grid-cols-2 sm:grid-cols-4'>
        {FooterDate.columns.map((date)=> {
            return(
            //console.log(date);
            <FooterLiks links = {date} />
            )
        })}
        </div>
        <p className='my-1 text-sm text-[#6c6c6c] '>Netflix Somali</p>

    </div>
    
  )
}
export default  Footer