import { Navigate } from "react-router";
interface Iprobs {
  children: React.ReactNode;
  isallowed: boolean;
  url: string;
  data?: unknown;
}

const ProtectedRoute = ({ children, isallowed, url ,data}: Iprobs) => {
  if (!isallowed) {
    return <Navigate to={url} replace state={data} />;
  }
  return <>{children}</>;
};
export default ProtectedRoute;
