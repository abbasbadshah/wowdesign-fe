import { Layout } from "../../../components/layout/layout";
import { ProjectImages } from "./Images";
import { ProjectPageDetails } from "./Details";
import { NewsletterCTA } from "../../../components/shared";
export const ProjectDetails = () => {
  return (
    <Layout headerType="3">
      <div className="px-6 lg:px-24 mt-4">
        <ProjectImages />
        <ProjectPageDetails />
        <NewsletterCTA />
      </div>
    </Layout>
  );
};
