import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Priya Sharma",
    role: "Apartment Buyer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "EstateHub helped us find our dream apartment easily. The experience was smooth and professional.",
  },
  {
    name: "Arjun Reddy",
    role: "Villa Owner",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Very clean listings and excellent agent support. I found the right villa within my budget.",
  },
  {
    name: "Sneha Rao",
    role: "First-Time Buyer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "The property details were clear, and the inquiry process was very simple.",
  },
];

function Testimonials() {
  return (
    <section className="px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="mt-5 text-2xl font-bold sm:text-3xl md:text-4xl">
            What Clients Say
          </h2>

          <p className="mt-3 text-sm text-gray-500 sm:text-base dark:text-gray-400">
            Trusted by happy property buyers
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="relative rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl dark:bg-gray-950"
            >
              <Quote className="absolute right-6 top-6 text-blue-100" size={42} />

              <div className="mb-5 flex gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={17} fill="currentColor" />
                ))}
              </div>

              <p className="relative z-10 text-sm leading-7 text-gray-600 dark:text-gray-300">
                "{item.text}"
              </p>

              <div className="mt-6 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-bold">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;