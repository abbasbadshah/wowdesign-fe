import { Header } from "../common/Header";
import { Footer } from "../common/Footer";

export const Layout = ({ children, Classes }) => {
  return (
    <div className="flex flex-col text-left">
      <Header />
      <main className={Classes}>{children}</main>
      <Footer />
    </div>
  );
};
