import { Layout } from "../../components/layout/layout";
import { Section } from "../../components/shared";
import HeroSlider from "./Hero";
import { HomeMainSectionOne } from "./Main";
import { News } from "./News";
import { FeatureProjects } from "./Feature/Projects";
import { FeaturePorfolios } from "./Feature/Portfolio";

export const Home = () => {
  return (
    <Layout>
      <HeroSlider />
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
