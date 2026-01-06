import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="app-container">
      <main className="content">
        
        <Outlet />
      </main>
    </div>
  );
}