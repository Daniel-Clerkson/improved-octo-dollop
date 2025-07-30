import React, { useState } from 'react'
import Input from '../components/market-components/Input'
import Output from '../components/market-components/Output'

const Marketpage = () => {
  const [activeTab, setActiveTab] = useState('input')

  return (
    <div>
      {/* Mini Navbar */}
      <div className="flex justify-center mt-6 mb-8">
        <div className="inline-flex rounded-full bg-gray-100 shadow-md overflow-hidden">
          <button
            className={`px-6 py-2 text-sm font-semibold transition-colors duration-200 ${
              activeTab === 'input'
                ? 'bg-green-600 text-white'
                : 'text-gray-700 hover:bg-green-100'
            }`}
            onClick={() => setActiveTab('input')}
          >
            Input
          </button>
          <button
            className={`px-6 py-2 text-sm font-semibold transition-colors duration-200 ${
              activeTab === 'output'
                ? 'bg-green-600 text-white'
                : 'text-gray-700 hover:bg-green-100'
            }`}
            onClick={() => setActiveTab('output')}
          >
            Output
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'input' && <Input />}
      {activeTab === 'output' && <Output />}
    </div>
  )
}

export default Marketpage