import { DarkThemeToggle, Flowbite, Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import Image from "../../logo.png";

function NavBar() {
  return (
    <Flowbite>
      <Navbar fluid className="bg-red dark:bg-slate-800">
        <Navbar.Brand as={Link} href="https://flowbite-react.com">
          <img
            src={Image}
            className="mr-3 sm:h-9 h-px"
            alt="Flowbite React Logo"
            style={{ height: "auto", width: "150px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link as={Link} href="#">
            About
          </Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
          <DarkThemeToggle />
        </Navbar.Collapse>
      </Navbar>
    </Flowbite>
  );
}

export default NavBar;
