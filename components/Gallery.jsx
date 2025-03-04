"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/assets/aa.png",
  "/assets/chalo.jpg",
  "/assets/a2.jpg",
  "/assets/a1.jpg",
  "/assets/bb.png",
  "/assets/aa.png",
];

export default function GalleryCarousel() {
  const [index, setIndex] = useState(0);
  const imagesPerView = 3;

  const nextImage = () => {
    setIndex((prevIndex) =>
      prevIndex + imagesPerView >= images.length ? 0 : prevIndex + imagesPerView
    );
  };

  const prevImage = () => {
    setIndex((prevIndex) =>
      prevIndex - imagesPerView < 0
        ? images.length - imagesPerView
        : prevIndex - imagesPerView
    );
  };

  return (
    <div className="container max-w-6xl mx-auto py-8 ">
      <h2 className="text-lg font-semibold mb-4">Gallery</h2>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {images.slice(index, index + imagesPerView).map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Gallery image ${index + i + 1}`}
            className="w-[30%] h-56 rounded-lg shadow-md object-cover"
          />
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <Button variant="outline" onClick={prevImage}>
          <ChevronLeft />
        </Button>
        <Button variant="outline" onClick={nextImage}>
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
