// src/components/Categories.js
import React from 'react';
import cat1 from '../../assets/img/cat-1.jpg';  // Adjust the path according to your file structure
import cat2 from '../../assets/img/cat-2.jpg';
import cat3 from '../../assets/img/cat-3.jpg';
import cat4 from '../../assets/img/cat-4.jpg';
import cat5 from '../../assets/img/cat-5.jpg';
import cat6 from '../../assets/img/cat-6.jpg';

const Categories = () => {
  const categories = [
    { id: 1, name: "Men's dresses", image: cat1, products: 15 },
    { id: 2, name: "Women's dresses", image: cat2, products: 15 },
    { id: 3, name: "Baby's dresses", image: cat3, products: 15 },
    { id: 4, name: "Accerssories", image: cat4, products: 15 },
    { id: 5, name: "Bags", image: cat5, products: 15 },
    { id: 6, name: "Shoes", image: cat6, products: 15 },
  ];

  return (
    <div className="container-fluid pt-5">
      <div className="row px-xl-5 pb-3">
        {categories.map(category => (
          <div className="col-lg-4 col-md-6 pb-1" key={category.id}>
            <div className="cat-item d-flex flex-column border mb-4" style={{ padding: '30px' }}>
              <p className="text-right">{category.products} Products</p>
              <a href="" className="cat-img position-relative overflow-hidden mb-3">
                <img className="img-fluid" src={category.image} alt={category.name} />
              </a>
              <h5 className="font-weight-semi-bold m-0">{category.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
