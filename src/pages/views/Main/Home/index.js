import React from "react";
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";
import Navbar from "../../../../components/Main/NavBar";

const Home = ({ products }) => {
  const url = "url('')";
  return (
    <div>
      <Navbar />
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="section-title">
                <h4>Danh sách sản phẩm</h4>
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <ul className="filter__controls">
                <li className="active" data-filter="*">
                  All
                </li>
                <li data-filter=".women">Women’s</li>
                <li data-filter=".men">Men’s</li>
                <li data-filter=".kid">Kid’s</li>
                <li data-filter=".accessories">Accessories</li>
                <li data-filter=".cosmetic">Cosmetics</li>
              </ul>
            </div>
          </div>
          <div className="row property__gallery">
            {products.map(({ id, name, image, price }, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mix women">
                <div className="product__item">
                  {/* <div class="product__item__pic set-bg"> */}
                  <Link to={"/detail/" + id}>
                    <img className="set-img" src={image} />{" "}
                  </Link>
                  {/* <div className="label new">New</div> */}
                  <ul className="product__hover">
                    <li>
                      <a href="#">
                        <span className="icon_bag_alt" />
                      </a>
                    </li>
                  </ul>
                  {/* </div> */}
                  <div className="product__item__text">
                    <h6>
                      <Link to={"/detail/" + id}>{name}</Link>
                    </h6>
                    <div className="product__price">{price}$</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

Home.propTypes = {};

export default Home;
