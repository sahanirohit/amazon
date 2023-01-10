import Image from "next/legacy/image";
import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSession } from "next-auth/react";

const checkout = () => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const session = useSession();
  return (
    <div className="">
      <Header />

      <main className="">
        <div className="flex-grow m-5 shadow-sm">
          <div className="flex mb-2 sm:justify-between gap-4">
            <div className="sm:flex hidden item-center ">
              <Image
                src="https://links.papareact.com/ikj"
                width={1020}
                height={250}
                objectFit="contain"
              />
            </div>
            {items.length > 0 && (
              <div className=" bg-white p-4 min-h-[18vh] flex flex-col sm:max-w-sm w-full justify-between">
                <div className="">
                  <h1 className="sm:text-2xl text-left font-semibold">
                    Subtotal: ({items.length} items)
                  </h1>
                  <h1 className="sm:text-xl font-bold">${total}</h1>
                </div>

                <button
                  disabled={session.status !== "authenticated"}
                  className={` ${
                    session.status === "authenticated"
                      ? ""
                      : "cursor-not-allowed"
                  } bg-gradient-to-b flex-none max-w-sm text-sm px-4 4 w-full from-yellow-200 to-yellow-500 active:from-yellow-500 active:to-yellow-200 text-black py-2 border`}>
                  Proceed to checkout
                </button>
              </div>
            )}
          </div>

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
