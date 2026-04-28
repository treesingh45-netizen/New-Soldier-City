import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { FileText, Phone, ArrowRight, ShieldCheck, Banknote, Map as MapIcon, Star } from 'lucide-react';
import { paymentPlans } from '../data/pricing';

export default function Home() {
  const formatPKR = (num: number) => `Rs. ${num.toLocaleString('en-PK')}`;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="New Soldier City Development" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-charcoal/70 bg-blend-multiply" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col items-center sm:items-start w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-olive/80 backdrop-blur-sm border border-gold/30 rounded-sm mb-6 text-gold-light font-medium tracking-wide uppercase text-xs">
              <ShieldCheck size={16} /> NOC Approved Project
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 uppercase leading-tight">
              Invest in the <br />
              <span className="text-gold italic normal-case font-serif tracking-normal">Future</span>
            </h1>
            <p className="text-lg md:text-2xl text-offwhite mb-10 max-w-2xl font-light leading-relaxed">
              New Soldier City — Your Dream Home, Built on Honor. Secure your family's future in Karachi's most promising development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/payment-plan"
                className="bg-gold text-charcoal px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors text-center shadow-lg flex items-center justify-center gap-2 group rounded-sm"
              >
                Book a Plot <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/payment-plan"
                className="bg-olive text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-olive-dark transition-colors text-center border border-olive-dark flex items-center justify-center gap-2 rounded-sm"
              >
                <FileText size={16} /> Payment Plan
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border border-white text-white px-8 py-4 mb-8 sm:mb-0 font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-colors text-center flex items-center justify-center gap-2 rounded-sm"
              >
                <Phone size={16} /> Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Animated Stats Bar */}
      <section className="bg-olive text-white py-12 border-b-4 border-gold z-20 relative -mt-8 mx-4 sm:mx-8 lg:mx-auto max-w-6xl shadow-2xl rounded-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          <div className="px-4 py-4 md:py-0">
            <motion.div initial={{ scale: 0.5, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}>
              <div className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">1000+</div>
              <div className="text-sm font-medium uppercase tracking-widest text-white/80">Plots Available</div>
            </motion.div>
          </div>
          <div className="px-4 py-4 md:py-0">
            <motion.div initial={{ scale: 0.5, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">5000+</div>
              <div className="text-sm font-medium uppercase tracking-widest text-white/80">Happy Investors</div>
            </motion.div>
          </div>
          <div className="px-4 py-4 md:py-0">
            <motion.div initial={{ scale: 0.5, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <div className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">15+</div>
              <div className="text-sm font-medium uppercase tracking-widest text-white/80">Years of Trust</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-olive mb-4 font-serif">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Experience unmatched living standards with world-class amenities and complete security.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 border-t-4 border-gold shadow-sm text-center group rounded-sm">
              <div className="w-16 h-16 bg-offwhite group-hover:bg-gold transition-colors flex items-center justify-center mx-auto mb-6 rounded-full text-olive group-hover:text-white">
                <Banknote size={32} />
              </div>
              <h3 className="text-xl font-bold font-serif mb-3 text-olive-dark">Affordable Prices</h3>
              <p className="text-gray-600 leading-relaxed">Unbeatable market rates with an exclusive 55% cash discount for early investors.</p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 border-t-4 border-gold shadow-sm text-center group rounded-sm">
              <div className="w-16 h-16 bg-offwhite group-hover:bg-gold transition-colors flex items-center justify-center mx-auto mb-6 rounded-full text-olive group-hover:text-white">
                <FileText size={32} />
              </div>
              <h3 className="text-xl font-bold font-serif mb-3 text-olive-dark">Flexible Installments</h3>
              <p className="text-gray-600 leading-relaxed">Easy 59-month payment plans designed to fit the middle-income family budget.</p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 border-t-4 border-gold shadow-sm text-center group rounded-sm">
              <div className="w-16 h-16 bg-offwhite group-hover:bg-gold transition-colors flex items-center justify-center mx-auto mb-6 rounded-full text-olive group-hover:text-white">
                <MapIcon size={32} />
              </div>
              <h3 className="text-xl font-bold font-serif mb-3 text-olive-dark">Prime Location</h3>
              <p className="text-gray-600 leading-relaxed">Strategically situated in Karachi, offering rapid access to major highways and city centers.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Payment Plan Summary */}
      <section className="py-24 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <div className="text-gold font-bold uppercase tracking-widest text-sm mb-2">Investment Plans</div>
              <h2 className="text-3xl md:text-5xl font-bold text-olive font-serif">Featured Pricing</h2>
            </div>
            <Link to="/payment-plan" className="text-olive hover:text-gold font-bold flex items-center gap-2 transition-colors">
              View Detailed Plan <ArrowRight size={16} />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-olive text-white">
                  <th className="p-4 font-bold font-serif text-lg rounded-tl-sm">Plot Size</th>
                  <th className="p-4 font-bold font-serif text-lg">Cash Price (55% Off)</th>
                  <th className="p-4 font-bold font-serif text-lg hidden md:table-cell">Old Cash Price</th>
                  <th className="p-4 font-bold font-serif text-lg rounded-tr-sm">Monthly Installment</th>
                </tr>
              </thead>
              <tbody>
                {paymentPlans.slice(0, 4).map((plan, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-bold text-olive-dark">{plan.size}</td>
                    <td className="p-4 text-gold font-bold text-lg">{formatPKR(plan.newCash)}</td>
                    <td className="p-4 text-gray-400 line-through hidden md:table-cell">{formatPKR(plan.oldCash)}</td>
                    <td className="p-4 font-medium text-gray-700">{formatPKR(plan.monthly)} × 59</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-olive text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-gold mb-16">Trusted by Families</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
               { name: "Ahmed Raza", role: "Investor", text: "The 55% discount was simply too good to pass up. The process was transparent, and the location is highly promising." },
               { name: "Fatima Ali", role: "Future Resident", text: "We found the perfect sized plot for our family. The 59-month installment plan made it incredibly affordable for us." },
               { name: "Usman Tariq", role: "Overseas Pakistani", text: "Investing securely from abroad was my concern, but New Soldier City's responsive team gave me complete peace of mind." }
            ].map((test, i) => (
              <div key={i} className="bg-olive-dark p-8 rounded-sm text-left border border-white/10 relative">
                <div className="flex gap-1 mb-4 text-gold">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <p className="text-offwhite mb-6 italic leading-relaxed">"{test.text}"</p>
                <div>
                  <div className="font-bold font-serif text-lg text-white">{test.name}</div>
                  <div className="text-sm text-gold uppercase tracking-wider">{test.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Office Map Section */}
      <section className="py-24 px-4 bg-white hidden sm:block">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-olive mb-4 font-serif">Visit Our Office</h2>
            <p className="text-gray-600">Drop by for a cup of tea and let's discuss your future investment.</p>
          </div>
          <div className="aspect-video w-full max-h-[500px] border-4 border-gray-100 rounded-sm overflow-hidden shadow-sm">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14476.3551528628!2d67.10651111738279!3d24.894982600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ecc12879001%3A0xe7dc2be5dc9ec11c!2sRJ%20Shopping%20Mall!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
