import React from 'react';
import Cart from './../components/cart';



const Menu = props => {
  
  return ( 
    <div className="container">
    <h1>Menue</h1>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th className='text-center' scope="col">Price</th>
      <th className='text-center' scope="col">Shoping Cart</th>
    </tr>
  </thead>
  <tbody>
  {props.products.map(product=>(
   <tr key={product.id}>
    <td>{product.name}</td>
    <td className='text-center'>{product.price}</td>
    <td className='text-center'><Cart onClick={props.onClick} product={product}/></td>
   </tr> 
  ))}
  </tbody>
</table>
    </div>
   );
}
 
export default Menu;