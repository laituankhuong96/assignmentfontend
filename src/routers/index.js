import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../pages/layouts/Main'
import MainAdmin from '../pages/layouts/MainAdmin'

//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'

//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import Addproduct from '../pages/views/Admin/Addproduct';
import DetailProduct from '../pages/views/Admin/DetailProduct';
import Contact from '../pages/views/Main/Contact';
import Shop from '../pages/views/Main/Shop';
import Category from '../pages/views/Admin/Category';
import AddCategory from '../pages/views/Admin/AddCategory';
import EditCategory from '../pages/views/Admin/EditCategory';
import Blog from '../pages/views/Main/Blog';
import Cart from '../pages/views/Main/Cart';
import Categorys from '../pages/views/Main/Categorys/Categorys';


const Routers = ({ products, onRemove, onAdd, onUpdate, onAddCategory, category, onRemovect, onupdateCt }) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    const onHandleRemovect = (id) => {
        onRemovect(id)
    }
    // const onHandleAdd = (product) => {
    //     onAdd(product);
    // };

    const onHandleUpdate = (product) => {
        onUpdate(product)
    }

    const onHandleUpdatect = (category) => {
        onupdateCt(category)
    }

    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?" exact>
                    <MainAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard products={products} category={category} />
                            </Route>
                            <Route path="/admin/addproduct"  >
                                <Addproduct onAdd={onAdd} categorys={category} />
                            </Route>
                            <Route path="/admin/addcategory"  >
                                <AddCategory onAddCategory={onAddCategory} categorys={category} />
                            </Route>
                            <Route path="/admin/category"  >
                                <Category category={category} onRemovect={onHandleRemovect} />
                            </Route>
                            <Route path='/admin/products'>
                                <ProductsManager products={products} categorys={category} onRemove={onHandleRemove} />
                            </Route>

                        </Switch>
                    </MainAdmin>
                </Route>


                <Route path="/admin/category/:path?">
                    < MainAdmin>
                        <Route path='/admin/category/:id'>
                            <EditCategory category={category} onupdateCt={onHandleUpdatect} />
                        </Route>
                    </MainAdmin>
                </Route>

                <Route path="/admin/product/:path?">
                    < MainAdmin>
                        <Route path="/admin/product/:id">
                            <DetailProduct products={products} onUpdate={onHandleUpdate} />
                        </Route>
                    </MainAdmin>
                </Route>

                <Route>
                    <Main>
                        <Switch>
                            <Route path="/" exact>
                                <Home products={products} />
                            </Route>
                            <Route path="/shop">
                                <Shop categorys={category} products={products} />
                            </Route>
                            <Route path="/detail/:id">
                                <About products={products} />
                            </Route>
                            <Route path="/contact">
                                <Contact />
                            </Route>
                            <Route path="/blog">
                                <Blog />
                            </Route>
                            <Route path="/cart">
                                <Cart />
                            </Route>
                            <Route path="/cate/:id">
                                <Categorys categorys={category} products={products} />
                            </Route>
                        </Switch>
                    </Main>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
