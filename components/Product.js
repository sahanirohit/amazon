import React, { useState } from "react";
import Image from "next/legacy/image";
import { AiFillStar } from "react-icons/ai";
// import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

const Product = ({ id, title, price, description, category, image }) => {
  const MAX_RATING = 5;
  const MIN_RATING = 3;
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
  );
  return (
    <div className="relative min-h-[24rem] flex flex-col mt-5 p-10 bg-white">
      <p className="absolute z-40 top-2 text-xs text-gray-400 right-2">
        {category}
      </p>
      <Image
        src={image}
        alt={title}
        objectFit="contain"
        width={200}
        height={200}
      />
      <h2 className="my-2 font-semibold">{title}</h2>
      <div className="flex">
        <AiFillStar className="text-yellow-500" />
        <AiFillStar className="text-yellow-500" />
        <AiFillStar className="text-yellow-500" />
        <AiFillStar className="text-yellow-500" />
        {/* {Array(rating)
          ?.fill()
          .map((_, index) => (
            <AiFillStar className="text-yellow-500" />
          ))} */}
      </div>
      <p className="text-sm my-2 line-clamp-2">{description}</p>
      <Currency quantity={price} />
      <button className="my-2 rounded-sm text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border p-2 active:from-yellow-500 active:to-yellow-300 focus:outline-none border-yellow-300">
        Add to Basket
      </button>
    </div>
  );
};

export default Product;