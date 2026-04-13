import React from 'react'

export default function Content() {
    return (
        <>
            <main>
                {/* Hero Carousel */}
                <section className="banners py-4">
                    <div className="container">
                        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button
                                    type="button"
                                    data-bs-target="#heroCarousel"
                                    data-bs-slide-to={0}
                                    className="active"
                                />
                                <button
                                    type="button"
                                    data-bs-target="#heroCarousel"
                                    data-bs-slide-to={1}
                                />
                                <button
                                    type="button"
                                    data-bs-target="#heroCarousel"
                                    data-bs-slide-to={2}
                                />
                            </div>
                            <div className="carousel-inner rounded-4">
                                <div className="carousel-item active">
                                    <img
                                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&h=400"
                                        className="d-block w-100"
                                        alt="Slider 1"
                                    />
                                    <div className="carousel-caption d-none d-md-block text-start">
                                        <h1 className="display-5 fw-bold">Craving for something?</h1>
                                        <p>Delicious food delivered to your door.</p>
                                        <a href="products.html" className="btn btn-swiggy">
                                            Order Now
                                        </a>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&w=1200&h=400"
                                        className="d-block w-100"
                                        alt="Slider 2"
                                    />
                                    <div className="carousel-caption d-none d-md-block text-start">
                                        <h1 className="display-5 fw-bold">50% OFF on First Order</h1>
                                        <p>Use code: NEWUSER50</p>
                                        <a href="products.html" className="btn btn-swiggy">
                                            Get Discount
                                        </a>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&h=400"
                                        className="d-block w-100"
                                        alt="Slider 3"
                                    />
                                    <div className="carousel-caption d-none d-md-block text-start">
                                        <h1 className="display-5 fw-bold">Free Delivery</h1>
                                        <p>On orders above $30</p>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#heroCarousel"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" />
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#heroCarousel"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" />
                            </button>
                        </div>
                    </div>
                </section>
                {/* Categories Section */}
                <section className="categories py-5 bg-light">
                    <div className="container text-center">
                        <h2 className="mb-4">What's on your mind?</h2>
                        <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-4">
                            <div className="col">
                                <div className="category-item">
                                    <img
                                        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=150&h=150"
                                        className="category-img"
                                        alt="Pizza"
                                    />
                                    <h5>Pizza</h5>
                                </div>
                            </div>
                            <div className="col">
                                <div className="category-item">
                                    <img
                                        src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=150&h=150"
                                        className="category-img"
                                        alt="Burger"
                                    />
                                    <h5>Burger</h5>
                                </div>
                            </div>
                            <div className="col">
                                <div className="category-item">
                                    <img
                                        src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=150&h=150"
                                        className="category-img"
                                        alt="Cakes"
                                    />
                                    <h5>Cakes</h5>
                                </div>
                            </div>
                            <div className="col">
                                <div className="category-item">
                                    <img
                                        src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=150&h=150"
                                        className="category-img"
                                        alt="Salads"
                                    />
                                    <h5>Salads</h5>
                                </div>
                            </div>
                            <div className="col">
                                <div className="category-item">
                                    <img
                                        src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=150&h=150"
                                        className="category-img"
                                        alt="Noodles"
                                    />
                                    <h5>Noodles</h5>
                                </div>
                            </div>
                            <div className="col">
                                <div className="category-item">
                                    <img
                                        src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=150&h=150"
                                        className="category-img"
                                        alt="Biryani"
                                    />
                                    <h5>Biryani</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Featured Products */}
                <section className="featured-products py-5">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h2>Top Rated Near You</h2>
                            <a
                                href="products.html"
                                className="text-orange text-decoration-none fw-bold"
                            >
                                See all <i className="fas fa-arrow-right" />
                            </a>
                        </div>
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="card food-card">
                                    <img
                                        src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&h=300"
                                        className="card-img-top"
                                        alt="Product 1"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Domino's Pizza</h5>
                                        <p className="card-text">Pizzas, Italian</p>
                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <span className="rating-badge">
                                                <i className="fas fa-star" /> 4.2
                                            </span>
                                            <span className="fw-bold">$12.99</span>
                                        </div>
                                        <button
                                            className="btn btn-outline-swiggy w-100 mt-3 add-to-cart-btn"
                                            data-product="Domino's Pizza"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="card food-card">
                                    <img
                                        src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&h=300"
                                        className="card-img-top"
                                        alt="Product 2"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Burger King</h5>
                                        <p className="card-text">Burgers, American</p>
                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <span className="rating-badge">
                                                <i className="fas fa-star" /> 4.5
                                            </span>
                                            <span className="fw-bold">$8.49</span>
                                        </div>
                                        <button
                                            className="btn btn-outline-swiggy w-100 mt-3 add-to-cart-btn"
                                            data-product="Burger King"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="card food-card">
                                    <img
                                        src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=400&h=300"
                                        className="card-img-top"
                                        alt="Product 3"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Fresh Salad Co.</h5>
                                        <p className="card-text">Healthy, Green</p>
                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <span className="rating-badge">
                                                <i className="fas fa-star" /> 4.1
                                            </span>
                                            <span className="fw-bold">$10.00</span>
                                        </div>
                                        <button
                                            className="btn btn-outline-swiggy w-100 mt-3 add-to-cart-btn"
                                            data-product="Fresh Salad"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="card food-card">
                                    <img
                                        src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=400&h=300"
                                        className="card-img-top"
                                        alt="Product 4"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Subway</h5>
                                        <p className="card-text">Sandwiches, Fast Food</p>
                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <span className="rating-badge">
                                                <i className="fas fa-star" /> 4.0
                                            </span>
                                            <span className="fw-bold">$6.50</span>
                                        </div>
                                        <button
                                            className="btn btn-outline-swiggy w-100 mt-3 add-to-cart-btn"
                                            data-product="Subway"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Customer Reviews */}
                <section className="reviews py-5 bg-white">
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 className="fw-bold">What Our Customers Say</h2>
                            <p className="text-muted">Trusted by thousands of hungry foodies</p>
                        </div>
                        <div className="row g-4">
                            <div className="col-md-4">
                                <div className="card border-0 shadow-sm p-4 rounded-4 h-100 text-center">
                                    <img
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150"
                                        className="rounded-circle mx-auto mb-3 border border-3 border-warning shadow-sm"
                                        width={80}
                                        height={80}
                                        alt="Customer 1"
                                    />
                                    <h6 className="fw-bold mb-1">Michael Ross</h6>
                                    <div className="text-warning mb-2 small">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </div>
                                    <p className="text-secondary small italic">
                                        "Miggy app is incredible! The delivery speed is unmatched and the
                                        food always arrives fresh and hot."
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card border-0 shadow-sm p-4 rounded-4 h-100 text-center">
                                    <img
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150"
                                        className="rounded-circle mx-auto mb-3 border border-3 border-warning shadow-sm"
                                        width={80}
                                        height={80}
                                        alt="Customer 2"
                                    />
                                    <h6 className="fw-bold mb-1">Jessica Lane</h6>
                                    <div className="text-warning mb-2 small">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star-half-alt" />
                                    </div>
                                    <p className="text-secondary small italic">
                                        "The variety of cuisines available is amazing. I love how easy it
                                        is to track my order in real-time."
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card border-0 shadow-sm p-4 rounded-4 h-100 text-center">
                                    <img
                                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150"
                                        className="rounded-circle mx-auto mb-3 border border-3 border-warning shadow-sm"
                                        width={80}
                                        height={80}
                                        alt="Customer 3"
                                    />
                                    <h6 className="fw-bold mb-1">David Kim</h6>
                                    <div className="text-warning mb-2 small">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </div>
                                    <p className="text-secondary small italic">
                                        "Highly recommended! The user interface is so clean and intuitive.
                                        Ordering food has never been this easy."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* CTA Section */}
                <section className="cta py-5">
                    <div
                        className="container rounded-4 bg-swiggy-orange text-white p-5 text-center"
                        style={{ backgroundColor: "var(--swiggy-orange)" }}
                    >
                        <h2 className="display-6 fw-bold">
                            Experience the best food in your city
                        </h2>
                        <p className="lead">
                            Download the app for exclusive offers and faster ordering.
                        </p>
                        <div className="mt-4">
                            <a href="#" className="btn btn-dark btn-lg me-2">
                                <i className="fab fa-apple me-2" /> App Store
                            </a>
                            <a href="#" className="btn btn-dark btn-lg">
                                <i className="fab fa-google-play me-2" /> Play Store
                            </a>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}
