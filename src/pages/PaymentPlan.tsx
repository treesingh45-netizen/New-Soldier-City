import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Download, Phone, CheckCircle } from 'lucide-react';
import { paymentPlans } from '../data/pricing';

export default function PaymentPlan() {
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const selectedPlan = paymentPlans[selectedSizeIndex];

  const formatPKR = (num: number) => `Rs. ${num.toLocaleString('en-PK')}`;

  const handleDownload = () => {
    // In a real app, this would point to a PDF URL
    alert("Payment Plan PDF download initiated.");
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-olive-dark text-white py-16 px-4 border-b-4 border-gold relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-block bg-gold text-charcoal px-4 py-1 font-bold uppercase tracking-widest text-sm rounded-sm mb-4">
            Limited Time Offer
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">Payment Plan</h1>
          <p className="text-lg md:text-xl text-offwhite max-w-2xl mx-auto font-light">
            Secure your asset today with our highly flexible 59-month installment plans. 
            Enjoy a massive <span className="font-bold text-gold">55% Cash Discount</span>.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Table */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-serif font-bold text-olive">Full Pricing Schedule</h2>
            <button 
              onClick={handleDownload}
              className="hidden sm:flex items-center gap-2 text-olive font-bold hover:text-gold transition-colors"
            >
              <Download size={20} />
              <span>Download PDF</span>
            </button>
          </div>

          <div className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden text-sm sm:text-base">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-olive text-white">
                    <th className="p-4 font-bold font-serif text-lg">Plot Size</th>
                    <th className="p-4 font-bold font-serif text-lg hidden sm:table-cell">Old Cash Price</th>
                    <th className="p-4 font-bold font-serif text-lg text-gold">New Cash Price</th>
                    <th className="p-4 font-bold font-serif text-lg">Booking & Monthly</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentPlans.map((plan, index) => (
                    <tr 
                      key={index} 
                      onClick={() => setSelectedSizeIndex(index)}
                      className={`border-b border-gray-100 cursor-pointer transition-colors ${
                        selectedSizeIndex === index ? 'bg-gold/10 border-l-4 border-l-gold !pl-3' : 'hover:bg-gray-50'
                      }`}
                    >
                      <td className="p-4 font-bold text-charcoal">{plan.size}</td>
                      <td className="p-4 text-gray-400 line-through hidden sm:table-cell">{formatPKR(plan.oldCash)}</td>
                      <td className="p-4 font-bold text-olive">{formatPKR(plan.newCash)}</td>
                      <td className="p-4 text-gray-700">
                        {formatPKR(plan.booking)} + <br className="sm:hidden"/> 
                        {formatPKR(plan.monthly)} <span className="text-gray-400">× 59</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <button 
            onClick={handleDownload}
            className="mt-6 sm:hidden w-full flex justify-center items-center gap-2 bg-olive text-white py-3 rounded-sm font-bold hover:bg-olive-dark transition-colors"
          >
            <Download size={20} />
            <span>Download Pricing PDF</span>
          </button>
        </div>

        {/* Calculator Widget */}
        <div className="lg:col-span-1">
          <div className="sticky top-28">
            <div className="bg-charcoal text-white rounded-sm shadow-xl border-t-4 border-gold overflow-hidden">
              <div className="p-6 border-b border-gray-700 flex items-center gap-3">
                <Calculator className="text-gold" size={24} />
                <h3 className="font-serif font-bold text-xl">Investment Calculator</h3>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Select Plot Size</label>
                  <select 
                    className="w-full bg-charcoal border border-gray-600 rounded-sm text-white font-bold text-lg p-3 focus:outline-none focus:border-gold transition-colors"
                    value={selectedSizeIndex}
                    onChange={(e) => setSelectedSizeIndex(Number(e.target.value))}
                  >
                    {paymentPlans.map((plan, index) => (
                      <option key={index} value={index}>{plan.size}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gray-400 text-sm uppercase tracking-wider">Old Price</span>
                    <span className="line-through text-gray-500 font-medium">{formatPKR(selectedPlan.oldCash)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gold text-sm font-bold uppercase tracking-wider">Cash Price <br/><span className="text-xs text-gray-400">(55% Off)</span></span>
                    <span className="text-xl font-bold text-white">{formatPKR(selectedPlan.newCash)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gray-300 text-sm uppercase tracking-wider">Booking Amount</span>
                    <span className="text-lg font-bold text-white">{formatPKR(selectedPlan.booking)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 bg-olive/20 -mx-6 px-6 relative overflow-hidden">
                    <span className="relative z-10 text-white font-bold uppercase tracking-wider">Monthly (59x)</span>
                    <span className="relative z-10 text-2xl font-serif font-bold text-gold">{formatPKR(selectedPlan.monthly)}</span>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <a href="https://wa.me/923116000019" target="_blank" rel="noreferrer" className="w-full block text-center bg-gold text-charcoal font-bold p-4 uppercase tracking-widest text-sm hover:bg-white transition-colors rounded-sm">
                    Book Now with Just {formatPKR(selectedPlan.booking)}
                  </a>
                  <p className="text-center text-xs text-gray-500 italic">No hidden charges. Secure your investment today.</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="mt-6 border border-gray-200 bg-white p-6 rounded-sm flex items-start gap-4 shadow-sm">
              <Phone className="text-olive shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-olive-dark mb-1">Need help choosing?</h4>
                <p className="text-sm text-gray-600 mb-3">Our investment advisors are ready to answer your questions.</p>
                <a href="tel:03116000019" className="text-gold font-bold hover:underline">Call 0311-6000019</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Steps to Invest */}
      <section className="bg-offwhite py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-serif font-bold text-olive mb-12">How to Secure Your Plot</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Select Size", desc: "Choose the plot size that fits your family's needs and budget." },
              { title: "Contact Us", desc: "Reach out via WhatsApp or call to check availability." },
              { title: "Pay Booking", desc: "Pay just the initial booking amount to lock your 55% discount." },
              { title: "Easy Installments", desc: "Pay the remaining amount in 59 easy monthly installments." }
            ].map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="w-16 h-16 bg-olive text-gold flex items-center justify-center rounded-full mx-auto mb-4 border-4 border-white shadow-sm font-serif font-bold text-2xl relative z-10">
                  {i + 1}
                </div>
                {i !== 3 && <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 -z-0"></div>}
                <h3 className="font-bold text-lg text-charcoal mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
