import React from "react";
import Product from "./Product";

const ProductFeed = ({ products }) => {
  return (
    <div className="relative z-50 px-4">
      <div className="grid md:-mt-52 grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:grid-cols-4">
        {products
          ?.slice(0, 4)
          .map(({ id, title, price, description, category, image }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
        <div className="md:col-span-full md:pt-5">
          <img
            src="https://links.papareact.com/dyz"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="md:col-span-2">
          {products
            ?.slice(4, 5)
            .map(({ id, title, price, description, category, image }) => (
              <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
              />
            ))}
        </div>
        {products
          ?.slice(5, products.length)
          .map(({ id, title, price, description, category, image }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductFeed;
