import React, { useState, useEffect } from "react";
//axios
import axios from "axios";

export const ColorDetail = () => {
  const [color, setColor] = useState();

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await axios.get(
        "https://random-data-api.com/api/color/random_color"
      );
      const data = response.data;
      console.log(data);
      setColor(data);
    };
    fetchAPI();
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          width: 50,
          height: 50,
          marginRight: 16,
          backgroundColor: color?.hex_value,
          borderRadius: 50,
        }}
      ></div>
      <h2>Color : {color?.color_name}</h2>
    </div>
  );
};
