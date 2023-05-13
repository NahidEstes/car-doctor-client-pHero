import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Services from "./Pages/Home/Services/Services";
import { useContext } from "react";
import { AuthContext } from "./Providers/AuthProvider";

function App() {
  const { logOut, user } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };
  return (
    <>
      <div className="lg:px-36">
        <h1>car doctor</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/register">Register</Link>
          </li>
          {user?.email ? (
            <li>
              <button onClick={handleLogOut}>Log Out</button>
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
        <Outlet />
      </div>
    </>
  );
}

export default App;
