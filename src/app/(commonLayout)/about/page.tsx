import DynamicHeader from "../components/DynamicHeader.jsx";
import AdventureWebsite from "../components/about/AdventureWebsite.jsx";
import WhyChooseUs from "../components/about/WhyChooseUs.jsx";
import GuideAgentMember from "../components/about/GuideAgentMember.jsx";
import TestimonialSection from "../components/about/TestimonialSection.jsx";

const AboutUsPage = () => {
  return (
    <div>
      <DynamicHeader pageName={"About Us"} />
      <AdventureWebsite />
      <WhyChooseUs />
      <GuideAgentMember />
      <TestimonialSection />
    </div>
  );
};

export default AboutUsPage;
