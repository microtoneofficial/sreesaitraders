import { useState } from 'react'

const PRODUCTS = ['General Enquiry', 'Chicken Leg', 'Chicken Thigh', 'Chicken Breast', 'Chicken Drumstick', 'Chicken Wings', 'Chicken Liver', 'Mutton', 'Mutton Head', 'Mutton Liver', 'Mutton Legs', 'Mutton Lungs', 'Country Chicken', 'Eggs', 'Kadai Small Chicken']

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', product: 'General Enquiry', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      const controller = new AbortController()

      const timeoutId = setTimeout(() => {
        controller.abort()
      }, 30000)

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/enquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)


      const text = await res.text()

      let data = {}

      try {
        data = text ? JSON.parse(text) : {}
      } catch {
        throw new Error('Invalid server response')
      }

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setSuccess(true)

      setForm({
        name: '',
        phone: '',
        email: '',
        product: 'General Enquiry',
        message: '',
      })

    } catch (err) {
      setError(
        err.name === 'AbortError'
          ? 'Server is taking too long to respond. Please try again.'
          : err.message
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-700 to-red-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: 'Playfair Display,serif' }}>Contact Us</h1>
          <p className="text-red-200 text-lg max-w-xl mx-auto">Have a question or want to place an order? We'd love to hear from you!</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="section-title mb-2">Get In Touch</h2>
              <div className="w-16 h-1 bg-red-700 rounded mb-8" />
              <div className="space-y-6">
                {[
                  { icon: '📞', title: 'Phone', content: '+91 9894868478', href: 'tel:9894868478' },
                  { icon: '💬', title: 'WhatsApp', content: 'Chat with us on WhatsApp', href: 'https://wa.me/919894868478?text=Hello SST! I have an enquiry.' },
                  { icon: '📍', title: 'Location', content: '6/179 Jaya Nagar Sithalapakkam Opposite to Indian Petrol Bunk Chennai-131', href: null },
                  { icon: '🕐', title: 'Business Hours', content: 'Monday – Sunday: 6:00 AM – 9:30 PM', href: null },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-red-50 rounded-xl">
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <div className="font-bold text-gray-800 mb-1">{item.title}</div>
                      {item.href
                        ? <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-red-700 hover:underline font-medium text-sm">{item.content}</a>
                        : <div className="text-gray-600 text-sm">{item.content}</div>
                      }
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-8 p-6 bg-gradient-to-br from-red-700 to-red-900 rounded-2xl text-white">
                <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'Playfair Display,serif' }}>Quick Connect</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="tel:9894868478" className="flex-1 bg-white text-red-700 font-bold py-3 px-4 rounded-lg text-center text-sm hover:bg-red-50 transition-colors flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                    Call Now
                  </a>
                  <a href="https://wa.me/919894868478?text=Hello SST! I have an enquiry." target="_blank" rel="noopener noreferrer" className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg text-center text-sm transition-colors flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.106.549 4.081 1.507 5.793L.057 23.75l6.064-1.446C7.827 23.462 9.867 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.893 0-3.671-.523-5.192-1.429l-.373-.22-3.596.858.899-3.516-.243-.388C2.524 15.67 2 13.896 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" /></svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div>
              <div className="bg-white border border-gray-100 rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display,serif' }}>Send an Enquiry</h2>
                <p className="text-gray-500 text-sm mb-6">Fill the form and we'll get back to you shortly.</p>

                {success && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" /></svg>
                    <div>
                      <div className="font-semibold text-green-800">Enquiry Submitted!</div>
                      <div className="text-green-600 text-sm">We'll contact you within 24 hours. Thank you!</div>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-red-700 text-sm">{error}</div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" className="input-field" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Phone *</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        maxLength={10}
                        pattern="[0-9]{10}"
                        placeholder="10-digit mobile"
                        className="input-field"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com (optional)" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Product Interest</label>
                    <select name="product" value={form.product} onChange={handleChange} className="input-field bg-white">
                      {PRODUCTS.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={4} placeholder="Tell us about your requirement, quantity, etc." className="input-field resize-none" />
                  </div>
                  <button type="submit" disabled={loading} className="btn-primary w-full flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                        Send Enquiry
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
