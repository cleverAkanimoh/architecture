import HomePlansComp from "./HomePlansComp";

const HomePlanContainer = () => (
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
);

export default HomePlanContainer;
