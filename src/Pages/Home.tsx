import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

import BoxContainer from "../Components/home/BoxContainer";
import ImageArea from "../Components/home/ImageArea";
import WelcomeComp from "../Components/home/WelcomeComp";
import useWindowTitle from "../hooks/useWindowTitle";
import defaultImage from "../assets/images/defaultimage.jpg";
import freeImage from "../assets/images/freeplan.jpg";
import PlansComp from "../Components/home/PlansComp";
import HomeList from "../Components/home/HomeList";
import HomePlansComp from "../Components/home/HomePlansComp";

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

      <div className="mt-12">
        <h1 className="h1 border-b-2 border-blue-400">
          Free Sample House Plan
        </h1>

        <p>
          A free sample 4 bedroom house plan with a majestic entrance crowned
          with a 3.5 meter high decor. A covered porte-cochere ensures that you
          can drive all the way up to the entrance of the house without ever
          getting wet. Download this Sample House Plan to get an idea of how
          detailed plans look like.
        </p>

        <div className="w-full mt-5 pb-6 text-left text-gray-light">
          <div className="my-10 md:flex justify-center">
            <picture className="h-full flex-1 md:mr-4">
              <img src={freeImage} alt="free" className="w-full h-full" />
            </picture>

            <div>
              <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">
                What You Get
              </h1>

              <HomeList text="Floor plan, Roof plan" underline={true} />
              <HomeList text="Sections and Elevations" underline={true} />
              <HomeList text="Door and window schedule" underline={true} />
              <HomeList text="Furniture layout" underline={true} />
              <HomeList text="Drainage and Plumbing plans" underline={true} />
              <HomeList text="Electrical drawings" underline={true} />
              <HomeList text="Structural drawings" underline={true} />
              <HomeList
                text="Bills of quantities - without rates"
                underline={true}
              />
              <HomeList
                text="Schedule of materials - without rates"
                underline={true}
              />
              <HomeList text="Security system drawings" underline={false} />

              <p className="text-yellow-600 text-center">
                *Drawings Delivered in PDF and DWG Format
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col items-center justify-center md:flex-row md:gap-2">
            <input
              type="text"
              className="downloadInput-style"
              name="email"
              placeholder="Email"
            />
            <input
              type="text"
              className="downloadInput-style"
              name="name"
              placeholder="Name"
            />
            <button className="w-full bg-yellow-600 text-white h-9 mt-4">
              Download Now
            </button>
          </div>
        </div>
      </div>
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
            text06="traditional house plans"
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
            text01="small house plans"
            text02="modern house plans"
            text03="comtemporary house plans"
            text04="hostel & lodges plans"
            text05="apartment floor plans"
            text06="traditional house plans"
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
            text01="small house plans"
            text02="modern house plans"
            text03="comtemporary house plans"
            text04="hostel & lodges plans"
            text05="apartment floor plans"
            text06="traditional house plans"
            text07="beach house floor plans"
          />
        </div>
      </div>
    </section>
  );
}
