import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-red-600" fill="currentColor" />
              <h3 className="font-bold text-white text-lg">HealthCare</h3>
            </div>
            <p className="text-sm leading-relaxed">
              منصة موثوقة لطلب خدمات التمريض والخدمات الطبية المنزلية بجودة عالية وأمان تام.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-600 transition">الرئيسية</a></li>
              <li><a href="#" className="hover:text-red-600 transition">الخدمات</a></li>
              <li><a href="#" className="hover:text-red-600 transition">من نحن</a></li>
              <li><a href="#" className="hover:text-red-600 transition">اتصل بنا</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">الخدمات</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-600 transition">تمريض منزلي</a></li>
              <li><a href="#" className="hover:text-red-600 transition">استشارات طبية</a></li>
              <li><a href="#" className="hover:text-red-600 transition">العناية بالمسنين</a></li>
              <li><a href="#" className="hover:text-red-600 transition">إسعافات أولية</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">تواصل معنا</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-600" />
                <span>+966 50 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-600" />
                <span>info@healthcare.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-600" />
                <span>الرياض، السعودية</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h4 className="font-bold text-white mb-4 text-center">تابعنا</h4>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-gray-400 hover:text-red-600 transition">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-600 transition">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-600 transition">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p className="text-gray-400">
            جميع الحقوق محفوظة © 2026 HealthCare. تم التطوير بواسطة <span className="text-red-600 font-semibold">abdoatea13</span>
          </p>
          <p className="text-gray-500 mt-2">
            <a href="#" className="hover:text-red-600 transition">سياسة الخصوصية</a> | 
            <a href="#" className="hover:text-red-600 transition mx-2">الشروط والأحكام</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
