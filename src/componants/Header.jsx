import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container">
                    <button
                        className="btn border-0 me-2 d-lg-none"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#sidebarOffcanvas"
                    >
                        <i className="fas fa-bars fa-lg" />
                    </button>
                    <Link to={"/"}  className="navbar-brand d-flex align-items-center">
                        <div className="logo-box d-flex align-items-center">
                            <span
                                className="bg-swiggy-orange text-white rounded-3 px-2 py-1 fw-bold fs-4 me-1"
                                style={{ backgroundColor: "var(--swiggy-orange)" }}
                            >
                                P
                            </span>
                            <span className="fw-bold fs-4 text-dark">Patel Resto</span>
                        </div>
                    </Link>
                    {/* Desktop Navigation */}
                    <div className="collapse navbar-collapse d-none d-lg-block mx-4">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-semibold text-uppercase small">
                            <li className="nav-item">
                                <NavLink  to={"/"} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  to={"/product"} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                    Product
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  to={"/gallery"} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                    Gallery
                                </NavLink>                                
                            </li>
                            <li className="nav-item">
                                <NavLink  to={"/feedback"} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                    Feedback
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex align-items-center ms-auto">
                        <Link to={"/cart"} className="nav-link position-relative mx-2">
                            <i className="fas fa-shopping-cart fa-lg" />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cart-badge">
                                0
                            </span>
                        </Link>
                        <a href="#" className="btn btn-swiggy d-none d-md-block ms-2">
                            Sign In
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}
