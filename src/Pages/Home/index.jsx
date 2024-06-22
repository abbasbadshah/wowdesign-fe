import { Layout } from "../../components/layout/layout";
import { Section } from "../../components/shared";
import HeroSlider from "./Hero";
import { HomeMainSectionOne } from "./Main";
import { News } from "./News";

export const Home = () => {
  return (
    <Layout>
      <HeroSlider />
      <Section>
        <HomeMainSectionOne />
      </Section>
      <Section>
        <News />
      </Section>
    </Layout>
  );
};
