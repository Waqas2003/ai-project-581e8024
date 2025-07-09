import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="col-md-4">
      <div className="card">
        <img src={product.image} alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">Price: ${product.price}</p>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
```

**Backend (Node.js/Express)**