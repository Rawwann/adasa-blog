import SectionBadge from "./SectionBadge";

export default function SectionHeader({
  title,
  subtitle,
  badge,
  action,
  alignment = "right",
  className = "",
  titleClassName = "",
}) {
  const isCentered = alignment === "center";

  const content = (
    <div
      className={
        isCentered
          ? "text-center flex flex-col items-center"
          : "text-center md:text-start flex flex-col items-center md:items-start"
      }
    >
      {badge && <SectionBadge>{badge}</SectionBadge>}
      <h2
        className={`font-bold text-white mb-4 ${isCentered ? "text-3xl md:text-4xl lg:text-5xl" : "text-3xl md:text-4xl lg:text-5xl tracking-tight"} ${titleClassName}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-neutral-400 ${isCentered ? "" : ""}`}>{subtitle}</p>
      )}
    </div>
  );

  if (action) {
    return (
      <div
        className={`flex flex-col md:flex-row items-center md:items-end justify-between gap-6 mb-12 ${className}`}
      >
        {content}
        {action}
      </div>
    );
  }

  return <div className={`mb-16 text-center ${className}`}>{content}</div>;
}
