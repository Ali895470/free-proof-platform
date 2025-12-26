
export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      {/* الشعار البسيط */}
      <div className="mb-8">
        <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center">
          <span className="text-white text-3xl font-bold">ح</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
          منبر الحق
        </h1>
        <p className="text-gray-600 text-lg">
          المنصة الرقمية للثابتات
        </p>
      </div>

      {/* الرسالة الأساسية */}
      <div className="max-w-2xl mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          رؤيتنا
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          منصة مستقلة لنشر الحق حيثما كان، بعيداً عن ضجيج الترندات 
          وتقلبات الموضة الفكرية. نقدم محتوى ثابتاً أصيلاً 
          في زمن المتغيرات السريعة.
        </p>
      </div>

      {/* أزرار البدء */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="btn btn-primary px-8 py-3 text-lg">
          ابدأ القراءة
        </button>
        <button className="btn btn-outline px-8 py-3 text-lg">
          تعرف علينا
        </button>
      </div>

      {/* تذييل الصفحة */}
      <footer className="mt-16 pt-8 border-t border-gray-200 w-full max-w-2xl">
        <p className="text-gray-500 text-sm">
          "الحق أبلج والباطل لجلج"
        </p>
      </footer>
    </div>
  );
}
