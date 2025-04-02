import React from 'react'

const FooterLiks = ({links}) => {
    console.log("WW",links);
  return (
    <div className='mx-4 my-2 flex-col'>
        {links.map((link)=> (

           <a href="" className='text-[#6c6c6c] my-1 text-ms'>
            {link}
            </a>
        ))}
    </div>
  )
}

export default FooterLiks