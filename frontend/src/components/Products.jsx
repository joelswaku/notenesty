import React, { useState, useEffect } from 'react';

function Products({ searchTerm }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <div key={product.id} className="border rounded-lg p-4 shadow-sm">
          <img src={product.image} alt={product.title} className="w-full h-32 object-contain" />
          <h4 className="mt-2 font-semibold">{product.title}</h4>
          <p className="text-sm text-gray-600">${product.price}</p>
          <p className="text-xs text-gray-400">{product.category}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
