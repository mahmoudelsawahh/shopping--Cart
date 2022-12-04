import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/products/Products";

const App = () => {
  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <div className="products">
            <Products />
          </div>
          <div className="filter">filter</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
