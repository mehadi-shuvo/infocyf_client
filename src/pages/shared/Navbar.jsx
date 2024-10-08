import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo-icon-slogun.png";
import { useEffect, useState } from "react";

const navItems = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "About Us",
    path: "/about-us",
  },
  {
    title: "portfolios",
    path: "/portfolios",
  },
  {
    title: "contact us",
    path: "/contact-us",
  },
];

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = window.innerHeight * 0.2;

      if (scrollPosition > threshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`transition ease-in-out duration-1000 ${
        isSticky
          ? "bg-white primary_black shadow-lg fixed top-0 left-0 w-full  z-50"
          : "transparent fixed top-0 left-0 w-full  z-50"
      }`}
    >
      <div className="navbar w-4/5 mx-auto justify-between">
        <div className="">
          <a className="">
            <img className="h-14" src={logo} alt="" />
          </a>
          <div className="dropdown">
            <div tabIndex={0} className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems.map((item) => (
                <li key={item.path}>
                  <a href={item.path}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="hidden lg:flex">
          <ul className="md:flex gap-3 px-1">
            {navItems.map((item) => (
              <li
                key={item.path}
                className="text-lg bg-transparent rounded-none capitalize font-medium hover:text-green-600 transition ease-out duration-500"
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-600 bg-transparent"
                      : "hover:text-green-600 transition ease-out duration-500 hover:bg-transparent"
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
