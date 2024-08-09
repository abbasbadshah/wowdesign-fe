import { Layout } from "../../components/layout/layout";
import { Section } from "../../components/shared";
import HeroSlider from "./Hero";
import { HomeMainSectionOne } from "./Main";
import { News } from "./News";
import { FeatureProjects } from "./Feature/Projects";
import { FeaturePorfolios } from "./Feature/Portfolio";
import HomeSliderTwo from "./Hero/Slider";
import HomeAboutSection from "./About/about";
import HappyCustomers from "./Happy Customers/happycustomers";
import { TrustedCompanies } from "./Trusted By/trustedbycompanies";
import { WowNewsTwo } from "./News/news";
export const Home = () => {
  return (
    <Layout headerType="1">
      <HomeSliderTwo />
      <Section>
        <TrustedCompanies />
      </Section>
      <Section>
        <HomeMainSectionOne />
      </Section>
      <Section>
        <FeatureProjects />
      </Section>
      <Section>
        <FeaturePorfolios />
      </Section>
      <Section>
        <HappyCustomers />
      </Section>
      <Section>
        <WowNewsTwo />
      </Section>
    </Layout>
  );
};
