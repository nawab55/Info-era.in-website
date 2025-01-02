import { Helmet } from "react-helmet";
import HeroSection from "../components/home/HeroSection";
import MainSection from "../components/home/MainSection";
const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta
          name="google-site-verification"
          content="1SjNSasowfU9-J-fvkMaSAPEzrU-x_REXb5QL51dAdU"
        />

        <title> Info Era Software Services Pvt. Ltd. | Software Company</title>
        <meta
          name="description"
          content="Experience top-notch IT solutions with Info Era Software Services Pvt. Ltd., the best software development company in Patna. Explore our services now!"
        />

        <meta
          name="keywords"
          content="Info Era Software Services Pvt Ltd, software development company in patna, best it company in patna, it company in patna for internship, top software development company in patna bihar,patna software company,best software company in patna, Website Designing company, software company, industrial training "
        />
        <meta name="author" content="Info Era Software Servides Pvt Ltd" />
        <meta name="Publisher" content="Info Era Software Services Pvt. Ltd" />
      </Helmet>
      <HeroSection />
      <MainSection />
    </div>
  );
};

export default Home;
