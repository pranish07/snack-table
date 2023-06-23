import React, { useState } from "react";
import "./snackTable.css";

export const SnackTable = ({data,setData}) => {
  
  const [toggle, setToggle] = useState(false);
  const handleClickPrice = () => {
    const sortedProducts = [...data].sort((a, b) => a.price - b.price);
    setToggle(!toggle);
    setData(sortedProducts);
  };
  const handleClickPriceDesc = ()=>{
    const sortedProducts = [...data].sort((a, b) =>b.price- a.price );
    setToggle(!toggle);
    setData(sortedProducts);
  }
  const handleClickProductName = () => {
    const sortedProducts = [...data].sort((a, b) =>
      a.product_name.localeCompare(b.product_name)
    );
    setData(sortedProducts);
  };

  const handleClickCalories = () => {
    const sortedProducts = [...data].sort((a, b) => a.calories - b.calories);
    setData(sortedProducts);
  };
  const handleClickID = () => {
    const sortedProducts = [...data].sort((a, b) => a.id - b.id);
    setData(sortedProducts);
  };

  return (
    <div>
      <table>
        <tr>
          <th onClick={handleClickID}>ID</th>
          <th onClick={handleClickProductName}>productName</th>
          <th>product Weight</th>
          <th onClick={toggle?handleClickPrice:handleClickPriceDesc}>Price(INR)</th>
          <th onClick={handleClickCalories}>Calories</th>
          <th>Ingredients</th>
        </tr>
        {data.map(
          ({
            id,
            product_name,
            product_weight,
            price,
            calories,
            ingredients,
          }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{product_name}</td>
              <td>{product_weight}</td>
              <td>{price}</td>
              <td>{calories}</td>
              <td>{ingredients + " "} </td>
            </tr>
          )
        )}
      </table>
    </div>
  );
};
