import * as React from "react";
import { Link } from "gatsby";
import { FiMenu } from "@react-icons/all-files/fi/FiMenu";
import { menuData } from "../data/MenuData";

const Header = () => {
  return (
    <div className="bg-indigo-200 p-4 flex justify-between items-center">
      <div className="text-3xl">Autoroot</div>
      <div className="flex gap-3">
        <FiMenu className="h-10 w-10 md:hidden" />
        {menuData.map((item, index) => (
          <Link className="hidden md:flex" key={index} to={item.link}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
