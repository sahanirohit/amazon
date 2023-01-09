import Image from "next/legacy/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeFromBasket, selectItems } from "../slices/basketSlice";

const CheckoutProduct = ({
  id,
  title,
  price,
  description,
  category,
  rating,
  image,
}) => {
  // console.log(rating);
  const dispatch = useDispatch(selectItems);

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className="w-full bg-white grid grid-cols-5 gap-4 p-5">
      <div className="">
        <Image src={image} width={200} height={200} objectFit="contain" />
      </div>
      <div className=" col-span-3 flex flex-col justify-center space-y-3">
        <h1 className="">{title}</h1>
        <p className=" line-clamp-3">{description}</p>
        <div className=" flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <AiFillStar key={i} className="text-yellow-500 h-5" />
            ))}
        </div>
        <p className="">${price}</p>
      </div>
      <div className="flex flex-col px-4 justify-center">
        <button className="my-2 rounded-sm text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border p-2 active:from-yellow-500 active:to-yellow-300 focus:outline-none border-yellow-300">
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
