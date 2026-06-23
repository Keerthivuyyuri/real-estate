import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-950 px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-blue-500">
              EstateHub
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              Find your dream home with confidence. Explore premium villas,
              apartments, and houses with trusted guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <div className="space-y-3 text-sm text-gray-400">
              <a href="#home" className="block hover:text-blue-500">
                Home
              </a>

              <a href="#featured" className="block hover:text-blue-500">
                Featured
              </a>

              <a href="#listings" className="block hover:text-blue-500">
                Listings
              </a>

              <a href="#contact" className="block hover:text-blue-500">
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Contact Us
            </h3>

            <div className="space-y-3 text-sm text-gray-400">
              <p>📍 Hyderabad, India</p>
              <p>📞 +91 98765 43210</p>
              <p>✉ info@estatehub.com</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Follow Us
            </h3>

            <div className="flex gap-4">
              <a
                href="/"
                className="rounded-full bg-gray-800 p-3 transition hover:bg-blue-600"
              >
                <FaFacebookF />
              </a>

              <a
                href="/"
                className="rounded-full bg-gray-800 p-3 transition hover:bg-pink-600"
              >
                <FaInstagram />
              </a>

              <a
                href="/"
                className="rounded-full bg-gray-800 p-3 transition hover:bg-sky-500"
              >
                <FaTwitter />
              </a>

              <a
                href="/"
                className="rounded-full bg-gray-800 p-3 transition hover:bg-blue-700"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © 2026 EstateHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;