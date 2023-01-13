import { Link } from "react-router-dom";

export const NavBar = ({ logout }) => {
  return (
    <nav>
      {window.localStorage.getItem("loginToken") ? (
        <div>
          <Link to="/cars"> Cars </Link>
          <Link to="/add"> Add </Link>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <Link to="/login"> Login</Link>
        </div>
      )}
      <hr />
    </nav>
  );
};
