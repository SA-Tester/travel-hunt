import {
  Avatar,
  Button,
  DarkThemeToggle,
  Dropdown,
  Flowbite,
  Navbar,
} from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Image from "../../logo.png";
import "../NavBar/nav.css";

function NavBar() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  const navigateTosignup = () => {
    navigate("/signup");
  };

  const [authstate, setAuthState] = useState(false);

  const CustomFlowbiteTheme = {
    nav: {
      color: {
        primary: "bg-green-500 hover:bg-green-200",
      },
    },
  };
  return (
    <Flowbite theme={{ theme: CustomFlowbiteTheme }}>
      <Navbar
        fluid
        className="bg-transparent dark:bg-slate-800 navcolor shadow-xl backdrop-blur-sm"
      >
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
          <Navbar.Link href="#" active className="text-white">
            Home
          </Navbar.Link>
          <Navbar.Link href="/planner" className="text-white">
            TripPlanner
          </Navbar.Link>
          <Navbar.Link href="#" className="text-white">
            Services
          </Navbar.Link>
          <Navbar.Link href="#" className="text-white">
            Pricing
          </Navbar.Link>
          <Navbar.Link href="#" className="text-white">
            Contact
          </Navbar.Link>
          {authstate ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>

              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <div className="flex flex-wrap gap-2 border-s-2 px-3">
              <Button
                className="border-0 text-gray-700 bg-transprent font-bold"
                onClick={navigateToLogin}
                pill
              >
                Login
              </Button>
              <Button
                className="bg-sky-950 text-white border-0"
                onClick={navigateTosignup}
                pill
              >
                Register
              </Button>
            </div>
          )}
          <DarkThemeToggle />
        </Navbar.Collapse>
      </Navbar>
    </Flowbite>
  );
}

export default NavBar;