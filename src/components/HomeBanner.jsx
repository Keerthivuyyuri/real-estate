import { Search, MapPin } from "lucide-react";

function HomeBanner() {
  return (
    <section
      id="home"
      className="flex min-h-[620px] items-center bg-cover bg-center px-4 pt-20 sm:px-6 lg:px-8"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600')",
      }}
    >
      <div className="mx-auto w-full max-w-7xl py-16 text-white">
        <div className="max-w-3xl text-center sm:text-left">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
            Premium Real Estate Platform
          </span>

          <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Find Your Dream Home Today
          </h1>

          <p className="mt-5 text-sm leading-7 text-gray-200 sm:text-base md:text-lg">
            Discover modern apartments, luxury villas, and beautiful family
            homes in your favorite cities with trusted experts and premium
            listings.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#listings"
              className="rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Explore Properties
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white px-8 py-3 text-sm font-semibold transition hover:bg-white hover:text-black"
            >
              Contact Agent
            </a>
          </div>

          {/* Search Box */}
          <div className="mt-12 rounded-3xl bg-white p-4 shadow-2xl">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="flex items-center gap-3 rounded-xl border p-4">
                <MapPin className="text-blue-600" size={20} />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full outline-none text-gray-700"
                />
              </div>

              <select className="rounded-xl border p-4 text-gray-700 outline-none">
                <option>Property Type</option>
                <option>Villa</option>
                <option>Apartment</option>
                <option>House</option>
              </select>

              <select className="rounded-xl border p-4 text-gray-700 outline-none">
                <option>Budget</option>
                <option>₹50L - ₹1Cr</option>
                <option>₹1Cr - ₹2Cr</option>
                <option>₹2Cr+</option>
              </select>

              <button className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 p-4 font-semibold text-white transition hover:bg-blue-700">
                <Search size={18} />
                Search
              </button>
            </div>
          </div>

          {/* Statistics */}
          <div className="mt-12 grid grid-cols-3 gap-6 text-center sm:max-w-lg sm:text-left">
            <div>
              <h2 className="text-3xl font-bold text-blue-400">500+</h2>
              <p className="mt-2 text-sm text-gray-200">
                Properties Listed
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-400">1200+</h2>
              <p className="mt-2 text-sm text-gray-200">
                Happy Clients
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-400">50+</h2>
              <p className="mt-2 text-sm text-gray-200">
                Expert Agents
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;