"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {Button} from "../../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Food {
  id: number;
  name: string;
  price: string;
  image: string; 
  reviewCount: string
}

const Page = () => {
  const [food, setFood] = useState<Food[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/recipes");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setFood(data.recipes); // Ensure that data.recipes is structured correctly
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


  return (
  
    <div className="h-screen p-4">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-3 gap-9">
        {food && food.map((foods: Food) => (
          <Card key={foods.id} className=" w-[300px] rounded-lg border shadow-md flex flex-col items-center justify-center hover:bg-slate-300">
            <CardHeader className="">
              <div>

              <Image
                src={foods.image}
                alt={foods.name}
                width={300}
                height={200}
                className=" rounded-lg object-contain "
              />
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <CardTitle>{foods.name}</CardTitle>
              <p>{foods.reviewCount}$</p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button className="mb-3">Order now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Page;
