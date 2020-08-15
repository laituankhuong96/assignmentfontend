import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
const AddCategory = ({ onAddCategory }) => {
  let history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const onHandleSubmit = (data) => {
    const newdata = {
      id: Math.random().toString(36).substr(2, 9),
      ...data,
    };
    onAddCategory(newdata);
    history.push("/admin/category");
  };

  return (
    <div className="card shadow my-4">
      <div className="card-header py-3">
        <h5 className="m-0 font-weight-bold text-primary">Add Category</h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Loại hàng</label>
            <input
              type="text"
              name="danhmuc"
              className="form-control"
              id="productName"
              ref={register({ required: true })}
              aria-describedby="nameHelp"
            />
            <small id="nameHelp" className="form-text text-danger">
              {errors.name && <span>Please fill in the name field</span>}
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Tên loại hàng</label>
            <input
              type="text"
              name="mota"
              className="form-control"
              id="productName"
              ref={register({ required: true })}
              aria-describedby="nameHelp"
            />
            <small id="nameHelp" className="form-text text-danger">
              {errors.name && <span>Please fill in the name field</span>}
            </small>
          </div>
          {/* <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Description</label>
                        <textarea id="description" name="description" cols="45" rows="8" maxlength="65525" ref={register({ required: true })}
                            aria-describedby="descriptionHelp" className="form-control"></textarea>
                        <small id="descriptionHelp" className="form-text text-danger">{errors.description && <span>Please fill in the Description field</span>}</small>
                    </div> */}
          <button type="submit" className="btn btn-primary">
            Thêm mới
          </button>
        </form>
      </div>
    </div>
  );
};

AddCategory.propTypes = {};

export default AddCategory;
