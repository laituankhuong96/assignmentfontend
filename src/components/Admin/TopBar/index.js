import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Link } from "react-router-dom";
const Topbar = (props) => {
  return (
    <header className="header-desktop">
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="header-wrap">
            <form className="form-header">
              <input
                className="au-input au-input--xl"
                type="text"
                name="search"
                placeholder="Search for datas & reports..."
              />
              <button className="au-btn--submit" type="submit">
                <i className="zmdi zmdi-search" />
              </button>
            </form>
            <div className="header-button">
              <div className="account-wrap">
                <div className="account-item clearfix js-item-menu">
                  <div className="image">
                    <Link to="/">
                      <img src="../images/icon/avatar-00.jpg" />
                    </Link>
                  </div>
                  <div className="content">
                    <Link to="/">Trang quản trị</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Topbar.propTypes = {};

export default Topbar;
