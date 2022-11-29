import * as React from "react";
import { Link } from "gatsby";
import { FiMenu } from "@react-icons/all-files/fi/FiMenu";
import { menuData } from "../data/MenuData";

const Header = () => {
  return (
    <div className="z-10 p-4 flex justify-between items-center text-white absolute w-screen">
      <div className="text-3xl font-bold">Autoroot</div>
      <div className="flex gap-3">
        <FiMenu className="h-10 w-10 md:hidden" />
        {menuData.map((item, index) => (
          <Link
            className="hidden font-bold p-1 rounded md:flex hover:bg-neutral-300 hover:bg-opacity-10 duration-300 ease-in-out"
            key={index}
            to={item.link}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
