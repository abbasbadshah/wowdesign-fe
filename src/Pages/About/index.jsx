import { Layout } from "../../components/layout/layout";
import { AboutSectionOne } from "./Section1/section1";
import { AboutSectionTwo } from "./Section2/section2";
import { AboutSectionThree } from "./Section3/section3";
import { AboutSectionFour } from "./Section4/section4";
import { AboutSectionFIve } from "./Section5/section5";

export const AboutCompany = () => {
  return (
    <Layout headerType="3">
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
      <AboutSectionFour />
      <AboutSectionFIve />
    </Layout>
  );
};
