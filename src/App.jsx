import React, { useState } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Menue from './pages/menue';
import Navbar from './components/Nav';
import ShopingCart from './pages/shopingcart';
import Login from './pages/login';
import Admin from './pages/admin';
import AddProduct from './pages/productform';
import Error from './error';


const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Burger", price: 50, count: 0, isInCart: false },
    { id: 2, name: "Friez", price: 40, count: 0, isInCart: false },
    { id: 3, name: "Cola", price: 15, count: 0, isInCart: false },
    { id: 4, name: "Water", price: 5, count: 0, isInCart: false }
  ]);

 

  const inCart = (product) => {
    const updatedProducts = [...products];
    const index = updatedProducts.indexOf(product);
    updatedProducts[index] = { ...updatedProducts[index] };
    updatedProducts[index].isInCart = !updatedProducts[index].isInCart;
    updatedProducts[index].count = updatedProducts[index].count + 1; // add product one
    setProducts(updatedProducts);
  };

  const handleReset = () => {
    const resetProducts = products.map((p) => {
      p.count = 0;
      return p;
    });
    setProducts(resetProducts);
  };

  const handleIncrement = product => {
    const updatedProducts = [...products];
    const index = updatedProducts.indexOf(product);
    updatedProducts[index] = { ...updatedProducts[index] };
    updatedProducts[index].count = updatedProducts[index].count + 1;
    setProducts(updatedProducts);
  };

  const handleDelete = (product, admin = false) => {
    let updatedProducts = [...products];
    if (admin) {
      updatedProducts = updatedProducts.filter((p) => p.id !== product.id);
      setProducts(updatedProducts);
    } else {
      const index = updatedProducts.indexOf(product);
      if (index !== -1) {
        updatedProducts[index].isInCart = false;
      }
      setProducts(updatedProducts);
    }
  };

  const handleEdit = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
  };
  const addProduct = (newProduct) => {
    const productWithId = { ...newProduct, id: products.length + 1 };
    setProducts([...products,productWithId]);
  };

  return (
    <BrowserRouter basename="/">
      <Navbar />
      <Routes>
        <Route
          index
          element={<Menue products={products} onClick={inCart} />} />
        <Route
          path="shoppingCart"
          element={
            <ShopingCart
              products={products.filter((p) => p.isInCart)}
              onReset={handleReset}
              onIncrement={handleIncrement}
              onDelete={handleDelete}
            />
          }
        />
        <Route path="login" element={<Login />} />
        <Route
          path="admin"
          element={
            <Admin
              products={products}
              onDelete={handleDelete}
            />
          }
        />
        <Route path="product/:id" element={<AddProduct
        products={products}
        onEdit={handleEdit}
        OnAdd={addProduct} 
        />} />
      <Route path='*' element={<Error />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;






