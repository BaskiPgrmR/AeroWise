import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Dashboard" },
    { path: "/forecast", label: "Forecast" },
    { path: "/recommender", label: "Recommender" },
    { path: "/greenscore", label: "Green Score" },
    { path: "/datasources", label: "Data Sources" },
    { path: "/about", label: "About" },
  ];

  return (
    <aside className="w-64 bg-gray-100 h-screen shadow-lg p-4">
      <h1 className="text-2xl font-bold mb-6">AeroWise</h1>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block px-4 py-2 rounded-lg font-medium ${
              location.pathname === item.path
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
