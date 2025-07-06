import { Outlet } from "react-router-dom";
import Header from "../components/ui/header";

const AppLayout = () => {
  return (
    <div className="relative min-h-screen">
      <div className="grid-background"></div>

      <main className="relative z-10 px-6 sm:px-10 lg:px-16 py-4 container mx-auto">
        <Header />
        <Outlet />
      </main>

      <div className="py-4 text-center bg-gray-800 mt-10 text-sm text-gray-400">
        © {new Date().getFullYear()} Club Hiring Portal. All rights reserved.
      </div>
    </div>
  );
};

export default AppLayout;
