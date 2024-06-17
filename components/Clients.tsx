import React from "react";
import { InfiniteMovingCards } from "./InfiniteMovingCards";
import { testimonials } from "@/data";

const Clients = () => {
  return (
    <>
      <div className="py-20" id="projects">
        <h1 className="heading">
          Kind Words From
          <span className="text-purple"> Previous Employers</span>
        </h1>

        <div className="flex flex-col items-center ">
          <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
