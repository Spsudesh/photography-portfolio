import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50" />
          <Image
            src="/images/about/hero-bg.jpg"
            alt="Photographer on a jeep with palm trees"
            fill
            className="object-cover object-[50%_40%]"
            priority
            quality={100}
            sizes="100vw"
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 drop-shadow-lg">
            Capturing life's precious moments with passion and creativity
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="lg:w-[45%]">
              <div className="relative w-full">
                <div className="relative h-[700px] rounded-lg overflow-hidden">
                  <Image
                    src="/images/about/about-1.jpg"
                    alt="Photographer at work"
                    width={600}
                    height={700}
                    className="w-full h-full object-cover rounded-lg"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl" />
                <div className="absolute -top-6 -left-6 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl" />
              </div>
            </div>
            <div className="lg:w-[55%] lg:pt-12">
              <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg">
                <p>
                  Welcome to RP Photography, where every click of the shutter captures 
                  a unique story. Our journey began with a simple love for photography 
                  and has evolved into a passionate pursuit of visual storytelling.
                </p>
                <p>
                  With years of experience in both traditional and contemporary photography, 
                  we've developed a distinctive style that blends technical expertise with 
                  artistic vision. Our approach focuses on capturing authentic moments that 
                  tell your story in the most compelling way.
                </p>
                <p>
                  We believe that great photography is about more than just taking pictures 
                  – it's about creating lasting memories and emotional connections that you'll 
                  treasure for years to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                  <Image
                    src="/images/about/about-2.jpg"
                    alt="Photography equipment setup"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl" />
                <div className="absolute -top-6 -left-6 w-48 h-48 bg-pink-500/10 rounded-full blur-2xl" />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Our Mission
              </h2>
              <div className="space-y-6">
                <p className="text-gray-600 dark:text-gray-300">
                  Our mission is to transform fleeting moments into timeless memories. 
                  We strive to capture the essence of every occasion, the personality 
                  of every subject, and the emotion of every scene.
                </p>
                <div className="grid gap-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-3 bg-blue-500/10 rounded-lg">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Quality First</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        We use professional-grade equipment and advanced techniques to ensure 
                        the highest quality in every shot.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-3 bg-green-500/10 rounded-lg">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Personal Touch</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        We work closely with each client to understand their vision and 
                        deliver results that exceed expectations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-3 bg-purple-500/10 rounded-lg">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Innovation</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        We stay current with the latest photography trends and technologies 
                        to offer innovative solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40 px-4 mb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
          <Image
            src="/images/about/cta-bg.jpg"
            alt="Professional camera equipment"
            fill
            className="object-cover object-[50%_65%]"
            quality={100}
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Let's Create Something Beautiful Together
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
            From capturing precious moments to creating stunning visual stories, 
            we're here to bring your vision to life. Let's start a conversation 
            about your next photography project.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/contact"
              className="inline-block bg-white text-black px-10 py-4 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 font-medium"
            >
              Get in Touch
            </Link>
            <Link 
              href="/gallery"
              className="inline-block bg-transparent border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white/10 transition-all transform hover:scale-105 font-medium"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 