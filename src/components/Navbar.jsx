import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Heart, Home, LogIn, UserPlus, Search, User } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggedIn] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl hover:text-red-100 transition">
            <Heart className="w-6 h-6" fill="currentColor" />
            <span>HealthCare</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="flex items-center gap-1 hover:text-red-100 transition">
              <Home className="w-4 h-4" />
              الرئيسية
            </Link>
            <Link to="/services" className="flex items-center gap-1 hover:text-red-100 transition">
              <Search className="w-4 h-4" />
              الخدمات
            </Link>

            {isLoggedIn ? (
              <>
                <Link to="/profile" className="flex items-center gap-1 hover:text-red-100 transition">
                  <User className="w-4 h-4" />
                  ملفي الشخصي
                </Link>
                <button className="bg-red-800 px-4 py-2 rounded-lg hover:bg-red-900 transition">
                  تسجيل الخروج
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="flex items-center gap-1 hover:text-red-100 transition">
                  <LogIn className="w-4 h-4" />
                  دخول
                </Link>
                <Link to="/register" className="bg-red-800 px-4 py-2 rounded-lg hover:bg-red-900 transition flex items-center gap-1">
                  <UserPlus className="w-4 h-4" />
                  تسجيل
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block px-4 py-2 hover:bg-red-500 rounded transition">
              الرئيسية
            </Link>
            <Link to="/services" className="block px-4 py-2 hover:bg-red-500 rounded transition">
              الخدمات
            </Link>
            {isLoggedIn ? (
              <>
                <Link to="/profile" className="block px-4 py-2 hover:bg-red-500 rounded transition">
                  ملفي الشخصي
                </Link>
                <button className="w-full text-right px-4 py-2 hover:bg-red-500 rounded transition">
                  تسجيل الخروج
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="block px-4 py-2 hover:bg-red-500 rounded transition">
                  دخول
                </Link>
                <Link to="/register" className="block px-4 py-2 hover:bg-red-500 rounded transition">
                  تسجيل
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
