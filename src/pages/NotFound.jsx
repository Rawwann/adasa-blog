import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center py-20">
            <h1 className="text-6xl font-bold text-neutral-300 mb-4">404</h1>
            <p className="text-xl mb-8">عذراً، الصفحة التي تبحث عنها غير موجودة.</p>
            <Link
                to="/"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
                العودة للرئيسية
            </Link>
        </div>
    );
}
