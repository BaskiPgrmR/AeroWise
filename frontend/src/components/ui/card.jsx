export function Card({ children, className = "" }) {
  return (
    <div className={`bg-white border rounded-2xl shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }) {
  return <div className={`border-b px-4 py-3 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = "" }) {
  return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>;
}

export function CardContent({ children, className = "" }) {
  return <div className={`px-4 py-3 ${className}`}>{children}</div>;
}
