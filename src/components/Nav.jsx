import React from 'react';
import {NavLink } from 'react-router-dom';

const Navbar = () => {
    return ( 

<nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <NavLink className="navbar-brand text-light" to="/"><i className="fa-solid fa-cart-shopping text-light fs-2"></i></NavLink>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
 <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink style={({isActive})=> ({fontWeight: "bold",color: isActive? "White":"black"})} className="nav-link active" aria-current="page" to="/">Menue</NavLink>
        </li>
      
        <li className="nav-item">
          <NavLink style={({isActive})=> ({fontWeight: "bold",color: isActive? "White":"black"})} className="nav-link active" aria-current="page" to="shoppingCart">Shoping Cart</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={({isActive})=> ({fontWeight: "bold",color: isActive? "White":"black"})} className="nav-link active" aria-current="page" to="admin">Admin</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={({isActive})=> ({fontWeight: "bold",color: isActive? "White":"black"})} className="nav-link active" aria-current="page" to="login">Login</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
     );
}
 
export default Navbar;









 










//  <ul className="navbar-nav">
//         <li className="nav-item">
//           <NavLink style={({isActive})=> ({color: isActive? "red":"White"})} className="nav-link active" aria-current="page" to="/">Menue</NavLink>
//         </li>
      
//         <li className="nav-item">
//           <NavLink style={({isActive})=> ({color: isActive? "red":"White"})} className="nav-link active" aria-current="page" to="/shopingCart">Shoping Cart</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink style={({isActive})=> ({color: isActive? "red":"White"})} className="nav-link active" aria-current="page" to="/admin">Admin</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink style={({isActive})=> ({color: isActive? "red":"White"})} className="nav-link active" aria-current="page" to="/login">Login</NavLink>
//         </li>
//       </ul>
//     </div>
//   <i className="fa-solid fa-cart-shopping text-light fs-2"></i> 