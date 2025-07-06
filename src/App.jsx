import { RouterProvider, createBrowserRouter } from "react-router-dom";

// import ProtectedRoute from "./components/protected-route";
import { ThemeProvider } from "./components/ui/theme-provider";
import AppLayout from "./layout/app-layout";

import HireListing from "./pages/hireListing";
import LandingPage from "./pages/landing";
import Onboarding from "./pages/onboarding";

import "./App.css";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: (

          <Onboarding />

        ),
      },
      {
        path: "/hire-listing",
        element: (

          <HireListing />

        ),
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;