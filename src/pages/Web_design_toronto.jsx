import { Helmet } from "react-helmet";
import HeroSection from "../components/home/HeroSection";
import MainSection from "../components/home/MainSection";

function Web_design_toronto() {
  return (
    <>
      <Helmet>
        <>
          <meta charSet="utf-8" />
          <meta
            content="width=device-width, initial-scale=1.0"
            name="viewport"
          />
          <meta
            name="google-site-verification"
            content="1SjNSasowfU9-J-fvkMaSAPEzrU-x_REXb5QL51dAdU"
          />
          <title>Top Web Design and Development in Toronto- Info Era </title>
          <meta
            name="description"
            content="Info Era Software Services Pvt. Ltd is Toronto's leading web design, development, and SEO agency, offering responsive web solutions, mobile apps, and social media marketing."
          />
          <meta
            name="keywords"
            content="web design in toronto, web design and web development agency, web developer toronto, website developer toronto, web design company toronto, social media in marketing, mobile application and development, responsive web development, best search engine optimization agency, web design an web development, mobile application and development mobile phone application development"
          />
          <meta name="author" content="Info Era Software Servides Pvt Ltd" />
          <meta
            name="Publisher"
            content="Info Era Software Services Pvt. Ltd"
          />
        </>
      </Helmet>
      <HeroSection />
      <MainSection />
    </>
  );
}

export default Web_design_toronto;
