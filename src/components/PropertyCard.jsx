import { MapPin, Bed, Bath, Ruler, Heart } from "lucide-react";

function PropertyCard({ property }) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-gray-950">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-60"
        />

        <div className="absolute left-4 top-4 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white">
          {property.type}
        </div>

        <button className="absolute right-4 top-4 rounded-full bg-white p-2 shadow-md dark:bg-gray-900">
          <Heart size={18} className="text-gray-500" />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-blue-600">
            {property.price}
          </p>

          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
            Available
          </span>
        </div>

        <h3 className="mt-4 text-xl font-bold">
          {property.title}
        </h3>

        <div className="mt-3 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <MapPin size={16} />
          {property.location}
        </div>

        <div className="my-5 border-t border-gray-200 dark:border-gray-800"></div>

        <div className="grid grid-cols-3 gap-3 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex flex-col items-center rounded-xl bg-gray-100 p-3 dark:bg-gray-900">
            <Bed size={18} className="mb-2 text-blue-600" />
            <span>{property.beds}</span>
            <span className="text-xs text-gray-500">Beds</span>
          </div>

          <div className="flex flex-col items-center rounded-xl bg-gray-100 p-3 dark:bg-gray-900">
            <Bath size={18} className="mb-2 text-blue-600" />
            <span>{property.baths}</span>
            <span className="text-xs text-gray-500">Baths</span>
          </div>

          <div className="flex flex-col items-center rounded-xl bg-gray-100 p-3 dark:bg-gray-900">
            <Ruler size={18} className="mb-2 text-blue-600" />
            <span>{property.area}</span>
            <span className="text-xs text-gray-500">Area</span>
          </div>
        </div>

        <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
          View Details
        </button>
      </div>
    </div>
  );
}

export default PropertyCard;