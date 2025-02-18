import { Navigate, Outlet } from "react-router-dom";

const DocRouteProtector = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token || role !== "patient") {
    return <Navigate to="/login" replace />; // Redirect to login if unauthorized
  }

  return <Outlet />; // Render the protected component
};

export default DocRouteProtector;
