import { Mail, Phone, MapPin, Star } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Agent() {
  return (
    <section
      id="agent"
      className="bg-gray-100 px-4 py-14 sm:px-6 md:py-20 lg:px-8 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Meet Our Expert
          </span>

          <h2 className="mt-5 text-2xl font-bold sm:text-3xl md:text-4xl">
            Professional Real Estate Consultant
          </h2>

          <p className="mt-3 text-sm text-gray-500 sm:text-base dark:text-gray-400">
            Helping families find their dream homes with trusted guidance.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-xl dark:bg-gray-950">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Image */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900"
                alt="Agent"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <span className="w-fit rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                Senior Property Consultant
              </span>

              <h2 className="mt-5 text-3xl font-bold">
                Rajesh Kumar
              </h2>

              <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
                With over 8 years of experience, Rajesh has helped hundreds of
                families find premium apartments, villas, and investment
                properties with confidence and transparency.
              </p>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="rounded-2xl bg-gray-100 p-4 text-center dark:bg-gray-900">
                  <h3 className="text-2xl font-bold text-blue-600">8+</h3>
                  <p className="text-sm text-gray-500">Experience</p>
                </div>

                <div className="rounded-2xl bg-gray-100 p-4 text-center dark:bg-gray-900">
                  <h3 className="text-2xl font-bold text-blue-600">500+</h3>
                  <p className="text-sm text-gray-500">Properties Sold</p>
                </div>

                <div className="rounded-2xl bg-gray-100 p-4 text-center dark:bg-gray-900">
                  <div className="flex justify-center">
                    <Star className="fill-yellow-400 text-yellow-400" />
                  </div>
                  <p className="mt-1 text-sm text-gray-500">4.9 Rating</p>
                </div>
              </div>

              {/* Contact */}
              <div className="mt-8 space-y-4 text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-3">
                  <Phone className="text-blue-600" size={18} />
                  +91 98765 43210
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="text-blue-600" size={18} />
                  rajesh@estatehub.com
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-600" size={18} />
                  Hyderabad, India
                </div>
              </div>

              {/* Social Icons */}
              <div className="mt-8 flex gap-4">
                <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-900">
                  <FaFacebookF />
                </div>

                <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-900">
                  <FaInstagram />
                </div>

                <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-900">
                  <FaLinkedinIn />
                </div>
              </div>

              <button className="mt-8 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Agent;