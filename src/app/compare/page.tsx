"use client";

import { useEffect, useState } from "react";

type College = {
  id: string;
  name: string;
  location: string;
  rating: number;
  fees: number;
  placements: number;
  overview: string;
};

export default function ComparePage() {
  const [colleges, setColleges] = useState<College[]>([]);
  const [college1, setCollege1] = useState("");
  const [college2, setCollege2] = useState("");

  useEffect(() => {
    fetch("/api/colleges")
      .then((res) => res.json())
      .then((data: College[]) => setColleges(data))
      .catch((err) => console.error(err));
  }, []);

  const c1 = colleges.find((c) => c.id === college1);
  const c2 = colleges.find((c) => c.id === college2);

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-6">Compare Colleges</h1>

      <div className="flex gap-4 mb-8">
        <select
          className="border p-2"
          onChange={(e) => setCollege1(e.target.value)}
        >
          <option value="">Select College 1</option>
          {colleges.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>

        <select
          className="border p-2"
          onChange={(e) => setCollege2(e.target.value)}
        >
          <option value="">Select College 2</option>
          {colleges.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {c1 && c2 && (
        <table className="border w-full">
          <tbody>
            <tr>
              <td className="border p-3 font-bold">Name</td>
              <td className="border p-3">{c1.name}</td>
              <td className="border p-3">{c2.name}</td>
            </tr>

            <tr>
              <td className="border p-3 font-bold">Location</td>
              <td className="border p-3">{c1.location}</td>
              <td className="border p-3">{c2.location}</td>
            </tr>

            <tr>
              <td className="border p-3 font-bold">Fees</td>
              <td className="border p-3">₹{c1.fees}</td>
              <td className="border p-3">₹{c2.fees}</td>
            </tr>

            <tr>
              <td className="border p-3 font-bold">Rating</td>
              <td className="border p-3">{c1.rating}</td>
              <td className="border p-3">{c2.rating}</td>
            </tr>

            <tr>
              <td className="border p-3 font-bold">Placement</td>
              <td className="border p-3">₹{c1.placements}</td>
              <td className="border p-3">₹{c2.placements}</td>
            </tr>
          </tbody>
        </table>
      )}
    </main>
  );
}