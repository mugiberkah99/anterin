export function Button({ children, className = "", variant = "default", ...props }) {
  const baseStyle = "rounded-xl px-4 py-2 text-white font-semibold transition-all";
  const variants = {
    default: "bg-orange-500 hover:bg-orange-600",
    outline: "border border-orange-500 text-orange-500 bg-white hover:bg-orange-50",
  };
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
