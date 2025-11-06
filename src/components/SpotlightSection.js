"use client";
const spotlightData = [
  {
    id: 1,
    name: "Ahmed Al Rashid",
    city: "Dubai",
    country: "UAE",
    imageSrc: "/placeholder.svg",
    description:
      "Senior Project Manager with over 15 years of experience in large-scale infrastructure development. Specialized in sustainable construction practices and smart building technologies. Led multiple award-winning projects across the Middle East region, focusing on innovative solutions for modern urban challenges.",
  },
  {
    id: 2,
    name: "Sara Mohammed",
    city: "Riyadh",
    country: "Saudi Arabia",
    imageSrc: "/placeholder.svg",
    description:
      "Chief Architect and urban planning expert dedicated to creating sustainable and livable cities. Pioneer in green building design with a portfolio of LEED-certified projects. Passionate about integrating traditional architectural elements with modern sustainability practices.",
  },
  {
    id: 3,
    name: "Omar Hassan",
    city: "Abu Dhabi",
    country: "UAE",
    imageSrc: "/placeholder.svg",
    description:
      "Construction Technology Specialist focusing on digital transformation in the construction industry. Expert in BIM implementation, IoT integration, and smart construction methodologies. Helping companies modernize their operations through cutting-edge technology solutions.",
  },
  {
    id: 4,
    name: "Fatima Al Mansoori",
    city: "Doha",
    country: "Qatar",
    imageSrc: "/placeholder.svg",
    description:
      "Structural Engineer with expertise in high-rise buildings and mega infrastructure projects. Known for innovative engineering solutions that combine safety, efficiency, and aesthetic appeal. Active contributor to international engineering standards and best practices.",
  },
];

const SpotlightSection = () => {
  // Triple the data for infinite loop effect
  const infiniteData = [...spotlightData, ...spotlightData, ...spotlightData];

  const handleScroll = (direction) => {
  const carousel = document.querySelector('[data-carousel-container]');
  if (!carousel) return;

  const scrollAmount = window.innerWidth < 640 
    ? carousel.clientWidth 
    : carousel.clientWidth / 4;

  const currentScroll = carousel.scrollLeft;
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;
  const cardWidth = window.innerWidth < 640 
    ? carousel.clientWidth 
    : carousel.clientWidth / 4;
  const totalCards = spotlightData.length;

  if (direction === 'right') {
    const newScroll = currentScroll + scrollAmount;

    // If we're near the end, jump back to the beginning set
    if (newScroll >= maxScroll - cardWidth) {
      carousel.scrollTo({ left: cardWidth * totalCards, behavior: 'auto' });
      setTimeout(() => {
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }, 50);
    } else {
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  } else {
    const newScroll = currentScroll - scrollAmount;

    // If we're near the start, jump to the end set
    if (newScroll <= cardWidth) {
      carousel.scrollTo({ left: cardWidth * (totalCards * 2), behavior: 'auto' });
      setTimeout(() => {
        carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }, 50);
    } else {
      carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  }
};


  return (
    <div className="w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-gray-900">
            Spotlight
          </h2>
          <div className="flex gap-2">
            <button
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow flex items-center justify-center"
              onClick={() => handleScroll('left')}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow flex items-center justify-center"
              onClick={() => handleScroll('right')}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div 
          className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          data-carousel-container
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-6 pb-4">
            {infiniteData.map((person, index) => (
              <div
                key={`${person.id}-${index}`}
                className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] snap-start"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full">
                  {/* Image */}
                  <div className="w-full h-48 sm:h-56">
                    <img src={person.imageSrc} alt={person.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col flex-grow">
                    {/* Name */}
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{person.name}</h3>

                    {/* City and Country */}
                    <div className="mb-3">
                      <p className="text-sm font-semibold text-gray-700">{person.city}</p>
                      <p className="text-xs text-gray-500">{person.country}</p>
                    </div>

                    {/* Description with scrollbar */}
                    <div className="flex-grow overflow-y-auto max-h-32 pr-2">
                      <p className="text-sm text-gray-600">{person.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotlightSection;
