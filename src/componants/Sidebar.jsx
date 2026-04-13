import React from 'react'
import { Link } from 'react-router-dom'
export default function Sidebar() {
    return (
        <>
            <div className="offcanvas offcanvas-start" tabIndex={-1} id="sidebarOffcanvas">
                <div className="offcanvas-header border-bottom shadow-sm">
                    <div className="d-flex align-items-center">
                        <span
                            className="bg-swiggy-orange text-white rounded-3 px-2 py-1 fw-bold me-2"
                            style={{ backgroundColor: "var(--swiggy-orange)" }}
                        >
                            P
                        </span>
                        <h5 className="offcanvas-title fw-bold">Patel Restro App</h5>
                    </div>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" />
                </div>
                <div className="offcanvas-body p-0">
                    <div className="list-group list-group-flush sidebar">
                        <Link to={"/"}
                            className="list-group-item list-group-item-action active border-0"
                        >
                            <i className="fas fa-home me-3" /> Home
                        </Link>
                        <Link to={"/product"}
                            className="list-group-item list-group-item-action border-0"
                        >
                            <i className="fas fa-utensils me-3" /> Products
                        </Link>
                        <Link to={"/gallery"}
                            className="list-group-item list-group-item-action border-0"
                        >
                            <i className="fas fa-images me-3" /> Gallery
                        </Link>
                        <Link to={"/cart"}
                            className="list-group-item list-group-item-action border-0"
                        >
                            <i className="fas fa-shopping-cart me-3" /> Cart
                        </Link>
                        <hr />
                        <Link to={"/checkout"}
                            className="list-group-item list-group-item-action border-0"
                        >
                            <i className="fas fa-credit-card me-3" /> Checkout
                        </Link>
                        <Link to={"feedback"}
                            className="list-group-item list-group-item-action border-0"
                        >
                            <i className="fas fa-comment-alt me-3" /> Feedback
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
