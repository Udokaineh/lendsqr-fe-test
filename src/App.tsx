import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routes from "./routes"
import Login from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Docs from "./pages/docs/Docs";

const queryClient = new QueryClient()

const { dashboardSubRoutes } = Routes()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/docs",
    element: <Docs />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: dashboardSubRoutes,
  },
]);


function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
