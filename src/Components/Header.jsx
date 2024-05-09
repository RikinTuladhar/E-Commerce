import React from "react";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header className="py-3 header border-bottom">
        <div className="container flex-wrap d-flex justify-content-center align-items-center">
          <Link
            to={"/"}
            className="mb-3 d-flex align-items-center mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none"
          >
            <img src="/Images/Dokan.png" class="h-8" alt="Dokan Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap"></span>{" "}
          </Link>
          <form className="mb-3 col-12 col-lg-auto mb-lg-0" role="search">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
          <nav className="flex items-center justify-center gap-5 ml-10 nav">
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
                <Link
                  to={"/products"}
                  href="./Features"
                  className="px-2 nav-link link-body-emphasis"
                >
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/resells"}
                  href="./Product"
                  className="px-2 nav-link link-body-emphasis"
                >
                  Resell
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to={"/categories"}
                  href="./categories"
                  className="px-2 nav-link link-body-emphasis"
                >
                  Category
                </Link>
              </li>
            </ul>
            <ul className="nav">
              <li className="nav-item">
                <Link
                  to="./login"
                  className="flex items-center justify-center gap-2 px-2 nav-link link-body-emphasis"
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
