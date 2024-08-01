import { Layout } from "../../components/layout/layout";
import { Section } from "../../components/shared";
import HeroSlider from "./Hero";
import { HomeMainSectionOne } from "./Main";
import { News } from "./News";
import { FeatureProjects } from "./Feature/Projects";
import { FeaturePorfolios } from "./Feature/Portfolio";
import HomeSliderTwo from "./Hero/Slider";

export const Home = () => {
  return (
    <Layout headerType="2">
      <HomeSliderTwo />
      <Section>
        <HomeMainSectionOne />
      </Section>
      <Section>
        <FeatureProjects />
      </Section>
      <Section>
        <News />
      </Section>
      <Section>
        <FeaturePorfolios />
      </Section>
    </Layout>
  );
};
