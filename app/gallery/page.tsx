import Image from 'next/image';
import imageLoader from '../../image-loader';

export default function Gallery() {
  const images = [
    { src: '/images/img8.jpg', alt: 'Gallery Image 8' },
    { src: '/images/img13.jpg', alt: 'Gallery Image 13' },
    { src: '/images/img22.jpg', alt: 'Gallery Image 22' },
    { src: '/images/img24.jpg', alt: 'Gallery Image 24' },
    // ... other images
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {images.map((image, index) => (
        <div key={index} className="relative aspect-square">
          <Image
            loader={imageLoader}
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
} 