import React from "react";
import Image from "next/legacy/image";
import { FaBars, FaCartPlus, FaSearch } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

const Header = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const item = useSelector(selectItems);

  return (
    <header className="">
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src={"https://links.papareact.com/f90"}
            width={150}
            height={40}
            objectFit="contain"
            alt="logo"
            className=" cursor-pointer "
          />
        </div>

        {/* Seach Box */}
        <div className="bg-yellow-400 hidden sm:flex overflow-hidden rounded-l-lg items-center flex-grow">
          <input
            type="text"
            className="h-full focus:outline-none p-3 flex-grow flex-shrink"
          />
          <FaSearch className="w-12 text-black" />
        </div>

        {/* Right */}
        <div className="text-white flex items-center text-xs mx-6 space-x-6 whitespace-nowrap">
          <div
            onClick={!session ? () => signIn() : () => signOut()}
            className="link cursor-pointer">
            <p className="">
              {status === "authenticated"
                ? `Hello ${session.user.name}`
                : `Sign In`}
            </p>
            <p className=" font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p className="">Returns</p>
            <p className="">& Orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="link relative flex items-center space-x-1 cursor-pointer">
            <span className=" absolute -top-2 -right-2 md:right-7 w-4 h-4 bg-yellow-400 text-center rounded-full text-black">
              {item.length}
            </span>
            <FaCartPlus className=" text-xl" />
            <p className="hidden md:inline mt-2">Basket</p>
          </div>
        </div>
      </div>
      {/* Bottom Nav Menu */}
      <div className="flex items-center space-x-3 text-white pl-6 p-2 bg-amazon_blue-light">
        <p className="flex items-center space-x-1">
          <FaBars className="" />
          <span className="">All</span>
        </p>
        <p className="">Prime Video</p>
        <p className="">Amazon Business</p>
        <p className="">Today's Deals</p>
        <p className="hidden lg:inline-flex">Electronics</p>
        <p className="hidden lg:inline-flex">Food & Grocery</p>
        <p className="hidden lg:inline-flex">Prime</p>
        <p className="hidden lg:inline-flex">Buy Again</p>
        <p className="hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
