export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-700 to-red-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{fontFamily:'Playfair Display,serif'}}>About Sree Sai Traders</h1>
          <p className="text-red-200 text-lg max-w-2xl mx-auto">Chennai's trusted name in fresh chicken and mutton — wholesale and retail.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <div className="w-16 h-1 bg-red-700 rounded mb-6" />
              <p className="text-gray-600 leading-relaxed mb-4">
                Sree Sai Traders (SST) was founded with a simple mission: to bring the freshest, highest-quality chicken and mutton products to the people of Chennai at fair prices.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We understand that fresh meat is at the heart of every great meal. That's why we go the extra mile to ensure every product that leaves our shop meets the highest standards of quality and freshness.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Whether you're a home cook, a restaurant owner, or a bulk buyer, SST has the products and service to meet your needs. We pride ourselves on building long-term relationships with our customers based on trust, quality, and value.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[['🐔','Chicken Specialist'],['🐑','Mutton Expert'],['🏪','Wholesale & Retail'],['✅','Quality Guaranteed']].map(([icon, label]) => (
                  <div key={label} className="flex items-center gap-3 bg-red-50 rounded-lg p-3">
                    <span className="text-2xl">{icon}</span>
                    <span className="text-sm font-semibold text-gray-700">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-red-50 rounded-3xl p-8 text-center">
                <div className="text-9xl mb-4">🏪</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{fontFamily:'Playfair Display,serif'}}>Sree Sai Traders</h3>
                <p className="text-gray-500 text-sm">Chennai, Tamil Nadu</p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[['40+','Years Experience'],['1500+','Customers Served'],['14+','Product Types'],['100%','Fresh Daily']].map(([val, lbl]) => (
                    <div key={lbl} className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="text-2xl font-black text-red-700" style={{fontFamily:'Playfair Display,serif'}}>{val}</div>
                      <div className="text-xs text-gray-500 mt-1">{lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">Our Values</h2>
            <p className="text-gray-500">The principles that guide everything we do at SST.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon:'🌟', title:'Quality First', desc:'We never compromise on the quality of our products. Every cut is inspected to ensure it meets our high standards.' },
              { icon:'🤝', title:'Customer Trust', desc:'Our customers are our family. We build lasting relationships through honesty, reliability, and excellent service.' },
              { icon:'💰', title:'Fair Pricing', desc:'We believe quality meat should be accessible to everyone. Our prices are competitive for both retail and wholesale buyers.' },
            ].map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-md text-center">
                <div className="text-5xl mb-4">{v.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" style={{fontFamily:'Playfair Display,serif'}}>{v.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">Visit Us</h2>
          <p className="text-gray-500 mb-8">Come experience the SST difference in person.</p>
          <div className="bg-red-50 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2">📍</div>
              <div className="font-semibold text-gray-800">Location</div>
              <div className="text-gray-500 text-sm">Jaya Nagar Sithalapakkam Chennai-131</div>
            </div>
            <div className="w-px h-16 bg-red-200 hidden sm:block" />
            <div className="text-center">
              <div className="text-4xl mb-2">📞</div>
              <div className="font-semibold text-gray-800">Phone</div>
              <a href="tel:9894868478" className="text-red-700 font-bold text-sm hover:underline">+91 9894868478</a>
            </div>
            <div className="w-px h-16 bg-red-200 hidden sm:block" />
            <div className="text-center">
              <div className="text-4xl mb-2">🕐</div>
              <div className="font-semibold text-gray-800">Hours</div>
              <div className="text-gray-500 text-sm">Monday–Sunday: 6:00 AM – 9:30 PM</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
