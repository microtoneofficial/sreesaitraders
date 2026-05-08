import { Link } from 'react-router-dom'
import Logo1 from '../../assets/Logo1.png'

const features = [
  { icon: '🐔', title: 'Fresh Chicken', desc: 'Premium quality chicken cuts, sourced fresh daily for the best taste and nutrition.' },
  { icon: '🐑', title: 'Quality Mutton', desc: 'Tender mutton and lamb cuts, hand-selected for superior flavor and freshness.' },
  { icon: '🏪', title: 'Wholesale & Retail', desc: 'We serve both individual customers and bulk wholesale buyers at competitive prices.' },
  { icon: '🚚', title: 'Reliable Supply', desc: 'Consistent supply chain ensuring you always get fresh meat on time, every time.' },
]

const stats = [
  { value: '40+', label: 'Years of Service' },
  { value: '1500+', label: 'Happy Customers' },
  { value: '14+', label: 'Product Varieties' },
  { value: '100%', label: 'Fresh Quality' },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden bg-white"
        style={{ paddingTop: '84px' }}
      >
        <div className="absolute inset-0 hero-pattern pointer-events-none" />

        {/* Red diagonal background - right side */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full hidden lg:block bg-red-700"
          style={{ clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center" style={{ minHeight: 'calc(100vh - 84px)' }}>

            {/* Left Content */}
            <div className="py-10 lg:py-0">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in-up">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                Fresh Meat Daily
              </div>

              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6 animate-fade-in-up delay-100"
                style={{ fontFamily: 'Playfair Display,serif' }}
              >
                Sree Sai <span className="text-red-700">Traders</span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg animate-fade-in-up delay-200">
                Chennai's trusted wholesale and retail destination for premium fresh chicken and mutton.
                Quality guaranteed, prices you'll love.
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
                <Link to="/products" className="btn-primary flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  View Products
                </Link>
                <Link to="/contact" className="btn-outline flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Get Quote
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 mt-10 animate-fade-in-up delay-400">
                {stats.map(s => (
                  <div key={s.label} className="text-center">
                    <div
                      className="text-2xl font-black text-red-700"
                      style={{ fontFamily: 'Playfair Display,serif' }}
                    >
                      {s.value}
                    </div>
                    <div className="text-xs text-gray-500 font-medium mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Logo Image */}
            <div className="hidden lg:flex items-center justify-center h-full">
              <img
                src={Logo1}
                alt="Sree Sai Traders"
                style={{
                  height: '460px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.25))',
                }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">Why Choose SST?</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We are committed to delivering the freshest meat products with excellent customer service.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="card p-6 text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="text-5xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display,serif' }}>
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Highlight */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
            <div>
              <h2 className="section-title">Our Products</h2>
              <p className="text-gray-500">Freshly sourced, expertly cut, delivered to you.</p>
            </div>
            <Link to="/products" className="btn-outline whitespace-nowrap">View All →</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { emoji: '🍗', name: 'Chicken Leg', cat: 'Chicken' },
              { emoji: '🫀', name: 'Chicken Breast', cat: 'Chicken' },
              { emoji: '🦴', name: 'Chicken Wings', cat: 'Chicken' },
              { emoji: '🐑', name: 'Mutton', cat: 'Mutton' },
              { emoji: '🫁', name: 'Mutton Liver', cat: 'Mutton' },
              { emoji: '🥚', name: 'Eggs', cat: 'Eggs' },
              { emoji: '🐓', name: 'Country Chicken', cat: 'Chicken' },
              { emoji: '🍳', name: 'Kadai Small Chicken', cat: 'Special' },
            ].map((p, i) => (
              <div key={i} className="card p-4 text-center group cursor-pointer">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{p.emoji}</div>
                <div className="font-semibold text-gray-800 text-sm">{p.name}</div>
                <div className="text-xs text-red-600 font-medium mt-1">{p.cat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-red-700 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2
            className="text-3xl md:text-4xl font-black mb-4"
            style={{ fontFamily: 'Playfair Display,serif' }}
          >
            Ready to Order?
          </h2>
          <p className="text-red-200 text-lg mb-8 max-w-xl mx-auto">
            Contact us today for wholesale pricing, bulk orders, or any product enquiry. We're here to serve you!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-red-700 hover:bg-red-50 font-bold px-8 py-4 rounded-lg transition-colors shadow-lg"
            >
              Send Enquiry
            </Link>
            <a
              href="https://wa.me/919894868478?text=Hello! I am interested in your products."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-lg transition-colors shadow-lg flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.106.549 4.081 1.507 5.793L.057 23.75l6.064-1.446C7.827 23.462 9.867 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.893 0-3.671-.523-5.192-1.429l-.373-.22-3.596.858.899-3.516-.243-.388C2.524 15.67 2 13.896 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
