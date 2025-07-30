import React from 'react'
import TrainForm from './TrainForm'

const TrainingForm = () => {
  return (
    <div>
        <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          Training Request Form
        </h1>
        <p className="text-xl mb-6 text-gray-600">
          Let's Get Started! Fill in the form below to request an Training service.
        </p>
      </div>
        <TrainForm />
    </div>
  )
}

export default TrainingForm