import * as React from "react";
import { useEffect } from "react";
import Hero from "../components/Hero";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Service from "../components/Service";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Shop from "../components/Shop";
import Features from "../components/Features";
import Signup from "../components/Signup";
import Footer from "../components/Footer";

const IndexPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Layout>
      <Seo title="Home" />

      <Hero />
      <Service />
      <Shop />
      <Features />
      <Signup />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
