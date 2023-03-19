import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { allGames } from "../../Redux/Actions";
import style from "./Navbar.module.css";

function Navbar() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    const name = event.target.value;
    dispatch(allGames(name));
    setName(name);
  };
  return (
    <div className={style.navbar}>
      <img className={style.logo} src="/logo.png" alt="logo" />
      <input
        className={style.input}
        type="text"
        value={name}
        placeholder="Search by name"
        onChange={handleSearch}
      />
      <NavLink to="home" className={style.links}>
        Home
      </NavLink>
      <NavLink to="create" className={style.links}>
        Create your own videogame
      </NavLink>
    </div>
  );
}

export default Navbar;


