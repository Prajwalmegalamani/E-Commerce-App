import React, { useEffect, useState } from "react";

import { baseUrl } from "../../../config";
import ProductCard from "../ProductCard/ProductCard";
import AxiosClient from "../../../utils/axios-client/axiosClient";

export default function Recommendations() {
  let [items, setItems] = useState([]);
  useEffect(() => {
    AxiosClient({
      url: `${baseUrl}/products?limit=3&skip=${Math.floor(
        Math.random() * 100
      )}`,
      method: "get",
    }).then((res) => {
      setItems(res.data.products);
    });
  }, []);

  return (
    <div>
      <h3 className="section-title">You Might Also Like</h3>
      <div className="card-items">
        {items?.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}
