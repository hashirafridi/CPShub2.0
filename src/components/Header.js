const Header = () => {
  return (
    <div className="w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Side - Logo and Text */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-center sm:text-left">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-2xl flex items-center justify-center text-white font-bold text-3xl sm:text-4xl shadow-xl" style={{ backgroundColor: '#002F6C' }}>
                CPS<br/>HUB
              </div>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                The Hub that connects<br />
                the Construction Ecosystem<br />
                <span style={{ color: '#139ED5' }}>Online & On-Ground</span>
              </h1>
            </div>
          </div>

          {/* Right Side - Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-t-4" style={{ borderTopColor: '#139ED5' }}>
            <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
              Access major construction Projects in the Middle East, and connect with the People who matter
            </p>
            <button className="w-full sm:w-auto px-8 py-3 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all" style={{ backgroundColor: '#002F6C' }}>
              See more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
