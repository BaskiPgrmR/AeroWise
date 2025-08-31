const variants = {
  default: "bg-gray-200 text-gray-800",
  success: "bg-green-200 text-green-800",
  warning: "bg-yellow-200 text-yellow-800",
};

export function Badge({ children, variant = "default" }) {
  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${
        variants[variant]
      }`}
    >
      {children}
    </span>
  );
}
