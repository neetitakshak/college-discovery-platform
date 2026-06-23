import { prisma } from "@/lib/prisma";

export default async function CollegePage({
  params,
}: {
  params: { id: string };
}) {
  const college = await prisma.college.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!college) {
    return <h1>College Not Found</h1>;
  }

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">
        {college.name}
      </h1>

      <p className="text-lg mb-2">
        📍 {college.location}
      </p>

      <p className="mb-2">
        ⭐ Rating: {college.rating}
      </p>

      <p className="mb-2">
        💰 Fees: ₹{college.fees.toLocaleString()}
      </p>

      <p className="mb-2">
        🎯 Placement: ₹{college.placements.toLocaleString()}
      </p>

      <p className="mt-4">
        {college.overview}
      </p>
    </main>
  );
}