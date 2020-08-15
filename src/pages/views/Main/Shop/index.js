import React from 'react'
import PropTypes from 'prop-types'
import { NavLink, Link } from 'react-router-dom'
const Shop = ({ categorys, products }) => {
    return (
        <div>
            <div class="breadcrumb-option">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb__links">
                                <a href="./index.html"><i class="fa fa-home"></i> Home</a>
                                <span>Shop</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="shop spad">
                <div className="container">
                    <div className="row">


                        <div className="col-lg-3 col-md-3">
                            <div className="shop__sidebar">
                                <div className="sidebar__categories">
                                    <div className="section-title">
                                        <h4>Categories</h4>
                                    </div>
                                    {categorys.map(({ id, danhmuc, mota }) => (
                                        <div className="size__list color__list">
                                            <h5 className="card-title"><Link to={"/cate/" + id}>{danhmuc}</Link></h5>
                                        </div>
                                    ))}


                                </div>

                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9">
                            <div className="row">
                                <div className="row property__gallery">
                                    {products.map(({ id, name, image, price }) => (
                                        <div className="col-lg-3 col-md-4 col-sm-6 mix women">
                                            <div className="product__item">
                                                {/* <div class="product__item__pic set-bg"> */}
                                                <Link to={"/detail/" + id}><img src={image} /> </Link>
                                                {/* <div className="label new">New</div> */}
                                                <ul className="product__hover">
                                                    <li><a href="#"><span className="icon_bag_alt" /></a></li>
                                                </ul>
                                                {/* </div> */}
                                                <div className="product__item__text">
                                                    <h6><Link to={"/detail/" + id}>{name}</Link></h6>
                                                    <div className="product__price">{price}$</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="col-lg-12 text-center">
                                    <div className="pagination__option">
                                        <a href="#">1</a>
                                        <a href="#">2</a>
                                        <a href="#">3</a>
                                        <a href="#"><i className="fa fa-angle-right" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

Shop.propTypes = {

}

export default Shop
