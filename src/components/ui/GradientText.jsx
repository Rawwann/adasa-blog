export default function GradientText({ children, className = "" }) {
  return (
    <span className={`text-gradient-primary ${className}`}>{children}</span>
  );
}
