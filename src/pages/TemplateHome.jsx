import Navbar from "../components/Navbar";
import LogoNav from "../components/LogoNav";

export const TemplateHome = () => {
  return (
    <div>
      <LogoNav />
      <Navbar />
      <img src="/images/HomepagePhoto.jpg" alt="test" className="test" />
    </div>
  );
};
