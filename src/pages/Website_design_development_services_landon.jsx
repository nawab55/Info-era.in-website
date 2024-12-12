import { Helmet } from "react-helmet";
import HeroSection from "../components/home/HeroSection";
import MainSection from "../components/home/MainSection";

function Website_design_development_services_landon() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta
          name="google-site-verification"
          content="1SjNSasowfU9-J-fvkMaSAPEzrU-x_REXb5QL51dAdU"
        />
        <title>
          {" "}
          Professional Web Design and Development Services - Info Era{" "}
        </title>
        <meta
          name="description"
          content="Info Era Software Services Pvt. Ltd offers expert website design, ecommerce development, and WordPress solutions. Serving London and India with top-notch web services."
        />
        <meta
          name="keywords"
          content="website design and development services, ecommerce website development agency, wordpress website development company, web design & development services, london web development agency, website design & web development in india, web design company in london, professional web design services"
        />
        <meta name="author" content="Info Era Software Servides Pvt Ltd" />
        <meta name="Publisher" content="Info Era Software Services Pvt. Ltd" />
      </Helmet>
      <HeroSection />
      <MainSection />
    </>
  );
}

export default Website_design_development_services_landon;
