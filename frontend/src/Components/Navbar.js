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
          <h1>Workout Buddy</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span>{user.name}</span>
              <button onClick={logout}>Log out</button>
            </div>
          )}

          {!user && (
            <div className="navigate">
              <Link className="navigate-link" to="/Signup">
                Signup
              </Link>
              <Link className="navigate-link" to="/Login">
                Login
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
