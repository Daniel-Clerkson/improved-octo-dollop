import React, { useState } from 'react'
import Installation from '../components/extension-components/Installation'
import WarehouseRental from '../components/extension-components/WarehouseRental'
import AgroEquipmentRental from '../components/extension-components/AgroEquipmentRental'

const Extension = () => {
  const [activeTab, setActiveTab] = useState('installation')

  return (
    <div className="min-h-screen px-2 sm:px-4 md:px-10 py-6">
      {/* Mini Navbar */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-full bg-gray-100 shadow-md overflow-hidden">
          <button
            className={`px-5 py-2 text-sm font-semibold transition-colors duration-200 ${
              activeTab === 'installation'
                ? 'bg-green-600 text-white'
                : 'text-gray-700 hover:bg-green-100'
            }`}
            onClick={() => setActiveTab('installation')}
          >
            Installation
          </button>
          <button
            className={`px-5 py-2 text-sm font-semibold transition-colors duration-200 ${
              activeTab === 'warehouse'
                ? 'bg-green-600 text-white'
                : 'text-gray-700 hover:bg-green-100'
            }`}
            onClick={() => setActiveTab('warehouse')}
          >
            Warehouse Rental
          </button>
          <button
            className={`px-5 py-2 text-sm font-semibold transition-colors duration-200 ${
              activeTab === 'equipment'
                ? 'bg-green-600 text-white'
                : 'text-gray-700 hover:bg-green-100'
            }`}
            onClick={() => setActiveTab('equipment')}
          >
            Agro Equipment Rental
          </button>
        </div>
      </div>
      {/* Content */}
      {activeTab === 'installation' && <Installation />}
      {activeTab === 'warehouse' && <WarehouseRental />}
      {activeTab === 'equipment' && <AgroEquipmentRental />}
    </div>
  )
}

export default Extension