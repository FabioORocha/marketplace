import React from 'react';

import "../style/categories.css"

import cat1 from '../assets/images/category1.png';
import cat2 from '../assets/images/category2.png';
import cat3 from '../assets/images/category3.png';
import cat4 from '../assets/images/category4.png';

const categories = [
  { index: 1, src: cat1, text: '', link:'/' },
  { index: 2, src: cat2, text: '', link:'/' },
  { index: 3, src: cat3, text: '', link:'/' },
  { index: 4, src: cat4, text: '', link:'/' }
];

const Categories = () => (
  <div className="categories container">
    {categories.map((category) => (
      <div key={category.index} className="category">
        <a href={category.link}>
          {category.text && <h2 className="category-title">{category.text}</h2>}
          <img src={category.src} alt={category.text} />
        </a>
      </div>
    ))}
  </div>
);

export default Categories;
