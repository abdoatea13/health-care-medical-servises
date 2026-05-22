import { Link } from 'react-router-dom'
import { Heart, Users, Clock, Star, CheckCircle, ArrowRight, DollarSign, PhoneCall } from 'lucide-react'

export default function Home() {
  const services = [
    {
      id: 1,
      title: 'تمريض منزلي',
      description: 'ممرضات وممرضون مدربون للعناية بك في المنزل',
      icon: Heart,
      color: 'text-red-600'
    },
    {
      id: 2,
      title: 'استشارات طبية',
      description: 'استشارات من أطباء متخصصين عبر الهاتف',
      icon: PhoneCall,
      color: 'text-blue-600'
    },
    {
      id: 3,
      title: 'العناية بالمسنين',
      description: 'خدمات متخصصة للعناية والرعاية بالمسنين',
      icon: Users,
      color: 'text-green-600'
    },
    {
      id: 4,
      title: 'إسعافات أولية',
      description: 'خدمات طوارئ وإسعافات فورية',
      icon: Clock,
      color: 'text-orange-600'
    }
  ]

  const features = [
    {
      icon: CheckCircle,
      title: 'سهل وسريع',
      description: 'اطلب الخدمة بنقرة واحدة'
    },
    {
      icon: Users,
      title: 'متخصصون معتمدون',
      description: 'جميع مقدمو الخدمة مدربون ومرخصون'
    },
    {
      icon: Star,
      title: 'جودة مضمونة',
      description: 'تقييمات وتقارير عن كل خدمة'
    },
    {
      icon: DollarSign,
      title: 'أسعار منافسة',
      description: 'أفضل الأسعار في السوق'
    }
  ]

  const testimonials = [
    {
      name: 'أم محمد',
      text: 'خدمة ممتازة جداً، الممرضة كانت احترافية وحنونة جداً مع والدتي',
      rating: 5,
      image: '👩‍🦱'
    },
    {
      name: 'الأستاذ علي',
      text: 'رد سريع وسهل جداً، تطبيق مميز وآمن، استخدمته أكثر من مرة',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'فاطمة',
      text: 'الخدمة كانت احترافية من البداية للنهاية، شكراً على الدعم المميز',
      rating: 5,
      image: '👩‍⚕️'
    }
  ]

  const steps = [
    {
      number: 1,
      title: 'اختر الخدمة',
      description: 'حدد نوع الخدمة التي تحتاجها'
    },
    {
      number: 2,
      title: 'اختر الممرض/الطبيب',
      description: 'اختر من قائمة المتخصصين القريبين'
    },
    {
      number: 3,
      title: 'تأكيد الموعد',
      description: 'حدد التاريخ والوقت المناسب'
    },
    {
      number: 4,
      title: 'استقبل الخدمة',
      description: 'استمتع بخدمة طبية احترافية'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                رعاية صحية متميزة <br /> في منزلك
              </h1>
              <p className="text-xl mb-8 text-red-100">
                منصة آمنة وموثوقة لطلب خدمات التمريض والخدمات الطبية المنزلية من متخصصين معتمدين
              </p>
              <div className="flex gap-4 flex-col sm:flex-row">
                <Link to="/services" className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-red-50 transition inline-flex items-center justify-center gap-2">
                  اطلب الآن <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-red-600 transition">
                  اعرف المزيد
                </button>
              </div>
            </div>
            <div className="text-6xl text-center">
              🏥
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">خدماتنا الرئيسية</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <div key={service.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition text-center">
                <div className="flex justify-center mb-4">
                  <IconComponent className={`w-12 h-12 ${service.color}`} />
                </div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-white py-16 border-t">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">كيف يعمل التطبيق؟</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mb-4">
                  {step.number}
                </div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-0 w-full h-1 bg-red-200 transform translate-x-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">لماذا تختارنا؟</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
                  <IconComponent className="w-10 h-10 text-red-600 mb-4" />
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">آراء عملائنا</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">{testimonial.image}</div>
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">\"{ testimonial.text }\"</p>
              <p className="font-bold text-gray-800">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">احصل على خدمة صحية احترافية الآن</h2>
          <p className="text-lg mb-8 text-red-100">انضم لآلاف العملاء الراضين عن خدماتنا</p>
          <Link to="/register" className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-red-50 transition inline-block">
            ابدأ الآن
          </Link>
        </div>
      </section>
    </div>
  )
}
