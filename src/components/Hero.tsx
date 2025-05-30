
const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              Building a
              <span className="block text-blue-600">Better Tomorrow</span>
              <span className="block text-green-600">Together</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 sm:max-w-xl sm:mx-auto lg:mx-0">
              Join us in creating lasting change in communities worldwide. Every action, every donation, every voice matters in our mission to build hope and opportunity for all.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Make a Donation
              </button>
              <button className="w-full sm:w-auto mt-4 sm:mt-0 border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-200">
                Volunteer With Us
              </button>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <img
                className="w-full rounded-lg"
                src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Community outreach and support"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-green-600/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-100 rounded-full opacity-50"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-green-100 rounded-full opacity-50"></div>
    </section>
  );
};

export default Hero;
