import React from 'react'
import quote from '../assets/quote.png'

const Quote = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10 px-4">
      <img src={quote} alt="Quote" className="w-16 md:w-20 mb-4" />
      <div className="text w-full max-w-2xl text-center my-6 text-base md:text-lg px-2 md:px-6">
        As the CEO of Onims Agro Solutions Limited, I am proud to affirm our
        unwavering commitment to empowering farmers by providing seamless access to
        markets, essential resources, and practical knowledge. At the core of our
        mission is the drive to build a stronger, more inclusive, and sustainable
        agricultural ecosystem—together with the communities we serve.
      </div>
      <div className="ceo">
        <p className="text-xs md:text-sm text-gray-600">
          Francis Eneji, CEO, Onimsagro.com
        </p>
      </div>
    </div>
  )
}

export default Quote