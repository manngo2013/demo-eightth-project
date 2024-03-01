import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
  user,
  isAccess,
  redirectPath = "/login",
  children,
}) => {
  if (!user) {
    return <Navigate to={redirectPath} replace={true} />;
  }
  if (!isAccess) {
    return <Navigate to="/403" replace={true} />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
