import { Home, BarChart3, Leaf, Info, LineChart, Compass } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const navItems = [
    { name: "Dashboard", path: "/", icon: <Home className="w-4 h-4" /> },
    { name: "Forecast", path: "/forecast", icon: <LineChart className="w-4 h-4" /> },
    { name: "Recommender", path: "/recommender", icon: <Compass className="w-4 h-4" /> },
    { name: "Green Score", path: "/greenscore", icon: <Leaf className="w-4 h-4" /> },
    { name: "Data Sources", path: "/datasources", icon: <BarChart3 className="w-4 h-4" /> },
    { name: "About", path: "/about", icon: <Info className="w-4 h-4" /> },
  ];

  return (
    <aside className="w-64 h-screen bg-gray-100 border-r p-4">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">AeroWise</h1>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === "/"} // exact match only for Dashboard
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
                isActive
                  ? "bg-blue-500 text-white font-semibold"
                  : "text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
