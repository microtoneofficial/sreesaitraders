import { Link } from 'react-router-dom'
import Logo1 from '../../assets/Logo1.png'

export default function Footer() {
  return (
    <footer className="bg-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand / Logo */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src={Logo1}
                alt="Sree Sai Traders Logo"
                style={{ height: '90px', width: 'auto', objectFit: 'contain' }}
              />
            </div>
            <p className="text-red-200 text-sm leading-relaxed">
              Your trusted source for fresh, quality chicken and mutton.
              Wholesale and retail available. Serving Chennai with the
              finest cuts since years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4" style={{ fontFamily: 'Playfair Display,serif' }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                ['/', 'Home'],
                ['/about', 'About Us'],
                ['/products', 'Our Products'],
                ['/contact', 'Contact'],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-red-200 hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-bold text-lg mb-4" style={{ fontFamily: 'Playfair Display,serif' }}>
              Contact Us
            </h4>
            <div className="space-y-3 text-sm text-red-200">

              {/* Address */}
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>6/179 Jaya Nagar Sithalapakkam Opposite to Indian Petrol Bunk Chennai-131</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <a href="tel:9894868478" className="hover:text-white transition-colors">
                  +91 9894868478
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.106.549 4.081 1.507 5.793L.057 23.75l6.064-1.446C7.827 23.462 9.867 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.893 0-3.671-.523-5.192-1.429l-.373-.22-3.596.858.899-3.516-.243-.388C2.524 15.67 2 13.896 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                <a
                  href="https://wa.me/919894868478"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-red-800 mt-10 pt-6 text-center space-y-2">
          <p className="text-red-400 text-sm">
            © {new Date().getFullYear()} Sree Sai Traders (SST). All rights reserved. | Fresh Quality Guaranteed
          </p>
          <p className="text-red-500 text-xs">
            Designed and Developed by{' '}
            <a
              href="https://webynox.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:text-red-200 transition-colors underline underline-offset-2"
            >
              WebynoX
            </a>
          </p>
        </div>

      </div>
    </footer>
  )
}
