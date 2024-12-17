import React from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = props => {
  const navigate = useNavigate();
    return ( <>
    <div className="container">
    <button 
    onClick={()=>navigate("/product/new")} className='btn btn-primary mt-2'>Add</button>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th className='text-center' scope="col">Price</th>
      <th className='text-center' scope="col">Edit</th>
      <th className='text-center' scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
        {props.products.map(p=>(
            <tr key={p.id}>
                <td>{p.name}</td>
                <td className='text-center'>{p.price}</td>
                <td className='text-center' style={{cursor: "pointer"}}><i onClick={()=> navigate(`/product/${p.id}`)} className="fa-solid fa-pen-to-square"></i></td>
                <td className='text-center' style={{cursor: "pointer"}}><i onClick={()=> props.onDelete(p,true)} className="fa-solid fa-trash"></i></td>
            </tr>
        ))}
  </tbody>
</table>
    </div>
    </> );
}
 
export default Admin;