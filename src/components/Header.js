import * as React from "react";
import { Link } from "gatsby";
import { FiMenu } from "@react-icons/all-files/fi/FiMenu";
import { menuData } from "../data/MenuData";

const Header = () => {
  return (
    <div className="bg-indigo-200 p-6">
      <FiMenu className="h-10 w-10" />
      {menuData.map((item, index) => (
        <div key={index} to={item.link}>
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default Header;
