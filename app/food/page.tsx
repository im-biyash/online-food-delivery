"use client"; // Ensure this directive is at the top to make it a client component

import React from "react";
import { useQuery } from "@tanstack/react-query";

const url = "https://dummyjson.com/recipes/1";

// Fetch products from the API
const fetchProducts = async () => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json(); // Ensure the data is returned in JSON format
};

const Datafetching = () => {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  // Log the data to inspect the structure
  console.log(products);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="h-screen">
      <h1>Datas</h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {products?.map((mydata: any) => (
          <div
            key={mydata.id}
            className="border-2 rounded-2xl flex flex-col gap-4 p-4 items-center hover:bg-red-200"
          >
            <img src={mydata.image} alt="myimage" className="h-[250px]" />
            <h1>{mydata.name}</h1>
            <h1>{mydata.price}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Datafetching;
