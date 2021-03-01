import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="ui fixed inverted violet menu">
      <div className="ui container">
        <NavLink to="/" exact className="header item">
          Hooper's Lectionary Project
        </NavLink>
        <NavLink to="/" exact className="item">
          Home
        </NavLink>
        <NavLink to="/about" exact className="item">
          About
        </NavLink>
        <NavLink to="/notes" exact className="item">
          Notes
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
