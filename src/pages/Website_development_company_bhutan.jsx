import { Helmet } from "react-helmet";
import HeroSection from "../components/home/HeroSection";
import MainSection from "../components/home/MainSection";

function Website_development_company_bhutan() {
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
          Top Digital Marketing and Web Development in Bhutan - Info Era{" "}
        </title>
        <meta
          name="description"
          content="Info Era Software Services Pvt. Ltd is Bhutan's best online marketing and digital agency, specializing in ecommerce and responsive web design for all industries."
        />
        <meta
          name="keywords"
          content="best online marketing company, digital marketing agency in bhutan, digital marketing ecommerce, web design for construction company, top online marketing companies, responsive web development"
        />
        <meta name="author" content="Info Era Software Servides Pvt Ltd" />
        <meta name="Publisher" content="Info Era Software Services Pvt. Ltd" />
      </Helmet>
      <HeroSection/>
      <MainSection/>
    </>
  );
}

export default Website_development_company_bhutan;
