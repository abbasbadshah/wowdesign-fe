import {
  HeaderStyleOne,
  HeaderStyleTwo,
  HeaderStyleThree,
} from "../common/Header";
import { Footer } from "../common/Footer";

export const Layout = ({ children, Classes, headerType = "1" }) => {
  const renderHeader = () => {
    switch (headerType) {
      case "3":
        return <HeaderStyleThree />;
      case "2":
        return <HeaderStyleTwo />;
      case "1":
      default:
        return <HeaderStyleOne />;
    }
  };

  return (
    <div className="flex flex-col text-left">
      {renderHeader()}
      <main className={Classes}>{children}</main>
      <Footer />
    </div>
  );
};
