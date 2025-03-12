import React from "react";

const navData = [
  {
    route: "/home",
    label: "Home",
  },
  {
    route: "/projects",
    label: "Projects",
  },
  {
    route: "/contact",
    label: "Contact",
  },
];

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#E8EDF9] to-[#E6EBF7] text-gray-800 py-4 px-10 shadow-md flex justify-between items-center">
      <h2 className="text-2xl font-bold">
        <span className="text-red-500 hover:text-gray-600 transition duration-300">
          Hafidz Putra Rachman
        </span>
      </h2>
      <h2 className="text-lg font-semibold">Absolute Resolution Industries</h2>
      <nav className="flex gap-6">
        {navData.map((item) => (
          <a
            key={item.route}
            className="text-gray-700 hover:text-blue-500 hover:underline transition duration-300"
            href={item.route}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
