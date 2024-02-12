import React from "react";
import "./Table.css";

function Table() {
  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Sold Qty</th>
          <th>Income</th>
          <th>In Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Product A</td>
          <td>100</td>
          <td>₹1000</td>
          <td>50</td>
        </tr>
        <tr className="active-row">
          <td>Product B</td>
          <td>75</td>
          <td>₹1500</td>
          <td>25</td>
        </tr>
        <tr>
          <td>Product C</td>
          <td>100</td>
          <td>₹1000</td>
          <td>50</td>
        </tr>
        <tr className="active-row">
          <td>Product D</td>
          <td>75</td>
          <td>₹1500</td>
          <td>25</td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </table>
  );
}

export default Table;
