import React, { useState } from 'react'

const Faq = ({description ,title}) => {
    const [show  , SetShow] = useState(false)
  return (
    <div className='mx-auto flex-col  py-[2px] px-2  sm:max-w-screen-md'>
        <div className='sm:px6 my-[2px] flex justify-between bg-[#383830] px-2 py-[2px] sm:py-5'>
            <h1 className='text-lg sm:text-2xl'>{title}</h1>
            {show ? 
                <svg className='h-8 w-8  cursor-pointer size-6' onClick={(()=> SetShow(!show))} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg> :   <svg className='h-8 w-8  cursor-pointer size-6' onClick={(()=> SetShow(!show))} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>

              
            }
        </div>
        <div  className={` ${show && 'bg-[#303030]'  }`}>
            <p className='sm:py6 py-2 px-4 text-lg sm:py-6 sm:text-2xl '>{show && description}</p>
        </div>

        {/* <div className={`${show ? 'bg-[#303030]' : ''}`}>
  <p className='sm:py-6 py-2 px-4 text-lg sm:py-6 sm:text-2xl'>
    {show && description}
  </p>
</div> */}

 

    </div>
  )
}

export default Faq