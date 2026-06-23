import { useState } from "react";
import { Moon, Sun, Menu, X, Home } from "lucide-react";

function Navbar({ darkMode, setDarkMode }) {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Featured", href: "#featured" },
    { name: "Listings", href: "#listings" },
    { name: "Agent", href: "#agent" },
    { name: "Contact", href: "#contact" },
  ];

  const handleClick = (item) => {
    setActive(item.name);
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-gray-200 bg-white/90 shadow-sm backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">
            <Home size={18} />
          </span>
          <span className="text-xl font-bold text-blue-600 sm:text-2xl">
            EstateHub
          </span>
        </a>

        <nav className="hidden items-center gap-5 text-sm font-medium md:flex lg:gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => handleClick(item)}
              className={`rounded-full px-3 py-2 whitespace-nowrap transition ${
                active === item.name
                  ? "bg-blue-100 text-blue-600 dark:bg-gray-800"
                  : "text-gray-700 hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex h-9 w-9 items-center justify-center rounded-full border text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-md border text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 md:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t bg-white px-4 py-4 shadow-lg dark:border-gray-800 dark:bg-gray-900 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleClick(item)}
                className={`rounded-xl py-3 text-center text-sm font-semibold transition ${
                  active === item.name
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600 dark:bg-gray-800 dark:text-gray-300"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;