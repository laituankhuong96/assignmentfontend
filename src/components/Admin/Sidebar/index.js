import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Sidebar = (props) => {
  return (
    <aside className="menu-sidebar d-none d-lg-block">
      <div className="logo">
        <a href="#">{/* <img src="../img/logo.png" alt="" /> */}</a>
      </div>
      <div className="menu-sidebar__content js-scrollbar1">
        <nav className="navbar-sidebar">
          <ul className="list-unstyled navbar__list">
            <li className="has-sub">
              <Link className="js-arrow" to="/admin">
                <i className="fas fa-tachometer-alt" />
                Thống kê
              </Link>
            </li>
            <li>
              <Link to="/admin/category">
                <i className="fas fa-chart-bar" />
                Danh mục
              </Link>
            </li>
            <li className="js-arrow">
              <Link to="/admin/products">
                <i className="fas fa-table" />
                Sản Phẩm
              </Link>
            </li>
            {/* <li>
                            <Link href="">
                                <i className="far fa-check-square" />Forms</Link>
                        </li>
                        <li>
                            <Link href="">
                                <i className="fas fa-calendar-alt" />Calendar</Link>
                        </li>
                        <li>
                            <Link href="">
                                <i className="fas fa-map-marker-alt" />Maps</Link>
                        </li> */}
            {/* <li className="has-sub">
                            <Link className="js-arrow" href="#">
                                <i className="fas fa-copy" />Pages</Link>
                            <ul className="list-unstyled navbar__sub-list js-sub-list">
                                <li>
                                    <a href="login.html">Login</a>
                                </li>
                                <li>
                                    <a href="register.html">Register</a>
                                </li>
                                <li>
                                    <a href="forget-pass.html">Forget Password</a>
                                </li>
                            </ul>
                        </li> */}
            {/* <li className="has-sub">
                            <Link className="js-arrow" href="#">
                                <i className="fas fa-desktop" />UI Elements</Link>
                            <ul className="list-unstyled navbar__sub-list js-sub-list">
                                <li>
                                    <a href="button.html">Button</a>
                                </li>
                                <li>
                                    <a href="badge.html">Badges</a>
                                </li>
                                <li>
                                    <a href="tab.html">Tabs</a>
                                </li>
                                <li>
                                    <a href="card.html">Cards</a>
                                </li>
                                <li>
                                    <a href="alert.html">Alerts</a>
                                </li>
                                <li>
                                    <a href="progress-bar.html">Progress Bars</a>
                                </li>
                                <li>
                                    <a href="modal.html">Modals</a>
                                </li>
                                <li>
                                    <a href="switch.html">Switchs</a>
                                </li>
                                <li>
                                    <a href="grid.html">Grids</a>
                                </li>
                                <li>
                                    <a href="fontawesome.html">Fontawesome Icon</a>
                                </li>
                                <li>
                                    <a href="">Typography</a>
                                </li>
                            </ul>
                        </li> */}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
