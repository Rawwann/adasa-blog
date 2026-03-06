export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a]/90 backdrop-blur-md gap-6">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-orange-500/20 rounded-full scale-125 animate-pulse shadow-[0_0_30px_rgba(249,115,22,0.2)]"></div>
        <div className="absolute inset-0 border-4 border-t-orange-500 border-r-transparent border-b-orange-500/40 border-l-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2.5 h-2.5 bg-orange-500 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.9)]"></div>
        </div>
      </div>
      <span className="text-orange-500 font-bold tracking-[0.2em] uppercase animate-pulse text-sm">
        جاري تحميل عدسة...
      </span>
    </div>
  );
}
