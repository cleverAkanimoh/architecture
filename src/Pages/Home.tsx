
import useWindowTitle from "../hooks/useWindowTitle";

import BoxContainer from "../Components/home/BoxContainer";

import React from "react";
import WelcomeComp from "../Components/home/WelcomeComp";
import PlansComp from "../Components/home/PlansComp";
import FreeHouseComp from "../Components/home/FreeHouseComp";
import HomePlanContainer from "../Components/home/HomePlanContainer";
import CustomCarousel from "../Components/home/CustomCarousel";

export default function Home() {
  useWindowTitle("Home | extra text goes here");

  return (
    <section className="general-flex">

      <CustomCarousel />

      <WelcomeComp
        className="pt-2 pb-6"
        heading="welcome to architecture.com"
        text="If you're looking to design your dream home but don't know where to begin, you're in the right place! At Architecture.com, we offer readymade house plans created by top floor plan designers. You can download one of our existing plans or place a *custom order with different specifications!"
      />

      <div className="cardsContainer">
        <BoxContainer
          src="https://imgbox.io/ib/xNksi2f9tC.png"
          title="customize any plan"
          desc="You've found a house plan you really like, but you'd like the rooms to be oriented differently. Or perhaps you'd like to add another bedroom, an office, a garage, or remove something? Our in-house experts can customize your floor plans to meet your exact needs!"
        />

        <BoxContainer
          src="https://imgbox.io/ib/WrQXSSh79Q.png"
          title="best plan guaranteed"
          desc="We have a wide range of styles at the best possible prices, whether you're looking for a low-cost house plan or a luxurious mansion design, we have it. Our house plans start at just $99."
        />

        <BoxContainer
          src="https://imgbox.io/ib/xNksi2f9tC.png"
          title="best customer support"
          desc="From 9 am to 4 pm GMT +03, Monday through Friday our dedicated support staff are available to assist you in finding the ideal plan for your home. If you'd like to inquire about customization options, please contact us. We'll be glad to help."
        />
      </div>

      <PlansComp
        heading="New House Plans"
        text="Curated monthly, these house plans represent current market trends"
        path="view new"
      />

      <PlansComp
        heading="Trending House Plans"
        text="Explore our newest house plans added on a weekly basis"
        path="view trending"
      />

      <FreeHouseComp />

      <HomePlanContainer />
    </section>
  );
}
