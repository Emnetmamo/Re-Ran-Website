import React from 'react';
import { Container } from 'react-bootstrap';
import '../assets/css/Products.css';
import productImage1 from '../assets/images/cat.jpeg'; 
import productImage2 from '../assets/images/cat.jpeg';
import productImage3 from '../assets/images/cat.jpeg';
import productImage4 from '../assets/images/cat.jpeg';
import productImage5 from '../assets/images/cat.jpeg';
import productImage6 from '../assets/images/cat.jpeg';


const Products = () => {
  const products = [
    { id: 1, title: 'Electrical Products', image: productImage1 },
    { id: 2, title: 'Mechanical Products', image: productImage2 },
    { id: 3, title: 'Electromechanical Products', image: productImage3 },
    { id: 4, title: 'Educational Materials', image: productImage4 },
    { id: 5, title: 'Vertical Transport Systems', image: productImage5 },
    { id: 6, title: 'Pumps & Generators', image: productImage6 },
  ];

  return (
    <div className="products-page">
      <div className="hero-section">
        <h1>Our Products</h1>
        <p>Explore our wide range of products</p>
      </div>
      <Container className="carousel-container">
        <div className="carousel">
          {products.map((product, index) => (
            <div key={product.id} className="carousel-item">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Products;
