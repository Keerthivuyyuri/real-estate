import { CheckCircle, MapPin, Home, IndianRupee, Ruler } from "lucide-react";

function Details() {
  const details = [
    {
      title: "Location",
      value: "Hyderabad",
      icon: <MapPin size={20} />,
    },
    {
      title: "Price",
      value: "₹1.8 Cr",
      icon: <IndianRupee size={20} />,
    },
    {
      title: "Area",
      value: "3200 sqft",
      icon: <Ruler size={20} />,
    },
    {
      title: "Type",
      value: "Villa",
      icon: <Home size={20} />,
    },
  ];

  const features = [
    "Modular Kitchen",
    "Private Garden",
    "Car Parking",
    "24/7 Security",
  ];

  return (
    <section className="px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center">
        <div className="relative overflow-hidden rounded-3xl shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1200"
            alt="Property"
            className="h-72 w-full object-cover sm:h-96 lg:h-[520px]"
          />

          <div className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
            Premium Villa
          </div>
        </div>

        <div>
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Property Details
          </span>

          <h2 className="mt-5 text-2xl font-bold sm:text-3xl md:text-4xl">
            Luxury Villa With Modern Interior
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base dark:text-gray-300">
            This beautiful villa includes spacious bedrooms, premium interiors,
            modular kitchen, parking space, garden area, and a peaceful
            neighborhood designed for comfortable family living.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {details.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-xl bg-gray-100 p-5 dark:bg-gray-900"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  {item.icon}
                </div>

                <div>
                  <h4 className="font-bold">{item.title}</h4>
                  <p className="mt-1 text-gray-500">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
              >
                <CheckCircle size={18} className="text-blue-600" />
                {item}
              </div>
            ))}
          </div>

          <button className="mt-8 w-full rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700 sm:w-auto">
            Schedule Visit
          </button>
        </div>
      </div>
    </section>
  );
}

export default Details;