"use client";
import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import LogosCarousel from "./LogosCarousel";

const articlesData = [
  {
    id: 1,
    title: "Modern Construction Techniques in UAE",
    description:
      "Discover the latest innovations and sustainable practices transforming the construction industry across the United Arab Emirates. From smart building materials to eco-friendly designs, learn how modern techniques are shaping the future of construction.",
    imageSrc: "/placeholder.svg",
    city: "Dubai",
    country: "UAE",
  },
  {
    id: 2,
    title: "Green Building Revolution in Saudi Arabia",
    description:
      "Explore how Saudi Arabia is leading the way in sustainable construction with groundbreaking green building initiatives and environmental standards.",
    imageSrc: "/placeholder.svg",
    city: "Riyadh",
    country: "Saudi Arabia",
  },
  // {
  //   id: 3,
  //   title: "Infrastructure Development Across the Middle East",
  //   description:
  //     "A comprehensive look at major infrastructure projects transforming cities and connecting communities throughout the Middle East region.",
  //   imageSrc: "/placeholder.svg",
  //   city: "Doha",
  //   country: "Qatar",
  // },
  // {
  //   id: 4,
  //   title: "Smart Cities Initiative in Abu Dhabi",
  //   description:
  //     "Discover how Abu Dhabi is implementing cutting-edge technology to create sustainable smart cities with advanced infrastructure and intelligent systems.",
  //   imageSrc: "/placeholder.svg",
  //   city: "Abu Dhabi",
  //   country: "UAE",
  // },
];

const MainSection = () => {
  const [articlesOpen, setArticlesOpen] = useState(true);

  return (
    <div className="w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-gray-900 mb-8 sm:mb-12 leading-tight">
          Explore the right resources across the entire project lifecycle.
        </h2>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 sm:px-6 py-3 sm:py-4 pr-12 sm:pr-14 text-base sm:text-lg border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-500 shadow-lg"
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white"
              style={{ backgroundColor: "#139ED5" }}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-2 gap-3 md:gap-6 lg:gap-8">
            {/* Card 1 - Companies */}
            <div
              className="relative bg-white rounded-2xl shadow-xl p-6 md:p-8 border-l-4 hover:shadow-2xl transition-shadow"
              style={{ borderLeftColor: "#F22613" }}
            >
              <ChevronRight className="absolute top-4 right-4 w-5 h-5 md:w-6 md:h-6" style={{ color: "#F22613" }} />
              <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4">
                <div
                  className="w-11 h-11 md:w-12 md:h-12 rounded-lg flex items-center justify-center text-white font-bold text-base"
                  style={{ backgroundColor: "#F22613" }}
                >
                  C
                </div>
                <h3 className="text-xl md:text-2xl font-bold" style={{ color: "#F22613" }}>
                  Companies
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-600">
                Connect with leading construction companies across the Middle East region
              </p>
            </div>

            {/* Card 2 - Projects */}
            <div
              className="relative bg-white rounded-2xl shadow-xl p-6 md:p-8 border-l-4 hover:shadow-2xl transition-shadow"
              style={{ borderLeftColor: "#505050" }}
            >
              <ChevronRight className="absolute top-4 right-4 w-5 h-5 md:w-6 md:h-6" style={{ color: "#505050" }} />
              <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4">
                <div
                  className="w-11 h-11 md:w-12 md:h-12 rounded-lg flex items-center justify-center text-white font-bold text-base"
                  style={{ backgroundColor: "#505050" }}
                >
                  P
                </div>
                <h3 className="text-xl md:text-2xl font-bold" style={{ color: "#505050" }}>
                  Projects
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-600">
                Discover major construction projects and opportunities in your area
              </p>
            </div>

            {/* Card 3 - People */}
            <div
              className="relative bg-white rounded-2xl shadow-xl p-6 md:p-8 border-l-4 hover:shadow-2xl transition-shadow"
              style={{ borderLeftColor: "#0084AB" }}
            >
              <ChevronRight className="absolute top-4 right-4 w-5 h-5 md:w-6 md:h-6" style={{ color: "#0084AB" }} />
              <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4">
                <div
                  className="w-11 h-11 md:w-12 md:h-12 rounded-lg flex items-center justify-center text-white font-bold text-base"
                  style={{ backgroundColor: "#0084AB" }}
                >
                  P
                </div>
                <h3 className="text-xl md:text-2xl font-bold" style={{ color: "#0084AB" }}>
                  People
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-600">
                Network with professionals and decision-makers in construction
              </p>
            </div>

            {/* Card 4 - Products */}
            <div
              className="relative bg-white rounded-2xl shadow-xl p-6 md:p-8 border-l-4 hover:shadow-2xl transition-shadow"
              style={{ borderLeftColor: "#F09436" }}
            >
              <ChevronRight className="absolute top-4 right-4 w-5 h-5 md:w-6 md:h-6" style={{ color: "#F09436" }} />
              <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4">
                <div
                  className="w-11 h-11 md:w-12 md:h-12 rounded-lg flex items-center justify-center text-white font-bold text-base"
                  style={{ backgroundColor: "#F09436" }}
                >
                  P
                </div>
                <h3 className="text-xl md:text-2xl font-bold" style={{ color: "#F09436" }}>
                  Products
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-600">
                Access construction materials and products from verified suppliers
              </p>
            </div>
          </div>

          {/* Center Cross Logo */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-xl lg:text-2xl shadow-2xl"
              style={{ backgroundColor: "#002F6C" }}
            >
              HUB
            </div>
          </div>
        </div>

        {/* Logos Carousel */}
        <LogosCarousel />

        {/* Articles Section */}
        <div className="max-w-7xl mx-auto mt-16 sm:mt-20 lg:mt-24">
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-gray-900">Articles</h2>
            <button
              onClick={() => setArticlesOpen(!articlesOpen)}
              className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle articles section"
            >
              <ChevronDown
                className={`w-6 h-6 sm:w-7 sm:h-7 text-gray-700 transition-transform ${
                  articlesOpen ? "" : "rotate-180"
                }`}
              />
            </button>
          </div>

          {articlesOpen && (
            <div className="space-y-6">
              {articlesData.map((article, index) => (
                <ArticleCard
                  key={article.id}
                  imagePosition={index % 2 === 0 ? "left" : "right"}
                  imageSrc={article.imageSrc}
                  title={article.title}
                  description={article.description}
                  city={article.city}
                  country={article.country}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// interface ArticleCardProps {
//   imagePosition: "left" | "right";
//   imageSrc: string;
//   title: string;
//   description: string;
//   city: string;
//   country: string;
// }

const ArticleCard = ({ imagePosition, imageSrc, title, description, city, country }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const truncatedDescription = description.length > 150 ? description.slice(0, 150) + "..." : description;

  return (
    <div
      className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow flex flex-col ${
        imagePosition === "left" ? "sm:flex-row" : "sm:flex-row-reverse"
      }`}
    >
      {/* Image */}
      <div className="w-full sm:w-2/5 h-48 sm:h-64">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="w-full sm:w-3/5 p-6 relative">
        {/* City and Country */}
        <div className="absolute top-4 right-4 text-right">
          <p className="text-sm font-semibold text-gray-700">{city}</p>
          <p className="text-xs text-gray-500">{country}</p>
        </div>

        {/* Title and Description */}
        <div className="pr-24">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-3">{isExpanded ? description : truncatedDescription}</p>

          {description.length > 150 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-sm font-semibold hover:underline"
              style={{ color: "#139ED5" }}
            >
              {isExpanded ? "See Less" : "See More"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainSection;
