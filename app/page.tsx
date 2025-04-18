'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
        <Image
            src="/images/hero-bg.jpg"
            alt="Hero background"
            fill
            className="object-cover md:object-center object-[73%_center]"
          priority
            sizes="100vw"
            quality={90}
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Capturing Moments
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Through the lens of creativity and passion
          </p>
          <Link 
            href="/gallery"
            className="inline-block bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
          >
            Explore Gallery
          </Link>
        </motion.div>
      </section>

      {/* Featured Gallery Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 px-4 bg-white dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            Our Services
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Outdoor Photography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800"
            >
              <div className="aspect-[3/4] relative">
                <Image
                  src="/images/outdoor-photography.jpg"
                  alt="Outdoor Photography"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Outdoor Photography</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Capture the beauty of nature and outdoor moments with our expert outdoor photography services. Perfect for landscapes, events, and adventure shoots.
                </p>
                <blockquote className="italic text-gray-500 dark:text-gray-400 border-l-4 border-gray-200 dark:border-gray-700 pl-4">
                  "Nature is the art of God, and we're here to capture its essence."
                </blockquote>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Link href="/services/outdoor" className="text-white text-lg font-medium px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all">
                  View Gallery
                </Link>
              </div>
            </motion.div>

            {/* Wedding Photography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800"
            >
              <div className="aspect-[3/4] relative">
                <Image
                  src="/images/wedding-photography.jpg"
                  alt="Wedding Photography"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Wedding Photography</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Preserve your special day with our elegant wedding photography. We capture every precious moment, from the first look to the last dance.
                </p>
                <blockquote className="italic text-gray-500 dark:text-gray-400 border-l-4 border-gray-200 dark:border-gray-700 pl-4">
                  "Love is the greatest adventure, and we're here to document your journey."
                </blockquote>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Link href="/services/wedding" className="text-white text-lg font-medium px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all">
                  View Gallery
                </Link>
              </div>
            </motion.div>

            {/* Indoor Photography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800"
            >
              <div className="aspect-[3/4] relative">
            <Image
                  src="/images/indoor-photography.jpg"
                  alt="Indoor Photography"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Indoor Photography</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Professional indoor photography for portraits, product shots, and studio sessions. Perfect lighting and composition for every shot.
                </p>
                <blockquote className="italic text-gray-500 dark:text-gray-400 border-l-4 border-gray-200 dark:border-gray-700 pl-4">
                  "The studio is our canvas, and light is our paint."
                </blockquote>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Link href="/services/indoor" className="text-white text-lg font-medium px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all">
                  View Gallery
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Recent Work Preview */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-8 px-4 bg-gray-50 dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white"
          >
            Recent Work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Explore a selection of our latest photography projects, capturing precious moments and creating timeless memories.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Gallery Image 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group aspect-[4/3] overflow-hidden rounded-xl"
            >
              <Image
                src="/images/gallery-1.jpg"
                alt="Gallery preview 1"
                fill
                className="object-cover object-[center_26%] scale-[1.31] transition-transform duration-500 group-hover:scale-[1.45]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Gallery Image 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative group aspect-[4/3] overflow-hidden rounded-xl"
            >
              <Image
                src="/images/gallery-2.jpg"
                alt="Gallery preview 2"
                fill
                className="object-cover object-[center_30%] transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Gallery Image 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative group aspect-[4/3] overflow-hidden rounded-xl"
            >
              <Image
                src="/images/gallery-3.jpg"
                alt="Gallery preview 3"
                fill
                className="object-cover object-[center_35%] transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </div>

          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-block bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg dark:bg-white dark:text-black"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 px-4 bg-[#0B0F17] text-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-serif mb-8 leading-tight"
            >
              Just as you<br />dreamt it.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 mb-8 leading-relaxed"
            >
              This is more than just photography—it's the art of capturing your moments exactly as you envisioned. 
              Whether it's the sparkle in your eyes or the quiet, candid smiles, we ensure every shot reflects your 
              unique story. Let us turn your memories into timeless images, just as you've always imagined.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link 
                href="/contact"
                className="inline-block bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
              >
                Start Now
              </Link>
            </motion.div>
          </div>

          {/* Images */}
          <div className="lg:w-1/2 relative">
            <div className="relative w-[300px] h-[600px] md:w-[500px] md:h-[700px]">
              {/* Main Image with Warm Overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="absolute left-0 bottom-0 w-full h-full rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/40 via-orange-400/20 to-transparent z-10"></div>
          <Image
                  src="/images/about-1.jpg"
                  alt="Photographer in action"
                  fill
                  className="object-cover object-[center_30%]"
                  priority
                />
              </motion.div>
              
              {/* Overlapping Image */}
              <motion.div 
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -right-32 top-[calc(50%-190px)] w-[220px] h-[280px] md:w-[300px] md:h-[380px] rounded-lg overflow-hidden z-20"
        >
          <Image
                  src="/images/about-2.jpg"
                  alt="Photography equipment"
                  fill
                  className="object-cover scale-[2] object-[center_40%]"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact/CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center py-16 px-4 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
          <Image
            src="/images/contact-bg.jpg"
            alt="Contact background"
            fill
            className="object-cover object-[center_40%]"
            priority
            quality={100}
            sizes="100vw"
          />
        </div>
        
        <div className="relative z-20 max-w-4xl mx-auto text-center text-white py-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let's Create Something Beautiful
          </h2>
          <p className="text-xl mb-12 text-gray-200 max-w-2xl mx-auto">
            Ready to capture your special moments? Get in touch and let's discuss your photography needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
          >
            Contact Me
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
