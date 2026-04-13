import React from 'react'
import { Link } from 'react-router-dom'
export default function Ordersucessful() {
  return (
    <>
  <div className="container h-100 min-vh-100 d-flex align-items-center justify-content-center">
    <div className="text-center">
      <div className="success-animation mb-4">
        <i className="fas fa-check-circle" />
      </div>
      <h1 className="fw-bold mb-3">Order Placed Successfully!</h1>
      <p className="text-muted lead mb-4">
        Thank you for your order. Your food is being prepared and will be
        delivered shortly.
      </p>
      <div className="p-3 bg-light rounded-4 mb-5">
        <h6 className="text-muted small mb-1">ORDER ID</h6>
        <h5 className="fw-bold mb-0">#SWGY-7823910</h5>
      </div>
      <div className="d-flex justify-content-center gap-3">
        <Link to={"/"} className="btn btn-swiggy btn-lg px-5">
          Go Home
        </Link>
        <Link to={"/product"} href="products.html" className="btn btn-outline-dark btn-lg px-5">
          Order More
        </Link>
      </div>
      <div className="mt-5">
        <p className="text-muted">
          Estimated Delivery Time:{" "}
          <span className="fw-bold text-dark">45 mins</span>
        </p>
      </div>
    </div>
  </div>
  {/* Floating Contact Buttons */}
  <div className="floating-contact">
    <a
      href="https://wa.me/9998003879"
      className="float-btn float-whatsapp"
      target="_blank"
      title="WhatsApp Us"
    >
      <i className="fab fa-whatsapp" />
    </a>
    <a href="tel:9998003879" className="float-btn float-call" title="Call Us">
      <i className="fas fa-phone-alt" />
    </a>
  </div>
</>

  )
}
