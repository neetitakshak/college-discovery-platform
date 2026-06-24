import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  await prisma.college.deleteMany();
  await prisma.college.createMany({
data: [
  {
  name: "Amrita Vishwa Vidyapeetham",
  location: "Coimbatore",
  fees: 300000,
  rating: 4.7,
  placements: 1200000,
  overview: "Leading private university known for engineering, research and innovation.",
},
  {
    name: "IIT Bombay",
    location: "Mumbai",
    fees: 250000,
    rating: 4.9,
    placements: 3200000,
    overview: "Top engineering institute in India",
  },
  {
    name: "IIT Delhi",
    location: "Delhi",
    fees: 240000,
    rating: 4.8,
    placements: 3000000,
    overview: "Premier engineering college",
  },
  {
    name: "NIT Trichy",
    location: "Tamil Nadu",
    fees: 180000,
    rating: 4.6,
    placements: 1800000,
    overview: "Best NIT in India",
  },
  {
    name: "IIT Madras",
    location: "Chennai",
    fees: 230000,
    rating: 4.9,
    placements: 3100000,
    overview: "Top IIT in South India",
  },
  {
    name: "IIT Kanpur",
    location: "Kanpur",
    fees: 220000,
    rating: 4.8,
    placements: 2900000,
    overview: "Known for research and innovation",
  },
  {
    name: "BITS Pilani",
    location: "Pilani",
    fees: 500000,
    rating: 4.7,
    placements: 2500000,
    overview: "Top private engineering institute",
  },
  {
    name: "VIT Vellore",
    location: "Vellore",
    fees: 350000,
    rating: 4.5,
    placements: 1400000,
    overview: "Popular private university",
  },
  {
    name: "SRM University",
    location: "Chennai",
    fees: 300000,
    rating: 4.4,
    placements: 1200000,
    overview: "Strong industry connections",
  },
  {
    name: "DTU",
    location: "Delhi",
    fees: 200000,
    rating: 4.6,
    placements: 1800000,
    overview: "Top state engineering college",
  },
  {
    name: "NSUT",
    location: "Delhi",
    fees: 190000,
    rating: 4.5,
    placements: 1700000,
    overview: "Leading technical university",
  },
  {
    name: "NIT Surathkal",
    location: "Karnataka",
    fees: 190000,
    rating: 4.7,
    placements: 2000000,
    overview: "Top-ranked NIT",
  },
]
  });

  return NextResponse.json({
    success: true,
  });
}