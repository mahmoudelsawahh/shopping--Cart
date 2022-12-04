import React, { useState } from "react";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/products/Products";
import data from "./data.json";
const App = () => {
  const [products, setProducts] = useState(data);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");
  const productClone = data;

  const handelFilterBySize = (e) => {
    setSize(e.target.value);
    if (e.target.value !== "all") {
      const newProducts = productClone.filter((ele) => {
        return ele.size.indexOf(e.target.value) !== -1;
      });
      setProducts(newProducts);
    } else {
      setProducts(productClone);
    }
  };

  const handelFilterBySort = (e) => {
    const order = e.target.value;
    setSort(order);
    const newProducts = productClone.sort((a, b) => {
      if (order == "lower") {
        return a.price - b.price;
      } else if (order == "highest") {
        return b.price - a.price;
      } else {
        return a.id < b.id;
      }
    });
    return setProducts(newProducts);
  };
  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <div className="products">
            <Products data={products} />
          </div>
          <div className="filter" data={products}>
            <Filter
              handelFilterBySize={handelFilterBySize}
              size={size}
              handelFilterBySort={handelFilterBySort}
              sort={sort}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
