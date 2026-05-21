export default function ServiceCard({ service, onClick, isSelected }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center rounded-3xl p-3 transition shadow-sm ${
        isSelected
          ? 'bg-teal-50 border-2 border-teal-700'
          : 'bg-slate-50 hover:bg-teal-50'
      }`}
    >
      <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-3xl mb-2">
        {service.icon}
      </div>
      <span className="text-xs font-bold text-center leading-5 text-slate-700">
        {service.name}
      </span>
    </button>
  )
}