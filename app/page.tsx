"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Food {
  id: number;
  name: string;
  price: string;
  image: string;
  reviewCount: string;
}

export default function Home() {
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
        setFood(data.recipes);
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

  const todaysSpecial = food.slice(0, 3);

  return (
    <>
      <div className="min-h-[90vh] flex flex-col justify-center items-center pt-16 md:pt-0">
        <section className="landing flex flex-col md:flex-row justify-around items-center gap-2 md:gap-14">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Enjoy the Best <span className="text-yellow-700">Burger</span> in <br className="md:hidden" /> the Town!
            </h1>
            <p className="text-base md:text-lg mb-4 max-w-[400px]">
              Craving something delicious? Our burgers are made with the finest ingredients, crafted to perfection just for you. Come take a bite of the best flavors in town!
            </p>
            <Button>Explore now</Button>
          </div>
          <div className="flex justify-center mt-2 md:mt-0">
            <Image src={'/burger2.png'} height={400} width={350} alt="Burger Image" />
          </div>
        </section>
      </div>

      <section className="h-auto mx-auto py-8">
        <div className="mx-auto text-xl">
          <h1 className="text-center text-2xl font-semibold mb-6">Today's Special</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {todaysSpecial.map((foodItem: Food) => (
              <Card key={foodItem.id} className="border shadow-md hover:bg-slate-900">
              <div className="w-full">
                <Image
                  src={foodItem.image}
                  alt={foodItem.name}
                  width={700} // Control width here
                  height={150} // Reduce height to 150px or adjust as needed
                  className=" h-[300px] object-contain rounded-t-lg" // Tailwind class for the image
                />
              </div>
              <CardContent className="text-center p-4">
                <CardTitle>{foodItem.name}</CardTitle>
                <p>{foodItem.price}$</p>
                <p>Reviews: {foodItem.reviewCount}</p>
              </CardContent>
              <CardFooter className="flex justify-center p-4">
                <Button>Order now</Button>
              </CardFooter>
            </Card>
            
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
