import Sidebar from "./Sidebar.jsx";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 p-4 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

