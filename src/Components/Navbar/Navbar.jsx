import { useState } from "react";
import Link from "../Link/Link";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Squash as Hamburger } from "hamburger-react";

const Navbar = () => {
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "404 Not Found" },
  ];
    const [open, setOpen] = useState(false);
  return (
    <nav className="md:flex items-center bg-yellow-300">
      <div className="md:hidden flex">
        <Hamburger toggled={open} toggle={setOpen}></Hamburger>
      </div>

      <ul
        className={`md:flex gap-6 md:shadow-none shadow-xl bg-yellow-300 duration-1000 ${
          open ? "left-3 top-14 p-4" : "p-3 top-14 -left-60"
        } absolute md:static bg rounded-xl`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
