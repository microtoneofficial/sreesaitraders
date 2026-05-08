import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Products from './pages/Products.jsx'
import AdminLogin from './pages/AdminLogin.jsx'
import AdminPanel from './pages/AdminPanel.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/panel" element={
            <ProtectedRoute><AdminPanel /></ProtectedRoute>
          } />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
