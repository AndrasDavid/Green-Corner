import Navbar from "../components/Navbar";
import LogoNav from "../components/LogoNav";

export const Template = ({ children }) => {
  return (
    <div>
      <LogoNav />
      <Navbar />
      {children}
    </div>
  );
};
