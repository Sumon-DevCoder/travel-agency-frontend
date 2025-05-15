import DynamicHeader from "../components/DynamicHeader.jsx";
import ContactInfoSection from "../components/contact/ContactInfoSection.jsx";

const ContactUsPage = () => {
  return (
    <div>
      <div>
        <DynamicHeader pageName={"Contact Us"} />
        <ContactInfoSection />
      </div>
      <div></div>
    </div>
  );
};

export default ContactUsPage;
