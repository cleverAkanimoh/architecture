import DownloadComp from "./DownloadComp";
import HomeList from "./HomeList";
import freeImage from "../../assets/images/freeplan.jpg";

const FreeHouseComp = () => (
  <div className="my-12 w-full flex flex-col items-center justify-center">
    <h1 className="h1 border-b-2 border-blue-400">Free Sample House Plan</h1>

    <p className="w-full">
      A free sample 4 bedroom house plan with a majestic entrance crowned with a
      3.5 meter high decor. A covered porte-cochere ensures that you can drive
      all the way up to the entrance of the house without ever getting wet.
      Download this Sample House Plan to get an idea of how detailed plans look
      like.
    </p>

    <div className="w-full flex flex-col items-center justify-center mt-5 pb-6 text-left text-gray-light">
      <div className="my-20 md:flex w-full">
        <picture className="md:mr-4">
          <img src={freeImage} alt="free" className="w-full h-full" />
        </picture>

        <div className="w-full md:w-1/2">
          <h1 className="text-xl sm:text-2xl md:text-3xl md:border-b md:border-gray-dim">
            What You Get
          </h1>

          <HomeList text="Floor plan, Roof plan" line={true} />
          <HomeList text="Sections and Elevations" line={true} />
          <HomeList text="Door and window schedule" line={true} />
          <HomeList text="Furniture layout" line={true} />
          <HomeList text="Drainage and Plumbing plans" line={true} />
          <HomeList text="Electrical drawings" line={true} />
          <HomeList text="Structural drawings" line={true} />
          <HomeList
            text="Bills of quantities - without rates"
            line={true}
          />
          <HomeList
            text="Schedule of materials - without rates"
            line={true}
          />
          <HomeList text="Security system drawings" line={false} />

          <p className="text-yellow-600 text-center">
            *Drawings Delivered in PDF and DWG Format
          </p>
        </div>
      </div>

      <DownloadComp />
    </div>
  </div>
);

export default FreeHouseComp;
