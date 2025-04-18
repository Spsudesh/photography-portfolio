'use client';

import Image from 'next/image';

export default function Gallery() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Photo Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {/* Static images */}
        <div className="relative aspect-square group overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/images/gallery-1.jpg"
            alt="Gallery Image 1"
            width={800}
            height={800}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="relative aspect-square group overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/images/gallery-2.jpg"
            alt="Gallery Image 2"
            width={800}
            height={800}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="relative aspect-square group overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/images/gallery-3.jpg"
            alt="Gallery Image 3"
            width={800}
            height={800}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="relative aspect-square group overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/images/outdoor-photography.jpg"
            alt="Outdoor Photography"
            width={800}
            height={800}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="relative aspect-square group overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/images/wedding-photography.jpg"
            alt="Wedding Photography"
            width={800}
            height={800}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="relative aspect-square group overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/images/indoor-photography.jpg"
            alt="Indoor Photography"
            width={800}
            height={800}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
} 