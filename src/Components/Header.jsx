import React from 'react';
import { CiUser } from "react-icons/ci";
const Header = () => {
    return (
        <div>
            <header className="py-3 mb-4 header border-bottom">
                <div className="container flex-wrap d-flex justify-content-center align-items-center">
                <a href="/" className="mb-3 d-flex align-items-center mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Dokan</span>            </a>
                    <form className="mb-3 col-12 col-lg-auto mb-lg-0" role="search">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
                    </form>
                    <nav className="nav ms-auto">
                        <ul className="nav me-auto">
                            <li className="nav-item"><a href="/" className="px-2 nav-link link-body-emphasis active" aria-current="page">Home</a></li>
                            <li className="nav-item"><a href="./Features" className="px-2 nav-link link-body-emphasis">Features</a></li>
                            <li className="nav-item"><a href="./Product" className="px-2 nav-link link-body-emphasis">Product</a></li>
                            <li className="nav-item"><a href="#" className="px-2 nav-link link-body-emphasis">FAQs</a></li>
                            <li className="nav-item"><a href="#" className="px-2 nav-link link-body-emphasis">About</a></li>
                        </ul>
                        <ul className="nav">
                            <li className="nav-item"><a href="./login" className="px-2 nav-link link-body-emphasis"><CiUser />Login</a></li> 
                            <li className="nav-item"><a href="./register" className="px-2 nav-link link-body-emphasis">Sign up</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header;
