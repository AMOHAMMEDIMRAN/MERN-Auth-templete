import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};
export default PrivateRoute;
