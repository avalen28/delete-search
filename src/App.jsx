import React, { useState } from "react";
import "./App.css";
import productData from "./products.json";
import ProductCard from "./components/ProductCard";
import SearchInput from "./components/SearchInput";
import AddProductForm from "./components/AddProduct";

function App() {
  const [products, setProducts] = useState(productData);
  const [search, setSearch] = useState("");

  const handleDelete = (id) => {
    const filterProducts = [...products].filter((elem) => elem._id !== id);
    setProducts(filterProducts);
  };

  const handleSearch = (param) => {
    setSearch(param);
  };

  const handleNewProduct = (prod) => {
    const productId = { ...prod, _id: products.length + 1 };
    setProducts([...products, productId]);
  };

  return (
    <>
      <h1>My shopping cart</h1>
      <SearchInput handleSearch={handleSearch} />
      <div className="cart">
        {products
          .filter((elem) =>
            elem.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((elem) => {
            return (
              <ProductCard
                product={elem}
                key={elem._id}
                handleDelete={handleDelete}
              />
            );
          })}
      </div>
      <AddProductForm handleNewProduct={handleNewProduct} />
    </>
  );
}

export default App;
