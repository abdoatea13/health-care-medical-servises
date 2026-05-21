# دليل البدء السريع 🚀

## المتطلبات الأساسية

- **Node.js** (v14 أو أحدث) - [حمّل من هنا](https://nodejs.org/)
- **npm** أو **yarn** (يأتي مع Node.js)
- محرر نصوص (VS Code موصى به)

## خطوات التثبيت والتشغيل

### 1️⃣ استنساخ المشروع
```bash
git clone https://github.com/abdoatea13/health-care-medical-servises.git
cd health-care-medical-servises
```

### 2️⃣ تثبيت المكتبات
```bash
npm install
```

### 3️⃣ تشغيل خادم التطوير
```bash
npm run dev
```

سيفتح التطبيق تلقائياً في المتصفح على:
```
http://localhost:5173
```

## الأوامر المتاحة

```bash
# تشغيل خادم التطوير
npm run dev

# بناء المشروع للإنتاج
npm run build

# عرض البناء
npm run preview

# فحص الأخطاء
npm run lint
```

## البيئة والإعدادات

### إنشاء ملف `.env`
```bash
cp .env.example .env
```

ثم عدّل القيم حسب احتياجك:
```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_GOOGLE_MAPS_KEY=your_key
VITE_ENV=development
```

## بنية الملفات المهمة

```
src/
├── components/      # المكونات
├── pages/          # الصفحات
├── data/           # البيانات
├── context/        # State Management
├── services/       # API Services
└── App.jsx         # التطبيق الرئيسي
```

## أول خطوات التطوير

### 1. فهم البنية
- اقرأ `PROJECT_STRUCTURE.md`
- استكشف المجلدات والملفات

### 2. تعديل الصفحة الرئيسية
- عدّل `src/pages/Home.jsx`
- غيّر الألوان والنصوص

### 3. إضافة مكون جديد
```jsx
// src/components/MyNewComponent.jsx
export default function MyNewComponent() {
  return (
    <div className="p-4 bg-white rounded-lg">
      <h1>My Component</h1>
    </div>
  )
}
```

### 4. استخدام المكون
```jsx
// في صفحة أو مكون آخر
import MyNewComponent from '../components/MyNewComponent'

export default function MyPage() {
  return (
    <div>
      <MyNewComponent />
    </div>
  )
}
```

## استكشاف الأخطاء

### المشروع لا يعمل؟
```bash
# امسح node_modules وثبت من جديد
rm -rf node_modules
npm install
npm run dev
```

### أخطاء Tailwind؟
- تأكد من تثبيت Tailwind: `npm install -D tailwindcss postcss autoprefixer`
- تحقق من `tailwind.config.js`

### المنفذ 5173 مشغول؟
```bash
npm run dev -- --port 3000
```

## الخطوات التالية

1. ✅ تشغيل المشروع بنجاح
2. 🎨 تعديل التصميم حسب رغبتك
3. 📄 إضافة صفحات جديدة (تسجيل، دخول، الملف الشخصي)
4. 🔌 ربط Backend API
5. 💾 نشر على الإنترنت

## الموارد المفيدة

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev)
- [React Router](https://reactrouter.com)

## الدعم والمساعدة

أي مشكلة؟ 
- افتح Issue على GitHub
- راجع الأخطاء في console (F12)

---

**استمتع بالتطوير! 🎉**
