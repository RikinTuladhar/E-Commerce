import React from "react";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header className="py-3  header border-bottom">
        <div className="container flex-wrap d-flex justify-content-center align-items-center">
          <Link to={"/"}
           
            className="mb-3 d-flex align-items-center mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap">
              Dokan
            </span>{" "}
          </Link>
          <form className="mb-3 col-12 col-lg-auto mb-lg-0" role="search">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
          <nav className="nav ml-10 flex justify-center items-center gap-5">
            <ul className="nav me-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className="px-2 nav-link link-body-emphasis active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/products"}
                  href="./Features"
                  className="px-2 nav-link link-body-emphasis"
                >
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="./Product"
                  className="px-2 nav-link link-body-emphasis"
                >
                  Resell
                </a>
              </li>

              <li className="nav-item">
                <a href="#" className="px-2 nav-link link-body-emphasis">
                  About
                </a>
              </li>
            </ul>
            <ul className="nav">
              <li className="nav-item">
                <Link
                  to="./login"
                  className="px-2 nav-link link-body-emphasis flex justify-center items-center gap-2"
                >
                  <CiUser />
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="./register"
                  className="px-2 nav-link link-body-emphasis"
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
