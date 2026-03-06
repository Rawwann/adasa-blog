import { Link } from "react-router-dom";
import { Button } from "@heroui/react";
import { FiMail } from "react-icons/fi";

export default function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-500 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          لديك أسئلة؟ دعنا نتحدث!
        </h2>
        <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو
          تريد فقط إلقاء التحية، لا تتردد في التواصل.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-[#121212] text-white hover:bg-black border-none px-8 font-bold h-14 rounded-xl flex items-center gap-2 w-full sm:w-auto transition-all duration-300 hover:-translate-y-1"
          >
            <FiMail className="w-5 h-5" />
            تواصل معنا
          </Button>
          <Button
            size="lg"
            variant="bordered"
            as={Link}
            to="/blog"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white hover:text-[#0a0a0a] transition-all duration-300 w-full sm:w-auto"
          >
            تصفح المقالات
          </Button>
        </div>
      </div>
    </section>
  );
}
