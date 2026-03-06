import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";

export default function Team({ teamMembers }) {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-neutral-800/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-neutral-900/50 text-xs font-bold text-primary mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-pulse"></span>
            فريقنا
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            تعرف على كتابنا
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
            المجتمع.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="bg-[#121212] border border-neutral-800 rounded-3xl p-8 flex flex-col items-center text-center group transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className="relative mb-6">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-[#161616] group-hover:scale-105 group-hover:border-primary/20 transition-all duration-300"
                />
                <div className="absolute bottom-1 right-1 w-5 h-5 bg-primary border-2 border-[#121212] rounded-full flex items-center justify-center text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="w-3 h-3"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-1 transition-colors duration-300 group-hover:text-primary">
                {member.name}
              </h3>

              <p className="text-sm font-medium text-primary mb-6">
                {member.role}
              </p>

              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center text-neutral-500 hover:text-white hover:bg-black transition-colors"
                >
                  <FaXTwitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center text-neutral-500 hover:text-white hover:bg-[#333] transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center text-neutral-500 hover:text-white hover:bg-[#0077b5] transition-colors"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
