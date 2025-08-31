import { Home, BarChart3, Leaf, Info } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const navItems = [
    { name: "Dashboard", path: "/", icon: <Home className="w-4 h-4" /> },
    { name: "Green Score", path: "/greenscore", icon: <Leaf className="w-4 h-4" /> },
    { name: "Data Sources", path: "/datasources", icon: <BarChart3 className="w-4 h-4" /> },
    { name: "About", path: "/about", icon: <Info className="w-4 h-4" /> },
  ];

  return (
    <aside className="w-64 h-screen bg-gray-100 border-r p-4">
      <h1 className="text-xl font-bold mb-6">AeroWise</h1>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-lg transition ${
                isActive ? "bg-blue-100 text-blue-700 font-medium" : "text-gray-700 hover:bg-gray-200"
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
