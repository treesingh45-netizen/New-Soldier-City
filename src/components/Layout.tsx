import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Calculator, Mail, Building2 } from 'lucide-react';

const LogoMark = ({ className = "w-10 h-10" }) => (
  <div className={`relative flex items-center justify-center bg-olive ${className} rounded-tl-xl rounded-br-xl shadow-md border border-gold`}>
    <Building2 className="text-gold-light w-[60%] h-[60%]" strokeWidth={1.5} />
  </div>
);
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Payment Plan', path: '/payment-plan' },
    { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-offwhite text-charcoal selection:bg-gold selection:text-white relative">
      {/* Top Banner */}
      <div className="hidden sm:block bg-olive-dark text-white text-xs sm:text-sm py-2 px-4 shadow-sm z-50 relative">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone size={14} className="text-gold" />
              <a href="tel:03116000019">0311-6000019</a>
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <MapPin size={14} className="text-gold" />
              <span>RJ Shopping Mall, Main Rashid Minhas Rd, Karachi</span>
            </span>
          </div>
          <div className="hidden md:block text-gold-light font-medium">
            Booking Open - 55% Cash Discount!
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="bg-white sticky top-0 z-40 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo area */}
            <Link to="/" className="flex items-center gap-3 group">
              <LogoMark className="w-12 h-12 group-hover:scale-105 transition-transform duration-300" />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl tracking-tight leading-none text-olive">New Soldier City</span>
                <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Invest in Future</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8 items-center">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-200 hover:text-gold ${
                    location.pathname === link.path ? 'text-olive border-b-2 border-gold pb-1' : 'text-charcoal'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/payment-plan"
                className="ml-4 bg-olive text-white px-6 py-2.5 text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-olive-dark transition-colors flex items-center gap-2 group"
              >
                <Calculator size={16} className="text-gold group-hover:text-white transition-colors" />
                Calculator
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-olive hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col items-center border-t border-gray-100">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-center w-full py-3 text-lg font-serif font-semibold transition-colors ${
                    location.pathname === link.path ? 'text-gold' : 'text-charcoal'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 flex flex-col w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-olive-dark py-16 text-offwhite border-t border-olive">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <LogoMark className="w-14 h-14" />
                <span className="font-serif font-bold text-xl text-white">New Soldier City</span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mb-6 font-medium">
                Your Dream Home, Built on Honor. Affordable plot investments in the heart of Karachi with flexible installment plans.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-gold font-bold font-serif mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-sm text-gray-300 font-medium">
                <li><Link to="/about" className="hover:text-white transition-colors">About the Project</Link></li>
                <li><Link to="/payment-plan" className="hover:text-white transition-colors">Payment Plan & Pricing</Link></li>
                <li><Link to="/gallery" className="hover:text-white transition-colors">Site Details</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Contact Details */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-gold font-bold font-serif mb-6 text-lg">Get in Touch</h4>
              <p className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin className="text-gold shrink-0 mt-1" size={18} />
                <span className="font-medium text-white">Office Address:</span>
                3rd Floor, Suite 51, RJ Shopping Mall, Main Rashid Minhas Rd, next to Millennium Shopping Mall, Gulistan-e-Johar, Karachi
              </p>
              <p className="flex items-center gap-3 text-sm text-gray-300">
                <Phone className="text-gold shrink-0" size={18} />
                <span className="font-medium text-white">Phone:</span>
                <a href="tel:03116000019" className="hover:text-gold transition">0311-6000019</a>
              </p>
              <p className="flex items-center gap-3 text-sm text-gray-300">
                <Mail className="text-gold shrink-0" size={18} />
                <span className="font-medium text-white">Email:</span>
                <a href="mailto:info@newsoldiercity.com" className="hover:text-gold transition">info@newsoldiercity.com</a>
              </p>
              <p className="text-sm text-gray-400 mt-4 italic font-medium">
                Hours: Mon–Thu & Sat–Sun: 11 AM–8 PM | Friday: Closed
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-gray-400">
            <p>&copy; {new Date().getFullYear()} New Soldier City. All rights reserved.</p>
            <p>Designed for Real Estate Marketing.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/923116000019"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#1ebd5a] transition-all hover:-translate-y-1 z-50 flex items-center justify-center border-4 border-white/20"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.056 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
      </a>
    </div>
  );
}
