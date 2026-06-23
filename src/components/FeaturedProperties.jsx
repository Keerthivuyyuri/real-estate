import { MapPin, Star } from "lucide-react";
import { properties } from "../data/properties";

function Featured() {
  const featuredProperties = properties.slice(0, 2);

  return (
    <section
      id="featured"
      className="px-4 py-14 sm:px-6 md:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Premium Collection
          </span>

          <h2 className="mt-5 text-2xl font-bold sm:text-3xl md:text-4xl">
            Featured Properties
          </h2>

          <p className="mt-3 text-sm text-gray-500 sm:text-base dark:text-gray-400">
            Explore our handpicked luxury properties
          </p>
        </div>

        <div className="space-y-10">
          {featuredProperties.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl bg-white shadow-lg dark:bg-gray-950"
            >
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-72 w-full object-cover sm:h-96"
                  />

                  <span className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
                    <Star size={16} />
                    Featured
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-6 sm:p-8">
                  <p className="text-2xl font-bold text-blue-600">
                    {item.price}
                  </p>

                  <h3 className="mt-4 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <div className="mt-4 flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <MapPin size={18} />
                    {item.location}
                  </div>

                  <p className="mt-6 leading-7 text-gray-600 dark:text-gray-300">
                    Experience modern architecture, spacious interiors,
                    premium amenities, and a peaceful environment designed
                    for comfortable living.
                  </p>

                  <div className="mt-8 grid grid-cols-3 gap-4">
                    <div className="rounded-2xl bg-gray-100 p-4 text-center dark:bg-gray-900">
                      <h4 className="font-bold">{item.beds}</h4>
                      <p className="text-sm text-gray-500">Beds</p>
                    </div>

                    <div className="rounded-2xl bg-gray-100 p-4 text-center dark:bg-gray-900">
                      <h4 className="font-bold">{item.baths}</h4>
                      <p className="text-sm text-gray-500">Baths</p>
                    </div>

                    <div className="rounded-2xl bg-gray-100 p-4 text-center dark:bg-gray-900">
                      <h4 className="font-bold">{item.area}</h4>
                      <p className="text-sm text-gray-500">Area</p>
                    </div>
                  </div>

                  <button className="mt-8 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
                    View Property
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Featured;