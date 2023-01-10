import Image from "next/legacy/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  removeFromBasket,
  addToBasket,
  selectItems,
} from "../slices/basketSlice";

const CheckoutProduct = ({
  id,
  title,
  price,
  description,
  category,
  rating,
  image,
}) => {
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
    };

    dispatch(addToBasket(product));
  };
  const dispatch = useDispatch(selectItems);

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className="w-full bg-white grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-5 gap-4 p-5">
      <div className="">
        <Image src={image} width={200} height={200} objectFit="contain" />
      </div>
      <div className="col-span-4 lg:col-span-3 flex flex-col justify-center space-y-3">
        <h1 className="font-bold">{title}</h1>
        <p className=" line-clamp-3">{description}</p>
        <div className=" flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <AiFillStar key={i} className="text-yellow-500 h-5" />
            ))}
        </div>
        <p className="font-bold">${price}</p>
      </div>
      <div className="lg:hidden hidden sm:block"></div>
      <div className="flex flex-col sm:col-span-2 lg:col-auto lg:px-4 justify-center">
        <button
          onClick={addItemToBasket}
          className="my-2 rounded-sm text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border p-2 active:from-yellow-500 active:to-yellow-300 focus:outline-none border-yellow-300">
          Add to Basket
        </button>
        <button
          onClick={removeItemFromBasket}
          className="my-2 rounded-sm text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border p-2 active:from-yellow-500 active:to-yellow-300 focus:outline-none border-yellow-300">
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
