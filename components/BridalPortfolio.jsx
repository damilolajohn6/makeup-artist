"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

const bridalPortfolioItems = [
  {
    title: "Radiant, Long-Lasting Bridal Makeup",
    description:
      "Enhance your natural beauty with a flawless finish that looks stunning in person and on camera.",
    price: "$60",
    image: "/assets/aa.png",
  },
  {
    title: "Elegant Bridal Look",
    description: "Perfect for your big day, tailored to your unique style.",
    price: "$60",
    image: "/assets/chalo.jpg",
  },
  {
    title: "Classic Bridal Elegance",
    description: "A timeless look that exudes confidence and grace.",
    price: "$75",
    image: "/assets/a2.jpg",
  },
  {
    title: "Modern Chic Bride",
    description: "A trendy, stylish look for contemporary brides.",
    price: "$80",
    image: "/assets/a1.jpg",
  },
];

export default function BridalPortfolioItem({ page, setPage, totalPages }) {
  const itemsPerPage = 2;
  const paginatedItems = bridalPortfolioItems.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="max-w-[90rem] mx-auto flex flex-wrap md:flex-nowrap gap-6">
        <div className="hidden md:flex w-1/4 flex-col items-center">
          <div className="flex gap-4 mt-6">
            <button
              className="p-3 bg-[#A28E66] text-white rounded-lg shadow hover:bg-[#433822] transition disabled:opacity-50"
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
            >
              <ArrowLeft />
            </button>
            <button
              className="p-3 bg-[#A28E66] text-white rounded-lg shadow hover:bg-[#433822] transition disabled:opacity-50"
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        <div className="w-full md:w-3/4 flex flex-col gap-6">
          <h1 className="text-xl font-bold">Bridal Makeup</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paginatedItems.map((item, index) => (
              <div key={index} className="border rounded-lg p-4 shadow-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover rounded"
                />
                <div className="mt-2">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.description}</p>
                  <p className="font-semibold mt-1">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
