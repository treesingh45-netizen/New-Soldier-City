import React from 'react';
import { Map, MapPin, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const images = [
    { src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Project Site View" },
    { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Model House Design" },
    { src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Future Commercial Zone" },
    { src: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Development Progress" },
    { src: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Street View Concept" },
    { src: "https://images.unsplash.com/photo-1584738766473-61c083514bf4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Park & Recreation Area" },
  ];

  return (
    <div className="w-full bg-offwhite min-h-screen pb-20">
      <div className="pt-16 pb-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-olive mb-4">Project Gallery & Map</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Explore the future of New Soldier City. Review our master plan and see the development vision come to life.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Master Plan Section */}
        <section className="mb-20">
          <div className="bg-white p-2 sm:p-4 rounded-sm shadow-md border border-gray-200">
            <div className="bg-charcoal text-white p-4 flex justify-between items-center mb-0 rounded-t-sm">
              <div className="flex items-center gap-3">
                <Map size={24} className="text-gold" />
                <h2 className="text-xl font-bold font-serif tracking-wide">Master Plan</h2>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-sm text-gray-300">
                <ZoomIn size={16} /> Hover to interact
              </div>
            </div>
            {/* Master Plan Placeholder */}
            <div className="relative aspect-[16/9] bg-olive-dark w-full overflow-hidden group">
              <div className="absolute inset-0 bg-[#2d4a1e] opacity-80 z-10 grid place-items-center transition-opacity duration-300 group-hover:opacity-0 mix-blend-multiply">
                <div className="text-center">
                  <MapPin size={48} className="text-gold mx-auto mb-4" />
                  <p className="text-white font-bold tracking-widest uppercase">Master Plan Layout</p>
                </div>
              </div>
              {/* Uses a blueprint/map style placeholder */}
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="Master Plan Blueprint Template" 
                className="w-full h-full object-cover grayscale opacity-70 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6 bg-white border-t border-gray-100 flex flex-wrap gap-4 items-center justify-center">
               <span className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider before:content-[''] before:block before:w-3 before:h-3 before:bg-olive before:rounded-sm">Residential</span>
               <span className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider before:content-[''] before:block before:w-3 before:h-3 before:bg-gold before:rounded-sm">Commercial</span>
               <span className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider before:content-[''] before:block before:w-3 before:h-3 before:bg-green-600 before:rounded-sm">Parks/Mosque</span>
            </div>
          </div>
        </section>

        {/* Development Gallery */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-olive mb-8 text-center">Development Showcase</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <div key={index} className="group relative overflow-hidden rounded-sm bg-charcoal aspect-[4/3] shadow-sm cursor-pointer">
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-charcoal/90 to-transparent pt-12 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-white font-bold tracking-wide">{img.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
