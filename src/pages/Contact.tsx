import React, { useState } from 'react';
import { Phone, MapPin, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import { paymentPlans } from '../data/pricing';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    plotSize: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormData({ name: '', phone: '', email: '', plotSize: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-olive py-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-4">Contact Us</h1>
        <p className="text-gold-light max-w-2xl mx-auto">Get in touch with our investment advisors today to secure your plot before the 55% discount expires.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information & Map */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-olive-dark mb-8">Visit Our Office</h2>
            
            <div className="space-y-6 mb-10">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center rounded-sm shrink-0">
                  <MapPin className="text-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-charcoal mb-1">Head Office</h3>
                  <p className="text-gray-600 leading-relaxed">
                    3rd Floor, Suite 51, RJ Shopping Mall<br />
                    Main Rashid Minhas Rd, next to Millennium Shopping Mall<br />
                    Gulistan-e-Johar, Karachi, 75300, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-olive/10 flex items-center justify-center rounded-sm shrink-0">
                  <Phone className="text-olive" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-charcoal mb-1">Direct Line & WhatsApp</h3>
                  <p className="text-gray-600 mb-1">
                    <a href="tel:03116000019" className="hover:text-gold transition-colors font-medium">0311-6000019</a>
                  </p>
                  <a href="https://wa.me/923116000019" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm bg-green-500 text-white px-3 py-1 rounded-sm mt-1 hover:bg-green-600 transition-colors">
                    <MessageSquare size={14} /> Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-sm shrink-0">
                  <Clock className="text-gray-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-charcoal mb-1">Business Hours</h3>
                  <p className="text-gray-600 font-medium">Monday – Thursday: <span className="font-normal text-gray-500">11:00 AM – 8:00 PM</span></p>
                  <p className="text-gray-600 font-medium">Saturday – Sunday: <span className="font-normal text-gray-500">11:00 AM – 8:00 PM</span></p>
                  <p className="text-red-500 font-medium mt-1">Friday: Closed</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="aspect-[4/3] w-full border border-gray-200 p-1 shadow-sm rounded-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14476.3551528628!2d67.10651111738279!3d24.894982600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ecc12879001%3A0xe7dc2be5dc9ec11c!2sRJ%20Shopping%20Mall!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Map"
              ></iframe>
            </div>
          </div>

          {/* Lead capture form */}
          <div>
            <div className="bg-white p-8 md:p-10 border border-gray-100 shadow-xl rounded-sm relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-olive to-gold rounded-t-sm" />
              
              <h2 className="text-2xl font-bold font-serif text-olive-dark mb-2">Request a Call Back</h2>
              <p className="text-gray-500 text-sm mb-8">Fill out the form below and our real estate experts will contact you shortly.</p>

              {success ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-sm text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="text-green-600" size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Message Sent!</h3>
                  <p>Thank you for your interest. We will contact you soon.</p>
                  <button 
                    onClick={() => setSuccess(false)}
                    className="mt-6 text-sm font-bold text-green-700 underline hover:text-green-800"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                    <input 
                      required
                      type="text" 
                      className="w-full border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:border-olive focus:ring-1 focus:ring-olive transition-colors"
                      placeholder="e.g. Ahmed Raza"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
                      <input 
                        required
                        type="tel" 
                        className="w-full border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:border-olive focus:ring-1 focus:ring-olive transition-colors"
                        placeholder="03XX-XXXXXXX"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:border-olive focus:ring-1 focus:ring-olive transition-colors"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Interested Plot Size</label>
                    <select 
                      className="w-full border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:border-olive focus:ring-1 focus:ring-olive transition-colors bg-white"
                      value={formData.plotSize}
                      onChange={e => setFormData({...formData, plotSize: e.target.value})}
                    >
                      <option value="">-- Choose Plot Size --</option>
                      {paymentPlans.map((plan, i) => (
                        <option key={i} value={plan.size}>{plan.size}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:border-olive focus:ring-1 focus:ring-olive transition-colors resize-none"
                      placeholder="Any specific questions or time to call?"
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-olive hover:bg-olive-dark text-white font-bold uppercase tracking-widest text-sm py-4 rounded-sm transition-colors flex justify-center items-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? 'Sending Request...' : 'Submit Inquiry'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
