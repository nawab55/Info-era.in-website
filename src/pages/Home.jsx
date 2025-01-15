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

        <title> Info Era Software Services Pvt. Ltd. | Software Company in Patna | IT Company Bihar</title>
        <meta
          name="description"
          content="Experience top-notch IT solutions with Info Era Software Services Pvt. Ltd., the best software development company in Patna. Explore our services now!" />

        <meta
          name="keywords"
          content="Info Era Software Services Pvt Ltd, software development company in patna, best it company in patna, it company in patna for internship, top software development company in patna bihar,patna software company,best software company in patna, Website Designing company, software company, industrial training "
        />
        <link rel="canonical" href="https://infoera.in/" />
        <meta name="content-language" content="EN" />
        <meta name="search engines" content="ALL" />
        <meta name="Robots" content="INDEX,ALL" />
        <meta name="YahooSeeker" content="INDEX, FOLLOW" />
        <meta name="msnbot" content="INDEX, FOLLOW" />
        <meta name="googlebot" content="INDEX, FOLLOW" />
        <meta name="language" content="en-us" />
        <meta name="Expires" content="never" />
        <meta name="rating" content="General" />
        <meta name="Resource-type" content="document" />
        <meta name="Author" content="www.infoera.in" />
        <meta name="document-classification" content="Software & Website development company" />
        <meta name="Distribution" content="Global" />
        <meta name="Product" content="Software Development, Web Development, SEO, GST Billing Software, Web Hosting, Graphic Designing, Mobile App, E-Learning, CRM, ERP, Bulk SMS, Internship, Jobs " />
        <meta name="abstract" content="Software Development company in Patna, Website Development Company in Patna, Bihar, GST Billing Software, Internship, E-Commerce Development, IT Company, Bulk SMS and Voice Call, Graphic Designing, Web Hosting, SEO services provider in Patna Bihar India" />

        <meta name="keyphrases" content="Software development in Patna, Web Design and Development Company in Patna, SEO, Bulk SMS, Customized GST Billing Software developer in Patna, Best IT Company"/>
        <meta name="contactorganization" content="Info Era Software Services Pvt. Ltd."/>
        <meta name="contactzipcode" content="800001"/>
        <meta name="contactcity" content="Patna"/>
        <meta name="contactcountry" content="india"/>
        <meta name="Geography" content="Patna, Bihar, India"/>
        <meta name="country" content="INDIA"/>
        <meta name="contactmobilenumber" content="+91-7008411312"/>
        <meta name="copyright" content="Copyright (c) 2014 by Info Era Software Services Pvt. Ltd." />

        <meta name="Publisher" content="www.infoera.in" />
      </Helmet>
      <HeroSection />
      <MainSection />
    </div>
  );
};

export default Home;
