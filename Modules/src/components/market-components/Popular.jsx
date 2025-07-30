import React from 'react'
import img1 from "../../assets/card-img.png"
import { FaStar } from 'react-icons/fa6'

const products = [
  {
    id: 1,
    name: "Grain",
    price: 800,
    image: img1,
    rating: 5,
    reviews: 9000,
  },
  // Add more products here if needed
];

const Popular = () => {
  return (
    <div className="popular-products mt-10 px-2 sm:px-4 md:px-10">
      <p className="text-2xl md:text-4xl font-semibold mb-6 md:mb-10 text-center md:text-left">
        Popular Products
      </p>
      <div className="cards w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="card bg-white p-2 sm:p-3 flex flex-col w-full min-h-[260px] sm:min-h-[320px] rounded-lg border-gray-200 border items-center justify-between shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="img w-full h-24 sm:h-28 md:h-36 flex items-center justify-center overflow-hidden rounded-t-lg">
              <img src={product.image} className="w-full h-full object-cover" alt={product.name} />
            </div>
            <div className="info m-2 w-full p-2 sm:p-3 flex flex-col flex-1 justify-between">
              <div className="grain flex justify-between items-center mb-2">
                <p className="text-sm sm:text-base md:text-lg font-bold">{product.name}</p>
                <p className="font-semibold text-xs sm:text-sm md:text-base">${product.price}</p>
              </div>
              <div className="stars flex items-center mb-2">
                <div className="star flex text-green-500">
                  {[...Array(product.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="rate text-xs text-gray-500 ml-2">
                  ({product.reviews})
                </div>
              </div>
              <div className="price text-xs sm:text-sm md:text-base font-bold text-gray-800 mt-auto">
                ${product.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular