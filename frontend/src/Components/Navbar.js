import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Body</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span>{user.name}</span>
              <button onClick={logout}>Log out</button>
            </div>
          )}

          {!user && (
            <div>
              <Link to="/Signup">Signup </Link>
              <Link to="/Login">Login</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
