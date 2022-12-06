import React from "react";
import "../../css/Filter/Filter.css";
const Filter = ({
  handelFilterBySize,
  size,
  handelFilterBySort,
  sort,
  data,
}) => {
  return (
    <div className="filter-wrapper">
      <h2>Filter</h2>
      <p>Number Of Products {data.length} Item</p>
      <div className="filter-size">
        <span>Filter</span>
        <select
          value={size}
          className="filter-select"
          onChange={handelFilterBySize}
        >
          <option value="all">All</option>
          <option value="xs">XS</option>
          <option value="l">L</option>
          <option value="m">M</option>
          <option value="s">S</option>
        </select>
      </div>

      <div className="filter-size">
        <span>Order</span>
        <select
          className="filter-order"
          onChange={handelFilterBySort}
          value={sort}
        >
          <option value="latest">latest</option>
          <option value="lower">lower</option>
          <option value="highest">highest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
