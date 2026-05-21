import { useState } from 'react'
import ServiceCard from '../components/ServiceCard'
import NurseCard from '../components/NurseCard'
import BookingForm from '../components/BookingForm'
import { mockServices, mockNurses } from '../data/mockData'

export default function Home() {
  const [selectedService, setSelectedService] = useState(null)
  const [bookingData, setBookingData] = useState(null)

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-black" dir="rtl">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Current Location */}
        <div className="absolute top-28 left-4 z-20 bg-white rounded-full px-4 py-3 shadow-xl">
          <div className="text-sm font-bold text-slate-700">
            📍 موقعك الحالي
          </div>
        </div>

        {/* Floating Labels */}
        <div className="absolute top-[35%] right-[30%] z-20 animate-bounce">
          <div className="bg-teal-600 text-white px-4 py-2 rounded-full shadow-2xl font-bold">
            👨‍⚕️ تمريض قريب
          </div>
        </div>

        <div className="absolute top-[48%] right-[58%] z-20 animate-pulse">
          <div className="bg-green-600 text-white px-4 py-2 rounded-full shadow-2xl font-bold">
            🩺 متاح الآن
          </div>
        </div>

        {/* Booking Section */}
        <div className="absolute bottom-0 left-0 right-0 z-40">
          <BookingForm
            services={mockServices}
            nurses={mockNurses}
            onBooking={setBookingData}
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black text-slate-800 mb-8 text-center">
            خدماتنا المتنوعة
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mockServices.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                onClick={() => setSelectedService(service)}
                isSelected={selectedService?.name === service.name}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Nurses Section */}
      <section id="nurses" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black text-slate-800 mb-8 text-center">
            فريق الممرضات والممرضين
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockNurses.map((nurse, index) => (
              <NurseCard key={index} nurse={nurse} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-4">هل تحتاج لخدمة طبية منزلية؟</h2>
          <p className="text-lg mb-8 text-teal-100">
            طلب آمن وسريع من أفضل الممرضات والممرضين المحترفين
          </p>
          <button className="bg-white text-teal-700 px-8 py-3 rounded-full font-bold text-lg hover:bg-slate-100 transition">
            اطلب الآن
          </button>
        </div>
      </section>
    </main>
  )
}