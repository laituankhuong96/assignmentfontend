import React, { useState } from "react";
import PropTypes from "prop-types";
import { useParams, useHistory } from "react-router-dom";

const EditCategory = ({ category, onupdateCt }) => {
  let { id } = useParams();
  let history = useHistory();
  const categorys = category.find((categorys) => categorys.id === id);
  const [currentCategory, setCurrentCategory] = useState(categorys);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    onupdateCt(currentCategory);
    history.push("/admin/category");
  };
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setCurrentCategory({
      ...currentCategory,
      [name]: value,
    });
  };

  return (
    <div className="card shadow my-4">
      <div className="card-header py-3">
        <h5 className="m-0 font-weight-bold text-primary">Edit Category</h5>
      </div>
      <div className="card-body">
        <form action="" onSubmit={onHandleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Category</label>
            <input
              type="text"
              name="danhmuc"
              className="form-control"
              id="productName"
              defaultValue={currentCategory.mota}
              onChange={onHandleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Description</label>
            <input
              type="text"
              name="mota"
              className="form-control"
              id="productName"
              defaultValue={currentCategory.danhmuc}
              onChange={onHandleChange}
            />
          </div>
          {/* <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Description</label>
                    <textarea id="description" name="description" cols="45" rows="8" maxlength="65525" ref={register({ required: true })}
                        aria-describedby="descriptionHelp" className="form-control"></textarea>
                    <small id="descriptionHelp" className="form-text text-danger">{errors.description && <span>Please fill in the Description field</span>}</small>
                </div> */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

EditCategory.propTypes = {};

export default EditCategory;
