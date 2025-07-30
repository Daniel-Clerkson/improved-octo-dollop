import React from 'react'
import Form from './Form'

const TechnicalSupportForm = () => {
  return (
    <div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            Facing Crop Issues? Get Expert Technical Support!
          </h1>
          <p className="text-xl mb-6 text-gray-600">
            Submit your crop details, and our experts will provide solutions to protect your yield.
          </p>
        </div>
        <Form />
    </div>
  )
}

export default TechnicalSupportForm