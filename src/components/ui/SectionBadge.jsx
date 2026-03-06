export default function SectionBadge({ children, className = "" }) {
  return (
    <div
      className={`inline-flex items-center gap-3 px-5 py-2 rounded-full glass-panel text-sm font-bold text-primary mb-8 ${className}`}
    >
      <div className="flex gap-1.5 items-center">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-pulse [animation-delay:200ms]"></span>
      </div>
      <span>{children}</span>
    </div>
  );
}
