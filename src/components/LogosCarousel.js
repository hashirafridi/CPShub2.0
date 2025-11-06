const logosData = [
  {
    id: 1,
    name: "Company A",
    logoSrc: "/placeholder.svg",
    link: "https://example.com/company-a",
  },
  {
    id: 2,
    name: "Company B",
    logoSrc: "/placeholder.svg",
    link: "https://example.com/company-b",
  },
  {
    id: 3,
    name: "Company C",
    logoSrc: "/placeholder.svg",
    link: "https://example.com/company-c",
  },
  {
    id: 4,
    name: "Company D",
    logoSrc: "/placeholder.svg",
    link: "https://example.com/company-d",
  },
  {
    id: 5,
    name: "Company E",
    logoSrc: "/placeholder.svg",
    link: "https://example.com/company-e",
  },
  {
    id: 6,
    name: "Company F",
    logoSrc: "/placeholder.svg",
    link: "https://example.com/company-f",
  },
];

const LogosCarousel = () => {
  // Triple the logos for seamless infinite scrolling
  const infiniteLogos = [...logosData, ...logosData, ...logosData];

  return (
    <div className="w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
          Our Partners
        </h2>
        
        <div className="relative">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling container */}
          <div className="overflow-hidden">
            <div 
              className="flex gap-8 animate-scroll"
              style={{
                animation: 'scroll 30s linear infinite',
              }}
            >
              {infiniteLogos.map((logo, index) => (
                <a
                  key={`${logo.id}-${index}`}
                  href={logo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-4"
                >
                  <img
                    src={logo.logoSrc}
                    alt={logo.name}
                    className="w-full h-full object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LogosCarousel;
