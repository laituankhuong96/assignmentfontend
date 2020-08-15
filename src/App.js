import React, { useState, useEffect } from "react";
// import Products from './components/Products';
// import Box from './components/Box/Box';
// import Home from './components/Main/NavBar'
// import Product from './components/Product';
// import dataFake from './dataFake';
import Routers from "./routers";
import apiRequet from "./api/productApi";
import CategoryRequet from "./api/categoryApi";
// import AddProduct from './components/AddProduct';
function App() {
  // const [products, setProducts] = useState(dataFake);

  /// biến tổng cục
  const [products, setProducts] = useState([]);

  const [category, setCategory] = useState([]);
  //danh dach san pham-- sd funtion hook
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await apiRequet.getAll();
        setProducts(data);
      } catch (error) {
        console.log("loi api", error);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    const getCategory = async () => {
      try {
        const { data } = await CategoryRequet.getAllCategory();
        setCategory(data);
      } catch (error) {
        console.log("loi api", error);
      }
    };
    getCategory();
  }, []);

  // //them san pham
  const onHandleAdd = async (product) => {
    try {
      const { data } = await apiRequet.create(product);
      setProducts([...products, data]);
    } catch (error) {
      console.log("loi api", error);
    }
  };

  // them danh muc
  const onHandleAddCategory = async (categorys) => {
    try {
      const { data } = await CategoryRequet.createCategory(categorys);
      setCategory([...category, data]);
    } catch (error) {
      console.log("loi api", error);
    }
  };
  //xoa san pham
  const onHandleRemove = async (id) => {
    try {
      const {} = await apiRequet.remove(id);
      const newProducts = products.filter((product) => product.id !== id);
      setProducts(newProducts);
    } catch (error) {
      console.log("loi api", error);
    }
  };

  //xoa danh muc
  const onHandleRemovect = async (id) => {
    try {
      const {} = await CategoryRequet.removeCategory(id);
      const newCategory = category.filter((categorys) => categorys.id !== id);
      setCategory(newCategory);
    } catch (error) {
      console.log("loi api", error);
    }
  };

  //sua san pham--- thiếu kế thừa dl
  const onHandleUpdate = async (updateProduct) => {
    try {
      const { data } = await apiRequet.update(updateProduct.id, updateProduct);
      const newProducts = products.map((product) =>
        product.id === data.id ? data : product
      );
      setProducts(newProducts);
    } catch (error) {
      console.log("loi api", error);
    }
  };
  const onHandleUpdatect = async (updatecaCt) => {
    try {
      const { data } = await CategoryRequet.updateCategory(
        updatecaCt.id,
        updatecaCt
      );
      const newCategory = category.map((category) =>
        category.id === data.id ? data : category
      );
      setCategory(newCategory);
    } catch (error) {
      console.log("loi api", error);
    }
  };

  return (
    <div className="App">
      <Routers
        products={products}
        onRemove={onHandleRemove}
        onAdd={onHandleAdd}
        onUpdate={onHandleUpdate}
        onupdateCt={onHandleUpdatect}
        category={category}
        onAddCategory={onHandleAddCategory}
        onRemovect={onHandleRemovect}
      />
    </div>
  );
}
export default App;
