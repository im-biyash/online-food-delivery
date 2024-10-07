import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="min-h-[90vh] flex flex-col justify-center items-center pt-16 md:pt-0">
      <section className="landing flex flex-col md:flex-row justify-around items-center gap-2 md:gap-14"> {/* Minimized gap */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Enjoy the Best <span className="text-yellow-700">Burger</span> in <br className="md:hidden" /> the Town!
          </h1>
          <p className="text-base md:text-lg mb-4 max-w-[400px]"> {/* Reduced bottom margin */}
            Craving something delicious? Our burgers are made with the finest ingredients, crafted to perfection just for you. Come take a bite of the best flavors in town!
          </p>
          <Button>Explore now</Button>
        </div>
        <div className="flex justify-center mt-2 md:mt-0"> {/* Reduced margin-top on small screens */}
          <Image src={'/burger2.png'} height={400} width={350} alt="Burger Image" /> {/* Further reduced image size */}
        </div>
      </section>

    </div>
      <section className ="h-80vh mx-auto">

        <div className="mx-auto text-xl ">
          <h1 className="text-center">Todays special</h1>
         <div>
         <Card>
          <CardContent>

            </CardContent>
          </Card>    
         </div>

        </div>
        </section>
        </>
  );
}
