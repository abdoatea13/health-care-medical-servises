import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center">
              <span className="text-white font-black text-lg">🏥</span>
            </div>
            <div>
              <h1 className="text-lg font-black text-teal-700">Health Care</h1>
              <p className="text-xs text-slate-500">خدمات طبية</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-slate-700 hover:text-teal-700 transition">
              الرئيسية
            </a>
            <a href="#services" className="text-slate-700 hover:text-teal-700 transition">
              الخدمات
            </a>
            <a href="#nurses" className="text-slate-700 hover:text-teal-700 transition">
              الممرضون
            </a>
            <a href="#contact" className="text-slate-700 hover:text-teal-700 transition">
              تواصل معنا
            </a>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/201007729848"
              className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-green-600 transition"
            >
              واتساب
            </a>
            <button className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-bold hover:bg-slate-200 transition">
              EN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="/" className="block text-slate-700 hover:text-teal-700 py-2">
              الرئيسية
            </a>
            <a href="#services" className="block text-slate-700 hover:text-teal-700 py-2">
              الخدمات
            </a>
            <a href="#nurses" className="block text-slate-700 hover:text-teal-700 py-2">
              الممرضون
            </a>
            <a href="#contact" className="block text-slate-700 hover:text-teal-700 py-2">
              تواصل معنا
            </a>
            <div className="flex gap-2 pt-2">
              <a
                href="https://wa.me/201007729848"
                className="flex-1 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold text-center"
              >
                واتساب
              </a>
              <button className="flex-1 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-bold">
                EN
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}