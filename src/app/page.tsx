"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type College = {
  id: string;
  name: string;
  location: string;
  rating: number;
  fees: number;
  placements: number;
  overview: string;
};

export default function Home() {
  const [colleges, setColleges] = useState<College[]>([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    fetch("/api/colleges")
      .then((res) => res.json())
      .then((data: College[]) => setColleges(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredColleges = colleges.filter((college) => {
    return (
      (college.name.toLowerCase().includes(search.toLowerCase()) ||
        college.location.toLowerCase().includes(search.toLowerCase())) &&
      (location === "" || college.location === location)
    );
  });

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">
        College Discovery Platform
      </h1>

      <input
        type="text"
        placeholder="Search colleges..."
        className="w-full p-3 rounded-lg border mb-6"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="border p-3 rounded-lg mb-4"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        <option value="">All Locations</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
      </select>

      <div className="grid md:grid-cols-3 gap-6">
        {filteredColleges.map((college) => (
          <Link
            href={`/college/${college.id}`}
            key={college.id}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300 block"
          >
            <h2 className="text-2xl font-bold">{college.name}</h2>
            <p>{college.location}</p>
            <p>⭐ {college.rating}</p>
            <p>Fees: ₹{college.fees}</p>
            <p>Placement: ₹{college.placements}</p>
            <p>{college.overview}</p>

            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
              View Details
            </button>
          </Link>
        ))}
      </div>
    </main>
  );
}