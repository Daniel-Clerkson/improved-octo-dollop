import React, { useRef, useEffect, useState } from 'react'
import img1 from "../../assets/card-img.png"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"
import img4 from "../../assets/img4.jpg"
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

const products = [
  {
    id: 1,
    name: "Grain",
    price: 800,
    image: img1,
    rating: 5,
    reviews: 9000,
  },
  {
    id: 2,
    name: "Sprayer",
    price: 3400,
    image: img2,
    rating: 4,
    reviews: 700,
  },
  {
    id: 3,
    name: "Insecticide",
    price: 3900,
    image: img3,
    rating: 5,
    reviews: 20,
  },
  {
    id: 4,
    name: "Herbs",
    price: 400,
    image: img4,
    rating: 5,
    reviews: 300,
  },
];

const Latest = () => {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate products for infinite effect
  const infiniteProducts = [...products, ...products];

  // Auto-scroll logic
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollStep = 1; // px per frame
    const scrollDelay = 16; // ms per frame

    function autoScroll() {
      if (!scrollContainer || isPaused) return;
      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth / 2
      ) {
        // Reset to start for infinite effect
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += scrollStep;
      }
    }

    intervalRef.current = setInterval(autoScroll, scrollDelay);

    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  // Manual scroll with arrows
  const scroll = (direction) => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const { scrollLeft, clientWidth } = scrollContainer;
      const scrollAmount = clientWidth * 0.8;
      let newScrollLeft =
        direction === 'left'
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;

      // Infinite effect for manual scroll
      if (newScrollLeft >= scrollContainer.scrollWidth / 2) {
        newScrollLeft = 0;
      } else if (newScrollLeft < 0) {
        newScrollLeft = scrollContainer.scrollWidth / 2;
      }

      scrollContainer.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  // Responsive arrow positioning
  // On mobile, arrows are below the cards; on md+ they are at the extreme ends
  return (
    <div className="latest-products mt-10 px-1 sm:px-2 md:px-6 lg:px-10 relative">
      <p className="text-2xl md:text-4xl font-semibold mb-6 md:mb-10 text-center md:text-left">
        Latest Products
      </p>
      <div className="relative flex flex-col">
        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-hidden gap-3 sm:gap-5 md:gap-6 scroll-smooth py-1 sm:py-2"
          style={{ scrollBehavior: 'smooth', width: '100%' }}
        >
          {infiniteProducts.map((product, idx) => (
            <div
              key={product.id + '-' + idx}
              className="card bg-white p-2 sm:p-3 flex-shrink-0 flex flex-col mb-3 sm:mb-4 md:mb-6 w-56 xs:w-64 sm:w-72 min-h-[300px] sm:min-h-[350px] rounded-lg border-gray-200 border items-center justify-between shadow-md hover:shadow-lg transition-all cursor-pointer duration-300 transform hover:-translate-y-1"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
            >
              <div className="img w-full h-28 sm:h-36 flex items-center justify-center overflow-hidden rounded-t-lg">
                <img src={product.image} className="w-full h-full object-cover" alt={product.name} />
              </div>
              <div className="info m-2 w-full p-2 sm:p-3 flex flex-col flex-1 justify-between">
                <div className="grain flex justify-between items-center mb-2">
                  <p className="text-base sm:text-lg font-bold">{product.name}</p>
                  <p className="font-semibold text-sm sm:text-base">${product.price}</p>
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
                <div className="price text-sm sm:text-base font-bold text-gray-800 mt-auto">
                  ${product.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Latest