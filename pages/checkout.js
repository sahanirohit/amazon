import Image from "next/legacy/image";
import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import { selectItems } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";

const checkout = () => {
  const items = useSelector(selectItems);
  console.log(items.rating);
  return (
    <div className="">
      <Header />

      <main className="">
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div className=" flex flex-col p-5 space-y-10 bg-white">
            <h1 className=" text-3xl border-b pb-4">
              {items.length === 0
                ? "Your Amazon Basket is empty"
                : "Your Basket"}
            </h1>
          </div>

          <div className="">
            {items.map((item, index) => (
              <CheckoutProduct
                key={index}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default checkout;
