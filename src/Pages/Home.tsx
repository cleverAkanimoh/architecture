import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

import BoxContainer from "../Components/home/BoxContainer";
import ImageArea from "../Components/home/ImageArea";
import WelcomeComp from "../Components/home/WelcomeComp";
import useWindowTitle from "../hooks/useWindowTitle";
import defaultImage from "../assets/images/defaultimage.jpg";
import PlansComp from "../Components/home/PlansComp";
import HomePlansComp from "../Components/home/HomePlansComp";
import FreeHouseComp from "../Components/home/FreeHouseComp";

export default function Home() {
  useWindowTitle("Home | extra text goes here");

  return (
    <section className="general-flex">
      <div className="relative z-0 hidden sm2:block">
        <button className="btn-caro-style left-[0] rounded-r-full">
          <VscChevronLeft />
        </button>
        <button className="btn-caro-style right-[0] rounded-l-full">
          <VscChevronRight />
        </button>

        <ImageArea
          to=".."
          src={defaultImage}
          title="Modern home plan - ID 24606"
        />
      </div>

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
      
      <div className="w-full capitalize">
        <h1 className="h1">Home Plan Collections</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <HomePlansComp
            path01=""
            path02=""
            path03=""
            path04=""
            path05=""
            path06=""
            path07=""
            text01="small house plans"
            text02="modern house plans"
            text03="comtemporary house plans"
            text04="hostel & lodges plans"
            text05="apartment floor plans"
            text06="beach house floor plans"
            text07="traditional house plans"
          />

          <HomePlansComp
            path01=""
            path02=""
            path03=""
            path04=""
            path05=""
            path06=""
            path07=""
            text01="tiny house plans"
            text02="house house plans"
            text03="mediterannean house plans"
            text04="bungalow house plans"
            text05="small cottage house plans"
            text06="farmhouse floor plans"
            text07="beach house floor plans"
          />
          
          <HomePlansComp
            path01=""
            path02=""
            path03=""
            path04=""
            path05=""
            path06=""
            path07=""
            text01="1 bedroom house plans"
            text02="2 bedroom house plans"
            text03="3 bedroom house plans"
            text04="4 bedroom house plans"
            text05="5+ bedroom house plans"
            text06="l-Shaped house plans"
            text07="Unique house plans"
          />
          
        </div>
      </div>
    </section>
  );
}
