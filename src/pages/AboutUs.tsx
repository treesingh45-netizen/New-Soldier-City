import React from 'react';
import { Shield, Target, Eye, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutUs() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-olive-dark text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-charcoal/40 bg-blend-multiply z-10" />
        <img 
          src="https://images.unsplash.com/photo-1541888086225-ee9ebc44f0ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="About Us Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="max-w-7xl mx-auto relative z-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">About New Soldier City</h1>
          <p className="text-lg md:text-xl text-offwhite max-w-2xl mx-auto font-light leading-relaxed">
            Leading real estate development with integrity, military precision, and a commitment to delivering affordable luxury for the people of Karachi.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white p-10 border-l-4 border-gold shadow-sm">
            <Target className="text-gold mb-6" size={48} />
            <h2 className="text-3xl font-serif font-bold text-olive-dark mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To provide secure, affordable, and high-quality residential plots to middle-income families, enabling them to build their dream homes without financial strain. We aim to revolutionize Karachi's real estate market through transparency and trust.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white p-10 border-l-4 border-olive shadow-sm">
            <Eye className="text-olive mb-6" size={48} />
            <h2 className="text-3xl font-serif font-bold text-olive-dark mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To become Pakistan's most trusted real estate developer, known for delivering self-sustaining, modern communities that honor our promise of quality, security, and timely delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Project Background */}
      <section className="py-20 px-4 bg-offwhite">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-olive mb-6">The Legacy of Trust</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              New Soldier City was born from the idea that every hard-working family deserves a piece of land to call their own. Our project is designed with military principles of discipline, security, and honor. 
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Located in a prime zone of Karachi, the society will feature state-of-the-art infrastructure, wide carpeted roads, underground electricity, dedicated commercial zones, and international standard security.
            </p>
            
            <ul className="space-y-4">
              {[
                "100% Secure Land & Clear Titles",
                "Wide Network of 40ft, 80ft and 120ft Roads",
                "Grand Jamia Mosque & Sector Mosques",
                "Parks, Hospitals & Educational Institutes"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-olive-dark font-medium pb-2 border-b border-gray-200">
                  <Shield size={20} className="text-gold shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gold translate-x-4 translate-y-4 rounded-sm" />
            <img 
              src="https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Construction Site" 
              className="relative z-10 w-full rounded-sm object-cover aspect-[4/3] shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Leadership/Team Placeholder */}
      <section className="py-20 px-4 bg-white text-center">
        <div className="max-w-7xl mx-auto">
          <Users className="mx-auto text-gold mb-4" size={48} />
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-olive mb-6">Leadership & Affiliations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Backed by a team of seasoned real estate professionals, architects, and legal advisors ensuring that your investment is completely secure and the development meets all national standards. We hold strict affiliations with relevant regulatory authorities.
          </p>
        </div>
      </section>
    </div>
  );
}
