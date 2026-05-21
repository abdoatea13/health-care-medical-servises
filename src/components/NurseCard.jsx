import { Star, MapPin, Clock, Phone } from 'lucide-react'

export default function NurseCard({ nurse }) {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-lg hover:shadow-xl transition">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center text-2xl">
            {nurse.gender === 'female' ? '👩‍⚕️' : '👨‍⚕️'}
          </div>
          <div>
            <h3 className="font-black text-lg text-slate-800">{nurse.name}</h3>
            <p className="text-sm text-slate-500">{nurse.specialty}</p>
          </div>
        </div>
        <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full flex items-center gap-1">
          <Star size={14} fill="currentColor" />
          <span className="text-sm font-bold">{nurse.rating}</span>
        </div>
      </div>

      {/* Info Grid */}
      <div className="space-y-2 mb-4 text-sm">
        <div className="flex items-center gap-2 text-slate-600">
          <MapPin size={16} className="text-teal-600" />
          <span>{nurse.distance}</span>
        </div>
        <div className="flex items-center gap-2 text-slate-600">
          <Clock size={16} className="text-teal-600" />
          <span>{nurse.eta}</span>
        </div>
        <div className="flex items-center gap-2 text-slate-600">
          <Phone size={16} className="text-teal-600" />
          <span>{nurse.phone}</span>
        </div>
      </div>

      {/* Price and Action */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
        <div>
          <p className="text-xs text-slate-500">السعر</p>
          <p className="text-xl font-black text-teal-700">{nurse.price}</p>
        </div>
        <button className="bg-teal-700 text-white px-6 py-2 rounded-2xl font-bold hover:bg-teal-800 transition">
          اختيار
        </button>
      </div>
    </div>
  )
}