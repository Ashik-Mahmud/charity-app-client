import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../Store/store";
type Props = { children: ReactNode };

const RequireAuth = ({ children }: Props): any => {
  const { user } = useAppSelector((state) => state.loginUser);
  const location = useLocation();

  if (!user) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
