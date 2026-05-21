import { useState } from 'react'

export default function BookingForm({ services, nurses, onBooking }) {
  const [formData, setFormData] = useState({
    address: '',
    medicalDetails: '',
    discountCode: '',
    governorate: 'القاهرة',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onBooking(formData)
    console.log('Booking submitted:', formData)
  }

  return (
    <div className="bg-white rounded-t-[40px] shadow-2xl p-5 max-h-[78vh] overflow-auto" dir="rtl">
      <div className="w-20 h-1.5 rounded-full bg-slate-300 mx-auto mb-5" />

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-2xl font-black text-slate-800">
            اطلب خدمتك الآن
          </h2>
          <p className="text-slate-500 mt-1 text-sm">
            أقرب مقدم خدمة خلال دقائق
          </p>
        </div>

        <div className="bg-teal-50 text-teal-700 px-4 py-2 rounded-2xl font-bold text-sm">
          القاهرة - الجيزة - الغربية
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        {services.map((service, index) => (
          <button
            key={index}
            className="flex flex-col items-center justify-center bg-slate-50 rounded-3xl p-3 hover:bg-teal-50 transition shadow-sm"
          >
            <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-3xl mb-2">
              {service.icon}
            </div>
            <span className="text-xs font-bold text-center leading-5 text-slate-700">
              {service.name}
            </span>
          </button>
        ))}
      </div>

      {/* Order Details */}
      <div className="bg-slate-100 rounded-3xl p-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-black text-slate-800">
            تفاصيل الطلب
          </h3>

          <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
            Live
          </div>
        </div>

        <form className="space-y-3">
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full rounded-2xl border-0 bg-white p-4 shadow-sm focus:ring-2 focus:ring-teal-700 outline-none"
            placeholder="اكتب عنوانك بالتفصيل"
          />

          <textarea
            name="medicalDetails"
            value={formData.medicalDetails}
            onChange={handleChange}
            className="w-full rounded-2xl border-0 bg-white p-4 h-28 shadow-sm focus:ring-2 focus:ring-teal-700 outline-none"
            placeholder="تفاصيل الحالة الطبية"
          />

          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              name="discountCode"
              value={formData.discountCode}
              onChange={handleChange}
              className="rounded-2xl border-0 bg-white p-4 shadow-sm focus:ring-2 focus:ring-teal-700 outline-none"
              placeholder="كود الخصم"
            />

            <select
              name="governorate"
              value={formData.governorate}
              onChange={handleChange}
              className="rounded-2xl border-0 bg-white p-4 shadow-sm focus:ring-2 focus:ring-teal-700 outline-none"
            >
              <option>اختر المحافظة</option>
              <option>القاهرة</option>
              <option>الجيزة</option>
              <option>الغربية</option>
            </select>
          </div>
        </form>
      </div>

      {/* Nearby Nurses */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-black text-slate-800">
            عروض التمريض القريب
          </h3>

          <div className="text-sm text-slate-500">حتى 10 كم</div>
        </div>

        <div className="space-y-4">
          {nurses.map((nurse, index) => (
            <div
              key={index}
              className="bg-white border border-slate-100 rounded-3xl p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center text-2xl">
                    {nurse.gender === 'female' ? '👩‍⚕️' : '👨‍⚕️'}
                  </div>

                  <div>
                    <h4 className="font-black text-slate-800">
                      {nurse.name}
                    </h4>

                    <div className="flex gap-3 text-sm text-slate-500 mt-1">
                      <span>{nurse.distance}</span>
                      <span>{nurse.eta}</span>
                    </div>
                  </div>
                </div>

                <div className="text-left">
                  <div className="text-xl font-black text-teal-700">
                    {nurse.price}
                  </div>

                  <button className="mt-2 bg-teal-700 text-white px-5 py-2 rounded-2xl text-sm font-bold shadow-lg hover:bg-teal-800 transition">
                    اختيار
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="w-full bg-teal-700 text-white py-5 rounded-3xl text-xl font-black shadow-2xl hover:scale-[1.01] transition"
      >
        تأكيد طلب الخدمة
      </button>

      {/* Contact Buttons */}
      <div className="grid grid-cols-2 gap-4 mt-5">
        <a
          href="https://wa.me/201007729848"
          className="bg-green-500 text-white text-center py-4 rounded-3xl font-black hover:bg-green-600 transition"
        >
          واتساب مباشر
        </a>

        <a
          href="tel:01288941138"
          className="bg-slate-900 text-white text-center py-4 rounded-3xl font-black hover:bg-slate-800 transition"
        >
          اتصال سريع
        </a>
      </div>
    </div>
  )
}