import { Mail, Phone, MapPin } from "lucide-react";

function Form() {
  return (
    <section
      id="contact"
      className="bg-gray-100 px-4 py-14 sm:px-6 md:py-20 lg:px-8 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-6 shadow-lg sm:p-8 dark:bg-gray-950">
        <div className="mb-8 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Contact Us
          </span>

          <h2 className="mt-5 text-2xl font-bold sm:text-3xl md:text-4xl">
            Contact / Inquiry Form
          </h2>

          <p className="mt-3 text-sm text-gray-500 sm:text-base dark:text-gray-400">
            Send your property inquiry to our team
          </p>
        </div>

        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-gray-100 p-4 text-center dark:bg-gray-900">
            <Phone className="mx-auto mb-2 text-blue-600" size={22} />
            <p className="text-sm text-gray-600 dark:text-gray-300">
              +91 98765 43210
            </p>
          </div>

          <div className="rounded-2xl bg-gray-100 p-4 text-center dark:bg-gray-900">
            <Mail className="mx-auto mb-2 text-blue-600" size={22} />
            <p className="text-sm text-gray-600 dark:text-gray-300">
              info@estatehub.com
            </p>
          </div>

          <div className="rounded-2xl bg-gray-100 p-4 text-center dark:bg-gray-900">
            <MapPin className="mx-auto mb-2 text-blue-600" size={22} />
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Hyderabad, India
            </p>
          </div>
        </div>

        <form className="grid gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-900"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-900"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-900"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full resize-none rounded-xl border px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-900"
          ></textarea>

          <button
            type="button"
            className="rounded-xl bg-blue-600 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700 hover:shadow-xl"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}

export default Form;