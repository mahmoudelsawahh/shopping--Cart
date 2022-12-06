import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/products/Products";
import data from "./data.json";
const App = () => {
  const [products, setProducts] = useState(data);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");
  const [cartItems, setCartItems] = useState(data);
  const handelFilterBySize = (e) => {
    const productClone = data;
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
    const newProducts = products.sort((a, b) => {
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
              data={products}
            />
          </div>
        </div>
        <Cart cartItems={cartItems} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
