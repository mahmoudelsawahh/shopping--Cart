import React from "react";
import "../../css/Filter/Filter.css";
import Zoom from "react-reveal/Zoom";

const Filter = ({
  handelFilterBySize,
  size,
  handelFilterBySort,
  sort,
  data,
}) => {
  return (
    <Zoom right opposite cascade collapse>
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
    </Zoom>
  );
};

export default Filter;
