import { useState } from "react";
import { properties } from "../data/properties";
import PropertyCard from "./PropertyCard";

function List() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");

  const filtered = properties.filter((item) => {
    const cityMatch = item.location.toLowerCase().includes(search.toLowerCase());
    const typeMatch = type === "All" || item.type === type;
    return cityMatch && typeMatch;
  });

  return (
    <section
      id="listings"
      className="bg-gray-100 px-4 py-14 sm:px-6 md:py-20 lg:px-8 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Property Listings
          </h2>
        </div>

        <div className="mb-8 grid gap-4 rounded-2xl bg-white p-4 shadow sm:grid-cols-2 md:p-6 dark:bg-gray-950">
          <input
            type="text"
            placeholder="Search by city..."
            className="w-full rounded-lg border px-4 py-3 outline-none dark:border-gray-700 dark:bg-gray-900"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="w-full rounded-lg border px-4 py-3 outline-none dark:border-gray-700 dark:bg-gray-900"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option>All</option>
            <option>Villa</option>
            <option>Apartment</option>
            <option>House</option>
          </select>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, index) => (
            <PropertyCard key={index} property={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default List;