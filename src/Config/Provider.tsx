import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./Context";

export default function PrivateRoute() {
  const { logado } = useContext(AuthContext);
  return logado ? <Outlet /> : <Navigate to="/app" replace />;
}
