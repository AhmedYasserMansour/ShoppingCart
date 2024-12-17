import React from 'react';

const ShopingCart = props => { 
  
  return ( 
    <>
      <div className='container'>
       {props.products.length > 0 ?  <button className='btn btn-secondary mt-2' onClick={props.onReset}>Reset</button>: <h2>No Products</h2>}
        {props.products.map(p => {
          const classes = p.count === 0 ? "bg-warning text-dark" : "bg-primary text-light";
          return (
            <div className='d-flex align-items-center' key={p.id}>
              <span className='col-2'>{p.name} </span>
              <span className='col-2'>{p.price} </span>
              <span style={{cursor:"auto",padding:"6px 8px"}} className={`badge m-2 ${classes}`}>{p.count}</span>
              <button className='btn btn-sm btn-primary m-2' onClick={() => props.onIncrement(p)}>+</button>
              <i style={{cursor:"pointer"}} onClick={() => props.onDelete(p)} className="fa-solid fa-trash fs-4 m-2 text-danger"></i>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ShopingCart;
