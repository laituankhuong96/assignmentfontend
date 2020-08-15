import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import firebase from "../../../../firebase";

const Addproduct = ({ onAdd, categorys }) => {
  let history = useHistory();

  const { register, handleSubmit, errors } = useForm();

  // const [valueInput, setValueInput] = useState({});

  // const onHandleChange = (e) => {
  //     const { name, value } = e.target;
  //     setValueInput({
  //         ...valueInput,
  //         [name]: value,
  //     });
  // };

  const onHandleSubmit = (data) => {
    console.log(data.image[0]);
    let file = data.image[0];
    // tạo reference chứa ảnh trên firesbase
    let storageRef = firebase.storage().ref(`images/${file.name}`);
    // đẩy ảnh lên đường dẫn trên
    storageRef.put(file).then(function () {
      storageRef.getDownloadURL().then((url) => {
        console.log(url);
        // Tạo object mới chứa toàn bộ thông tin từ input
        const newData = {
          id: Math.random().toString(36).substr(2, 9),
          ...data,
          //   desc,
          image: url,
        };
        console.log(newData);
        // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
        onAdd(newData);
        history.push("/admin/products");
      });
    });
  };

  // const onHandleSubmit = (data) => {
  //     const newData = {
  //         id: Math.random().toString(36).substr(2, 9),
  //         ...data
  //     }
  //     onAdd(newData);
  //     history.push("/admin/products");
  // }
  return (
    <div className="card shadow my-4">
      <div className="card-header py-3">
        <h5 className="m-0 font-weight-bold text-primary">Thêm sản phẩm</h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Tên sản phẩm</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="productName"
              ref={register({ required: true })}
              aria-describedby="nameHelp"
            />
            <small id="nameHelp" className="form-text text-danger">
              {errors.name && <span>Please fill in the name field</span>}
            </small>
          </div>

          <div className="control-group">
            <label className="control-label" htmlFor="basicinput">
              Danh mục
            </label>
            <div className="controls">
              <select
                name="categoryid"
                ref={register()}
                tabIndex={1}
                data-placeholder="Select here.."
                className="form-control "
              >
                <option value="">--Không thuộc danh mục nào--</option>
                {categorys.map((category, index) => (
                  <option key={index} value={category.id}>
                    {category.danhmuc}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Mô tả</label>
            <textarea
              id="description"
              name="description"
              cols="45"
              rows="8"
              //   maxlength={"999"}
              ref={register({ required: true })}
              aria-describedby="descriptionHelp"
              className="form-control"
            ></textarea>
            <small id="descriptionHelp" className="form-text text-danger">
              {errors.description && (
                <span>Please fill in the Description field</span>
              )}
            </small>
          </div>

          {/* <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Image</label>
                        <div className="custom-file">
                            <input type="text" className="custom-file-input" id="inputGroupFile02" name="image"
                                ref={register({ required: true })}
                            />
                            <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                        </div>
                        <small id="imageHelp" className="form-text text-danger">{errors.image && <span>Please select an image</span>}</small>
                    </div> */}

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Hình ảnh</label>
            <br />
            <input
              type="file"
              name="image"
              id="productImage"
              ref={register({ required: true })}
              aria-describedby="imageHelp"
            />
            <small id="imageHelp" className="form-text text-danger">
              {errors.image && <span>Please fill in the Image field</span>}
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Số lượng</label>
            <input
              type="number"
              name="number"
              className="form-control"
              id="productNumber"
              ref={register({ required: true })}
              aria-describedby="numberHelp"
            />
            <small id="numberHelp" className="form-text text-danger">
              {errors.number && <span>Please fill in the Number field</span>}
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Giá</label>
            <input
              type="number"
              name="price"
              className="form-control"
              id="productPrice"
              ref={register({ required: true })}
              aria-describedby="priceHelp"
            />
            <small id="priceHelp" className="form-text text-danger">
              {errors.price && <span>Please fill in the price field</span>}
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Giá giảm</label>
            <input
              type="number"
              name="priceSale"
              className="form-control"
              id="productPriceSale"
              ref={register({ required: true })}
              aria-describedby="priceSaleHelp"
            />
            <small id="priceSaleHelp" className="form-text text-danger">
              {errors.priceSale && (
                <span>Please fill in the Price Sale field</span>
              )}
            </small>
          </div>
          <button type="submit" className="btn btn-primary">
            {" "}
            Thêm mới
          </button>
        </form>
      </div>
    </div>
  );
};

Addproduct.propTypes = {};

export default Addproduct;
