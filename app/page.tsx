'use client';

import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Hero from '@/components/sections/Hero';
import FeaturedProperties from '@/components/sections/FeaturedProperties';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Amenities from '@/components/sections/Amenities';
import Stats from '@/components/sections/Stats';
import Testimonials from '@/components/sections/Testimonials';
import Agents from '@/components/sections/Agents';
import VideoShowcase from '@/components/sections/VideoShowcase';
import Contact from '@/components/sections/Contact';
import FAQ from '@/components/sections/FAQ';

export default function HomePage() {
  return (
    <main style={{ overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <FeaturedProperties />   {/* Featured Properties */}
      <Stats />                {/* About / Who We Are */}
      <WhyChooseUs />          {/* Why Aurora Estates marquee */}
      <Amenities />            {/* Our Services */}
      <Testimonials />         {/* Latest Projects */}
      <Agents />               {/* Investment Opportunities */}
      <VideoShowcase />        {/* Our Process */}
      <Contact />              {/* Contact */}
      <FAQ />                  {/* Newsletter */}
      <Footer />
    </main>
  );
}
