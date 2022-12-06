import React, { useEffect, useState } from "react";
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
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
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

  const addToCart = (product) => {
    const cartItemClone = [...cartItems];
    let isProductExist = false;
    cartItemClone.forEach((ele) => {
      if (product.id == ele.id) {
        ele.qty++;
        isProductExist = true;
      }
    });
    if (!isProductExist) {
      cartItemClone.push({ ...product, qty: 1 });
    }
    return setCartItems(cartItemClone);
  };

  const removeFromCart = (product) => {
    const cartItemsClone = [...cartItems];
    const removeItem = cartItemsClone.filter((ele) => {
      return ele.id !== product.id;
    });
    return setCartItems(removeItem);
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <div className="products">
            <Products data={products} addToCart={addToCart} />
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
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
