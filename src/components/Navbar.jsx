import React from "react";
import { Person, Home, CheckBox } from "@material-ui/icons";

const NavItem = (props) => {
  return (
    <div className="bg-white hover:bg-gray-50 shadow-md cursor-pointer p-3 rounded text-purple-500 flex items-center gap-2">
      {props.children}
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="w-full px-20 py-3 flex justify-center gap-2 items-center text-black">
      <NavItem>
        <CheckBox />
        <span className="font-bold text-3xl text-purple-500">Utter</span>
      </NavItem>
      <div className="flex gap-2">
        <NavItem>
          <Home />
        </NavItem>
        <NavItem>
          <Person />
        </NavItem>
      </div>
    </nav>
  );
};

export default Navbar;
