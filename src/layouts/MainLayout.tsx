//@ts-nocheck
import { Outlet, NavLink } from "react-router-dom";
import "./mainLayout.css";
import Logo from "../../public/logo.svg";

export default function MainLayout() {
  return (
    <>
      <header>
        <NavLink to="/art-gallery/ts">
          <img src={Logo} alt="" />
        </NavLink>
        <nav>
          <ul>
            <li>
              <NavLink to="">CONTACT</NavLink>
            </li>
            <li>
              <NavLink to="/art-gallery-ts/gallery">GALLERY</NavLink>
            </li>
            <li>
              <NavLink to="/art-gallery-ts/add">ADD PHOTO</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
