import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Link } from "react-router-dom";
const Header = (props) => {
  return (
    <div>
      <header className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-2">
              <div className="header__logo">
                {/* <a href="./index.html"><img src="img/logo.png" alt="" /></a> */}
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <nav className="header__menu">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  {/* <li><a href="#">Women’s</a></li>
                                    <li><a href="#">Men’s</a></li> */}
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <ul className="dropdown">
                      <li>
                        <a href="./product-details.html">Product Details</a>
                      </li>
                      <li>
                        <Link to="./cart">Shop Cart</Link>
                      </li>
                      <li>
                        <Link to="/cate">Category</Link>
                      </li>
                      <li>
                        <Link to="/blog">Blog Details</Link>
                      </li>
                    </ul>
                  </li>
                  {/* <li><a href="./blog.html">Blog</a></li> */}
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header__right">
                <div className="header__right__auth">
                  <a href="#">Login</a>
                  <a href="#">Register</a>
                </div>
                <ul className="header__right__widget">
                  <li>
                    <span className="icon_search search-switch" />
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon_heart_alt" />
                      <div className="tip">2</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon_bag_alt" />
                      <div className="tip">2</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="canvas__open">
            <i className="fa fa-bars" />
          </div>
        </div>
      </header>
    </div>
  );
};

Header.propTypes = {};

export default Header;
