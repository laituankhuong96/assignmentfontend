import React from 'react'
import PropTypes from 'prop-types'
import { useParams, useHistory, Link } from 'react-router-dom';

const About = ({ products }) => {
    let { id } = useParams();
    const product = products.find(product => product.id === id);
    return (
        <div>
            <div class="breadcrumb-option">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb__links">
                                <Link to="/"><i class="fa fa-home"></i> Home</Link>
                                <a>Details</a>
                                <span>{product.name}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="product-details spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="product__details__pic">
                                <img className="set-img" src={product.image} />
                            </div>
                            <div>
                                <img width="20%" src={product.image} />
                            </div>

                        </div>
                        <div className="col-lg-6">
                            <div className="product__details__text">
                                <h3>{product.name}</h3>
                                <div className="rating">
                                    <span>( 138 reviews )</span>
                                </div>
                                <div className="product__details__price">{product.priceSale}$<span>{product.price}$</span></div>
                                {/* <p>Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret fugit, sed quia consequuntur
                  magni lores eos qui ratione voluptatem sequi nesciunt.</p> */}
                                <div className="product__details__button">
                                    <div className="quantity">
                                        <span>Quantity:</span>
                                        <div className="pro-qty">
                                            <input type="number" min="0" defaultValue={1} />
                                        </div>
                                    </div>
                                    <a href="#" className="cart-btn"><span className="icon_bag_alt" /> Add to cart</a>
                                    <ul>
                                        <li><a href="#"><span className="icon_heart_alt" /></a></li>
                                        <li><a href="#"><span className="icon_adjust-horiz" /></a></li>
                                    </ul>
                                </div>
                                <div className="product__details__widget">
                                    <ul>
                                        <li>
                                            <span>Availability:</span>
                                            <div className="stock__checkbox">
                                                <label htmlFor="stockin">
                                                    In Stock
                          <input type="checkbox" id="stockin" />
                                                    <span className="checkmark" />
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <span>Available color:</span>
                                            <div className="color__checkbox">
                                                <label htmlFor="red">
                                                    <input type="radio" name="color__radio" id="red" defaultChecked />
                                                    <span className="checkmark" />
                                                </label>
                                                <label htmlFor="black">
                                                    <input type="radio" name="color__radio" id="black" />
                                                    <span className="checkmark black-bg" />
                                                </label>
                                                <label htmlFor="grey">
                                                    <input type="radio" name="color__radio" id="grey" />
                                                    <span className="checkmark grey-bg" />
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <span>Available size:</span>
                                            <div className="size__btn">
                                                <label htmlFor="xs-btn" className="active">
                                                    <input type="radio" id="xs-btn" />
                          xs
                        </label>
                                                <label htmlFor="s-btn">
                                                    <input type="radio" id="s-btn" />
                          s
                        </label>
                                                <label htmlFor="m-btn">
                                                    <input type="radio" id="m-btn" />
                          m
                        </label>
                                                <label htmlFor="l-btn">
                                                    <input type="radio" id="l-btn" />
                          l
                        </label>
                                            </div>
                                        </li>
                                        <li>
                                            <span>Promotions:</span>
                                            <p>Free shipping</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="product__details__tab">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">Description</a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                        {product.description}
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

About.propTypes = {

}

export default About
