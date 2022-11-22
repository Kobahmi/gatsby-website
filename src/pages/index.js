import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1 className="text-3xl font-bold underline">
      Hi people with Tailwind CSS
    </h1>
  </Layout>
);

export default IndexPage;
