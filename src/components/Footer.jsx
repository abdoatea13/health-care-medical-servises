import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-black mb-4">Health Care</h3>
            <p className="text-slate-300 text-sm">
              منصة متخصصة في تقديم خدمات طبية منزلية من قبل الممرضات والممرضين المحترفين
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><a href="/" className="hover:text-white transition">الرئيسية</a></li>
              <li><a href="#services" className="hover:text-white transition">الخدمات</a></li>
              <li><a href="#nurses" className="hover:text-white transition">الممرضون</a></li>
              <li><a href="#contact" className="hover:text-white transition">تواصل معنا</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">خدماتنا</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>زيارات تمريض</li>
              <li>زيارات أطباء</li>
              <li>إقامة تمريضية</li>
              <li>علاج طبيعي</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">تواصل معنا</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-slate-300">
                <Phone size={16} />
                <span className="text-sm">01288941138</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Mail size={16} />
                <span className="text-sm">info@healthcare.com</span>
              </li>
              <li className="flex items-start gap-2 text-slate-300">
                <MapPin size={16} className="mt-1" />
                <span className="text-sm">القاهرة - الجيزة - مصر</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
            <p>&copy; 2024 Health Care Medical Services. جميع الحقوق محفوظة</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">سياسة الخصوصية</a>
              <a href="#" className="hover:text-white transition">شروط الاستخدام</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}