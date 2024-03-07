import { Link } from "react-router-dom";
import AuthStatus from "./security/AuthStatus";
import { useAuth } from "./security/AuthProvider";



export default function NavHeader() {
  const auth = useAuth();
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        <li>
          {/* <a href="/recipes">Recipes</a> */}
          <Link to="/recipes">Recipes</Link>
        </li>
        <li>
          {/* <a href="/add">Add</a> */}
          {auth.isLoggedInAs(["ADMIN"]) && (
            <li>
              <Link to="/add">Add</Link>
            </li>
          )}
        </li>
        <AuthStatus />
      </ul>
    </nav>
  );
}
