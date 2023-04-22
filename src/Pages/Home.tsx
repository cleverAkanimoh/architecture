import { Link } from "react-router-dom";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

import BoxContainer from "../Components/home/BoxContainer";
import ImageArea from "../Components/home/ImageArea";
import WelcomeComp from "../Components/home/WelcomeComp";
import useWindowTitle from "../hooks/useWindowTitle";
import defaultImage from "../assets/images/defaultimage.jpg";

export default function Home() {
  useWindowTitle("Home | extra text goes here");

  return (
    <section className="general-flex">
      <div className="relative z-0">
        <button className="absolute bg-white py-2 px-5 z-10 hover:bg-opacity-60 font-bold text-xl text-black transition-all top-[40%] left-[0] rounded-r-full"><VscChevronLeft/></button>
        <button className="absolute bg-white py-2 px-5 z-10 hover:bg-opacity-60 font-bold text-xl text-black transition-all top-[40%] right-[0] rounded-l-full"><VscChevronRight/></button>
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

      <div className="w-full h-[230px] my-4 flex flex-col md:flex-row items-center text-left justify-center md:justify-between">
        <aside className="h-[140px]">
          <h1 className="text-[1.3rem]">new house plans</h1>
          <p>
            Curated monthly, these house plans represent current market trends
          </p>
        </aside>

        <div className="w-fit flex self-end md:self-center">
          <Link
            to={"view all"}
            className=" bg-blue-400 text-white rounded-r-full py-2 px-10"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
