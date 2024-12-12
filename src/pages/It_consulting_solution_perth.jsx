import { Helmet } from "react-helmet";
import HeroSection from "../components/home/HeroSection";
import MainSection from "../components/home/MainSection";

function It_consulting_solution_perth() {
  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta
          name="google-site-verification"
          content="1SjNSasowfU9-J-fvkMaSAPEzrU-x_REXb5QL51dAdU"
        />

        <title>
          {" "}
          Leading IT and Web Development Solutions in Perth - Info Era{" "}
        </title>

        <meta
          name="description"
          content="Info Era Software Services Pvt. Ltd offers top IT consulting, web design, development, and digital marketing services in Perth. Expert in SEO and software development."
        />

        <meta
          name="keywords"
          content="it consulting solution perth, website development perth, digital marketing agency perth, website design and development services, best website design and seo company, web design companies perth, digital marketing and website development agency, software development experts web app development company"
        />
        <meta name="author" content="Info Era Software Servides Pvt Ltd" />
        <meta name="Publisher" content="Info Era Software Services Pvt. Ltd" />
      </Helmet>
      <HeroSection />
      <MainSection />
    </div>
  );
}

export default It_consulting_solution_perth;
