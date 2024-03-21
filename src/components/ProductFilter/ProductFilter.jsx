import React, { useState } from 'react';

function ProductFilter({ setFilteredProducts, products }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleSearch = () => {
    const searchTerm = searchQuery.toLowerCase();
    const filtered = products.filter(product => (
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
    ));

    if (selectedCategory !== 'all') {
      setFilteredProducts(filtered.filter(product => product.category === selectedCategory));
    } else {
      setFilteredProducts(filtered);
    }
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  };

  return (
    <div className="filter-container">
      <select id="filter-dropdown" value={selectedCategory} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="burger">Burger</option>
        <option value="drink">Drink</option>
      </select>
      <input
        type="text"
        placeholder="Search by name or category"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default ProductFilter;
