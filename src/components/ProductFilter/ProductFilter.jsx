import React, { useState } from 'react';

function ProductFilter({ setFilteredProducts, products }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleSearch = () => {
    const searchTerm = searchQuery.toLowerCase();
    let filtered = products.filter(product => (
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
    ));

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    setFilteredProducts(filtered);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    filterProducts(category);
  };

  const filterProducts = (category) => {
    const searchTerm = searchQuery.toLowerCase();
    let filtered = products.filter(product => (
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
    ));

    if (category !== 'all') {
      filtered = filtered.filter(product => product.category === category);
    }
    setFilteredProducts(filtered);
  };

  const handleSortByName = () => {
    const sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
    setFilteredProducts(sortedProducts);
  };

  const handleSortByPrice = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setFilteredProducts(sortedProducts);
  };

  return (
    <div className="filter-container">
        <button onClick={() => handleCategoryChange('all')}>All</button>
        <button onClick={() => handleCategoryChange('burger')}>Burger</button>
        <button onClick={() => handleCategoryChange('drink')}>Drink</button>
      <input style={{borderRadius:'5px'}}
        type="text"
        placeholder="Search by name or category"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleSortByName}>Sort by Name</button>
      <button onClick={handleSortByPrice}>Sort by Price</button>
    </div>
  );
}

export default ProductFilter;
