import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  const whatsappNumber = '7507275128';
  const whatsappMessage = 'Hi, I would like to book a photography session.';
  const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
          <Image
            src="/images/services/hero-bg.jpg"
            alt="Services background"
            fill
            className="object-cover object-[50%_35%]"
            priority
            sizes="100vw"
            quality={100}
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 drop-shadow-lg">
            Crafting timeless memories through the lens of creativity
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Outdoor Photography */}
          <div id="outdoor" className="flex flex-col lg:flex-row items-center gap-12 mb-32">
            <div className="lg:w-1/2 relative">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/images/services/outdoor.jpg"
                  alt="Outdoor Photography"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Outdoor Photography
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Capture the beauty of nature and outdoor moments with our expert photography services. 
                Whether it's a serene landscape, an adventurous shoot, or a special outdoor event, 
                we bring creativity and technical expertise to every shot.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700 dark:text-gray-200">
                  <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Natural light expertise
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-200">
                  <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Location scouting included
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-200">
                  <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Weather backup plans
                </li>
              </ul>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Wedding Photography */}
          <div id="wedding" className="flex flex-col-reverse lg:flex-row items-center gap-12 mb-32">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Wedding Photography
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Your special day deserves to be captured in all its beauty. Our wedding photography 
                service ensures that every precious moment, from the first look to the last dance, 
                is preserved with elegance and emotion.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700 dark:text-gray-200">
                  <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Full day coverage
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-200">
                  <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Engagement session included
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-200">
                  <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Digital & printed albums
                </li>
              </ul>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                Book Now
              </a>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/images/services/wedding.jpg"
                  alt="Wedding Photography"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Indoor/Studio Photography */}
          <div id="indoor" className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 relative">
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/images/services/studio.jpg"
                  alt="Studio Portrait Photography"
                  fill
                  className="object-cover object-[50%_25%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Studio Portrait Photography
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Our professional studio setup is perfect for capturing stunning portraits that highlight 
                your unique personality. Using expert lighting techniques and premium equipment, 
                we ensure your best features shine through in every shot.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700 dark:text-gray-200">
                  <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Expert portrait lighting
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-200">
                  <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Professional retouching
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-200">
                  <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Multiple poses and expressions
                </li>
              </ul>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Let's discuss your photography needs and create a custom package that's perfect for you.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-black text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
} 