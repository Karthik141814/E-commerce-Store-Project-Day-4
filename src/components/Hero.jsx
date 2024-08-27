import React from "react";

import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";
import { Link } from "react-router-dom";

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className="grid grid-cols-2 gap-24 items-center  px-8">
      <div>
      <h1 className="max-w-1.5xl text-3xl font-bold tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 font-weight: 700">
        "Welcome to Karthik Store- Where Comfort Meets Style" 
        </p>
        <p className="mt-8 max-w-xl text-lg leading-8 font-weight: 400">
        "Explore our exclusive collection of elegant and modern furniture designed to enhance your living spaces."
        </p>
        <p className="mt-8 max-w-xl text-lg leading-8 font-weight: 300">
        At Karthik Store, we believe that every home deserves furniture that reflects its owner’s style and comfort. Our carefully curated collection is designed to bring warmth, functionality, and elegance to any room. Discover the perfect pieces to transform your space today."
        </p>
        <div className="mt-10">
          <Link to="/products" className="btn btn-primary capitalize" >
            our Products
          </Link>
        </div>
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box w-80">
        {carouselImages.map((image, index) => {
          return (
            <div className="carousel-item" key={image}>
              <img
                src={image}
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
