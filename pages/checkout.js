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
          <div className="flex p-2">
            <Image
              src="https://links.papareact.com/ikj"
              width={1020}
              height={250}
              objectFit="contain"
            />
            <div className="bg-gray-200 flex-grow p-4 space-y-4 basis-1/4">
              <h1 className="text-2xl font-semibold">
                Subtotal: ({items.length} items)
              </h1>
              <h1 className="text-xl font-bold">${total}</h1>
              <button
                disabled={session.status !== "authenticated"}
                className={` ${
                  session.status === "authenticated"
                    ? "from-yellow-200 to-yellow-500 active:from-yellow-500 active:to-yellow-200 text-black"
                    : "cursor-not-allowed border-gray-300 from-gray-400 to-gray-900"
                } bg-gradient-to-b w-full relative bottom-0 py-2 border`}>
                Proceed to checkout
              </button>
            </div>
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
