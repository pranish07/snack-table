import React, { useEffect, useState } from "react";

export default function Search({ data, setData }) {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e) => {
    let value = e.target.value;
    setSearchValue(value);
    let searchedData = data.filter((item) =>
      item.product_name.toLowerCase().includes(value)
    );
    setData(searchedData);
  };

  useEffect(() => {
    if (searchValue) {
      setData(data);
    }
  }, [data]);
  return (
    <div>
      <input type="text" value={searchValue} onChange={handleChange} />
    </div>
  );
}
