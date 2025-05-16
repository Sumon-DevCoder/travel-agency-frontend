import TourCategory from "./components/home/TourCategory";
import TravelOffer from "./components/home/TravelOffer";
import WhyChooseUs from "./components/home/WhyChooseUs";

export const metadata = {
  title: "Home Page",
  description: "This is home page",
};

const HomePage = () => {
  return (
    <div className="px-5">
      <TourCategory />
      <TravelOffer />
      <WhyChooseUs />
    </div>
  );
};

export default HomePage;
