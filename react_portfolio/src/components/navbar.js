import React from "react";
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <div>
      <li>
        <Link to="/">Dogs</Link>
      </li>
      <li>
        <Link to="/">Cats</Link>
      </li>
      <li>
        <Link to="/">Sheeps</Link>
      </li>
      <li>
        <Link to="/ ">Goats</Link>
      </li>
    </div>
  );
};
export default navbar;
