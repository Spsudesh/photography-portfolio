'use client';

import Image from 'next/image';

export default function Gallery() {
  const images = [
    { src: '/images/img8.jpg', alt: 'Gallery Image 8' },
    { src: '/images/img13.jpg', alt: 'Gallery Image 13' },
    { src: '/images/img22.jpg', alt: 'Gallery Image 22' },
    { src: '/images/img24.jpg', alt: 'Gallery Image 24' },
    { src: '/images/gallery-1.jpg', alt: 'Gallery Image 1' },
    { src: '/images/gallery-2.jpg', alt: 'Gallery Image 2' },
    { src: '/images/gallery-3.jpg', alt: 'Gallery Image 3' },
    { src: '/images/outdoor-photography.jpg', alt: 'Outdoor Photography' },
    { src: '/images/wedding-photography.jpg', alt: 'Wedding Photography' },
    { src: '/images/indoor-photography.jpg', alt: 'Indoor Photography' },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Photo Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-square group overflow-hidden rounded-lg shadow-lg">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              priority={index < 4}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
} 