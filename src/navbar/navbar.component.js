import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNavbarAction } from "./navbar.actions";
import { navbarSelector } from "./navbar.selectors";

export const NavbarComponent = () => {
  const dispatch = useDispatch();
  const navbar = useSelector(navbarSelector);
  useEffect(() => {
    dispatch(fetchNavbarAction());
  }, [dispatch]);

  return (
    <Fragment>
      <div>Navbar Items:</div>
      <ul>
        {navbar.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </Fragment>
  );
};
