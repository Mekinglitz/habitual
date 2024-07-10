// src/components/Main.js
import React from 'react';
import Card from './Card';
import './Main.css';

const products = [
    { id: 9, image: '/hng3/9.png', title: 'Macbook Pro 13-Apple', rating: 4.25, price: 1300.00 },
    { id: 2, image: '/hng3/2.png', title: 'AlienWare 38" Curved Monitor-Dell', rating: 4.25, price: 3000.00 },
    { id: 4, image: '/hng3/4.png', title: 'Bose Noise Cancelling Headphones 700-Bose', rating: 4.25, price: 250.00 },
    { id: 12, image: '/hng3/12.png', title: 'Cort KX100 Electric Guitar', rating: 4.25, price: 309.00 },
    { id: 8, image: '/hng3/8.png', title: 'Leather Palm', rating: 4.25, price: 45.00 },
    { id: 7, image: '/hng3/7.png', title: 'Pro-Ject Debull 111-Pro-ject', rating: 4.5, price: 250.00 },

    { id: 1, image: '/hng3/1.jpg', title: 'Lenovo 16(Carbon Black)',rating: 4.5, price: 250.00 },
    { id: 5, image: '/hng3/5.jpg', title: 'MSI Claw Handheld Gaming System', rating: 4.7, price: 99.99 },
    { id: 15, image: '/hng3/15.jpg', title: 'Apple 13 ipad Pro Standard Glass 256GB', rating: 4.7, price: 99.99 },
    { id: 10, image: '/hng3/10.jpg', title: 'Sony XPERIA I 1V 512GB Smartphone (Violet)', rating: 4.8, price: 119.99 },
    { id: 11, image: '/hng3/11.jpg', title: 'Lenovo L-Go Handheld Gaming System', rating: 4.8, price: 119.99 },
    { id: 6, image: '/hng3/6.jpg', title: 'Microsoft 13"Surface Pro copilot+PC', rating: 4.8, price: 119.99 },
  // Add more products as needed
];

const Main = () => {
  return (
    <main>
      <section className="products-section">
        <h2>Gadgets for you</h2>
        <div className="row">
          {products.slice(0, 3).map(product => (
            <Card key={product.id} {...product} />
          ))}
        </div>
        <div className="row">
          {products.slice(3, 6).map(product => (
            <Card key={product.id} {...product} />
          ))}
        </div>
        <div className="row">
          {products.slice(6).map(product => (
            <Card key={product.id} {...product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
