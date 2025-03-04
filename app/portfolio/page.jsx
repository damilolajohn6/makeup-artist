"use client";

import { useState } from "react";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import BridalPortfolioItem from "@/components/BridalPortfolio";
import EditorialShoots from "@/components/EditorialShoots";
import SpecialEffects from "@/components/SpecialEffect";

const PortFolioPage = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 2;
  const totalItems = 4; // Update this dynamically if needed
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="bg-gray-700 w-full">
        <header className="container py-5 relative z-10 w-full flex items-center justify-between px-6 lg:px-12 pt-6">
          <Link href="/">
            <h1 className="text-3xl lg:text-4xl font-bold text-white">
              Danna <span className="text-[#A28E66]">Makeup</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex gap-6 z-10">
            <Nav />
            <Link href="/form">
              <Button className="bg-white text-black font-semibold py-2 px-4 rounded-lg">
                Get a Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="block xl:hidden z-10">
            <MobileNav />
          </div>
        </header>
      </div>

      {/* Portfolio Section */}

      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <p className="text-gray-600 italic mb-6">
          "A result you can bet on that lasts from morning till night"
        </p>
      </div>
      <BridalPortfolioItem
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />

      <EditorialShoots page={page} setPage={setPage} totalPages={totalPages} />

      <SpecialEffects page={page} setPage={setPage} totalPages={totalPages} />

      {/* Pagination Controls */}
      <div className="container mx-auto py-12">
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            className="border p-2 rounded-md disabled:opacity-50"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            <ArrowLeft />
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`border p-2 rounded-md ${
                page === i + 1 ? "bg-gray-800 text-white" : ""
              }`}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="border p-2 rounded-md disabled:opacity-50"
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortFolioPage;
