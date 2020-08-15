import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Link } from "react-router-dom";

const ProductsManager = ({ products, onRemove, categorys }) => {
  const removeHandle = (id) => {
    onRemove(id);
  };

  return (
    <div className="section__content section__content--p30">
      <div className="container-fluid">
        <div className="row">
          <div className="table-responsive table--no-card m-b-30">
            <table className="table table-borderless table-striped table-earning">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tên sản phẩm</th>
                  <th>Danh mục</th>
                  <th>Hình ảnh</th>
                  <th>Số lượng</th>
                  <th className="text-center">Giá</th>
                  <th className="text-center">Giảm giá</th>
                  <th className="text-center">Hành Động</th>
                </tr>
              </thead>
              <tbody>
                {products.map(
                  (
                    { id, name, image, number, price, priceSale, categoryid },
                    index
                  ) => (
                    <tr key={index}>
                      <td style={{ background: "white", color: "red" }}>
                        {index + 1}
                      </td>
                      <td>{name}</td>
                      <td>
                        {categorys.map((id) => {
                          if (categoryid == id.id) {
                            return id.danhmuc;
                          }
                        })}
                      </td>
                      {/* <td>{description}</td> */}
                      <td>
                        <img src={image} width="50px" />
                      </td>
                      <td>{number}</td>
                      <td>{price}$</td>
                      <td>{priceSale}$</td>
                      <td className="text-center">
                        <button
                          className="btn btn-danger"
                          onClick={() => removeHandle(id)}
                        >
                          Xóa
                        </button>
                        &nbsp;
                        <Link
                          to={`/admin/product/${id}`}
                          className="btn btn-primary"
                        >
                          Chỉnh sửa
                        </Link>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
            <Link className="btn btn-primary" to="/admin/addproduct">
              Thêm sản phẩm
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductsManager.propTypes = {};

export default ProductsManager;
