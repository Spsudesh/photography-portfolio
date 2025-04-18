import Image from 'next/image';

export default function GalleryPage() {
  // Generate array of image numbers from 1 to 32
  const galleryImages = Array.from({ length: 32 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our collection of captured moments, each telling its own unique story.
          </p>
        </div>
      </section>

      {/* Featured Gallery Items */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Featured Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {/* Featured Gallery Items (your existing 3 items) */}
            {/* Gallery Item 1 */}
            <div className="relative group aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src="/images/gallery/img-1.jpg"
                alt="Gallery image 1"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-white text-xl font-semibold">Outdoor Photography</h3>
                  <p className="text-gray-200 mt-2">Nature's beauty captured in its purest form</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="relative group aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src="/images/gallery/img-2.jpg"
                alt="Gallery image 2"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-white text-xl font-semibold">Wedding Moments</h3>
                  <p className="text-gray-200 mt-2">Celebrating love and joy</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="relative group aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src="/images/gallery/img-3.jpg"
                alt="Gallery image 3"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-white text-xl font-semibold">Portrait Photography</h3>
                  <p className="text-gray-200 mt-2">Capturing personalities in perfect light</p>
                </div>
              </div>
            </div>
          </div>

          {/* All Gallery Images */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
            {galleryImages.map((num) => (
              <div key={num} className="relative break-inside-avoid mb-4">
                <div className="relative w-full h-auto">
                  <Image
                    src={`/images/gallery/img-${num}.jpg`}
                    alt={`Gallery image ${num}`}
                    width={800}
                    height={1200}
                    className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 