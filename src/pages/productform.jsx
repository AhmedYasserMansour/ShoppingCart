import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AddProduct = ({products, onEdit,OnAdd}) => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [product, setProduct] = useState({name:"",count: 0, price:"", id:""});

  useEffect(()=>{ // updated Product
    const foundProduct = products.find((product) => product.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct); 
    }
  },[id, products]);
 
  const handleChange = (e) => { 
    const { name, value } = e.target;
    setProduct((prev) => ({...prev,[name]: value,})); // or setProduct(_ => {return{...product,[name]: value,}});
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (id === 'new') {
      OnAdd(product)
    } else {
      onEdit(product);
    }
    navigate('/admin'); // return Admin
  };

    return ( <>
   <div className="container">
   <h1>{id === "new" ? "Add Product" : "Edit Product"}</h1>
  <form onSubmit={handleSubmit}>
  <div>
    <label htmlFor="name" className="form-label">Name</label>
    <input
    name='name' 
    value={product.name}
    onChange={handleChange}
    type="text" className="form-control" id="name"/>
  </div>

  <div>
    <label htmlFor="price" className="form-label">Price</label>
    <input
    name='price' 
  value={product.price}
  onChange={handleChange}
    type="text" className="form-control" id="price"/>
  </div>
  <button type="submit" className="btn btn-primary mt-3">{id === "new" ? "Add" : "Edit"}</button>
</form>
       </div>
    </> );
}
 
export default AddProduct;