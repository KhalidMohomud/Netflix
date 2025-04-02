import React from 'react'
import FaqsDate  from  '../../content/faq.json'
import Faq from './Faq'

const Faqs = () => {
  return (
    <div>
        {FaqsDate.map((faq)=> (
           
           <Faq    {...faq}/>
            
        ))}
    </div>
  )
}

export default Faqs