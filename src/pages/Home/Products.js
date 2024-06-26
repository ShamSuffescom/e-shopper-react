// src/components/ProductsPage.js
import React from 'react';
import product1 from '../../assets/img/product-1.jpg';
import product2 from '../../assets/img/product-2.jpg';
import product3 from '../../assets/img/product-3.jpg';
import product4 from '../../assets/img/product-4.jpg';
import product5 from '../../assets/img/product-5.jpg';
import product6 from '../../assets/img/product-6.jpg';
import product7 from '../../assets/img/product-7.jpg';
import product8 from '../../assets/img/product-8.jpg';

const Products = () => {
  const products = [
    { id: 1, name: "Colorful Stylish Shirt", price: 123.00, image: product1 },
    { id: 2, name: "Colorful Stylish Shirt", price: 123.00, image: product2 },
    { id: 3, name: "Colorful Stylish Shirt", price: 123.00, image: product3 },
    { id: 4, name: "Colorful Stylish Shirt", price: 123.00, image: product4 },
    { id: 5, name: "Colorful Stylish Shirt", price: 123.00, image: product5 },
    { id: 6, name: "Colorful Stylish Shirt", price: 123.00, image: product6 },
    { id: 7, name: "Colorful Stylish Shirt", price: 123.00, image: product7 },
    { id: 8, name: "Colorful Stylish Shirt", price: 123.00, image: product8 },
  ];

  return (
    <div className="container-fluid pt-5">
      <div className="text-center mb-4">
        <h2 className="section-title px-5"><span className="px-2">Trendy Products</span></h2>
      </div>
      <div className="row px-xl-5 pb-3">
        {products.map(product => (
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1" key={product.id}>
            <div className="card product-item border-0 mb-4">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img className="img-fluid w-100" src={product.image} alt={product.name} />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">{product.name}</h6>
                <div className="d-flex justify-content-center">
                  <h6>${product.price.toFixed(2)}</h6>
                  <h6 className="text-muted ml-2"><del>${product.price.toFixed(2)}</del></h6>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light border">
                <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
