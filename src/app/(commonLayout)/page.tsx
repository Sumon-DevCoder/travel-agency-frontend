import TourCategory from "./components/home/TourCategory";
import TravelOffer from "./components/home/TravelOffer";
import WhyChooseUs from "./components/home/WhyChooseUs";
import NewsSection from "./components/home/NewsSection";
import SubscribeSection from "./components/home/SubscribeSection";
import TestimonialSection from "./components/home/TestimonialSection";
import HeroSection from "./components/home/HeroSection.";

export const metadata = {
  title: "Home Page",
  description: "This is home page",
};

const HomePage = () => {
  return (
    <div className="px-5">
      <HeroSection />
      <TourCategory />
      <TravelOffer />
      <WhyChooseUs />
      <TestimonialSection />
      <NewsSection />
      <SubscribeSection />
    </div>
  );
};

export default HomePage;
