import React, { useState } from "react";
import PropTypes from "prop-types";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const DetailProduct = ({ products, onUpdate, categorys }) => {
  let { id } = useParams();
  let history = useHistory();
  const product = products.find((product) => product.id === id);
  const [currentProduct, setCurrentProduct] = useState(product);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    onUpdate(currentProduct);
    history.push("/admin/products");
  };
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct({
      ...currentProduct,
      [name]: value,
    });
  };

  return (
    <div className="card shadow my-4">
      <div className="card-header py-3">
        <h5 className="m-0 font-weight-bold text-primary">Edit Product</h5>
      </div>
      <div className="card-body">
        <form action="" onSubmit={onHandleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Tên sản phẩm</label>
            <input
              type="text"
              name="name"
              defaultValue={currentProduct.name}
              onChange={onHandleChange}
              className="form-control"
            />
          </div>

          {/* <div className="control-group">
                        <label className="control-label" htmlFor="basicinput">Danh mục</label>
                        <div className="controls">
                            <select name="categoryid" tabIndex={1} data-placeholder="Select here.." className="form-control " onChange={onHandleChange}>
                                <option value="">--Không thuộc danh mục nào--</option>
                                {categorys.map((category, index) => (
                                    <option key={index} defaultValue={category.categoryid}>{category.danhmuc}</option>))}
                            </select>
                        </div>
                    </div> */}

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Description</label>
            <textarea
              id="description"
              name="description"
              cols="45"
              rows="8"
              // maxlength="65525"
              defaultValue={currentProduct.description}
              onChange={onHandleChange}
              className="form-control"
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Ảnh</label>
            <input type="file" name="image" className="form-control-file" />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Number</label>
            <input
              type="number"
              name="number"
              className="form-control"
              id="productNumber"
              defaultValue={currentProduct.number}
              onChange={onHandleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Price</label>
            <input
              type="text"
              name="price"
              defaultValue={currentProduct.price}
              onChange={onHandleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Price Sale</label>
            <input
              type="number"
              name="priceSale"
              className="form-control"
              id="productPriceSale"
              defaultValue={currentProduct.priceSale}
              onChange={onHandleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            {" "}
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

DetailProduct.propTypes = {};

export default DetailProduct;
