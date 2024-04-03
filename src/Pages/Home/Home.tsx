import ContactSection from "@/Section/ContactSection/ContactSection";
import HomeHeader from "@/Section/HomeHeader/HomeHeader";
import OverYears from "@/Section/OverYears/OverYears";
import SkillsHome from "@/Section/SkillsHome/SkillsHome";

const Home = () => {
  return (
    <>
      <div className="Home">
        <HomeHeader />
        <SkillsHome />
        <OverYears />
        <ContactSection />
      </div>
    </>
  );
};

export default Home;
