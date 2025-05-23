import { Helmet } from "react-helmet";
import HeroSection from "../components/home/HeroSection";
import MainSection from "../components/home/MainSection";
const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        <title>
          {" "}
          Info Era Software Services Pvt. Ltd. | Software Company in Patna | IT
          Company Bihar
        </title>
        {/* Google site Verification  Start */}
        <meta
          name="google-site-verification"
          content="KrFf109xrwKNRJTWVipUzNV7ZMCJn5vGEdhwxAWcuSg"
        />
        <link
          href="assets/img/favicon.png"
          rel="icon"
          alt="Favicon"
          title="Favicon"
          aria-label="Favicon - Info Era Software Services Pvt. Ltd."
        />

        <meta
          name="description"
          content="Experience top-notch IT solutions with Info Era Software Services Pvt. Ltd., the best software development company in Patna. Explore our services now!"
        />

        <meta
          name="keywords"
          content="era software solution, software development company in patna, best it company in patna, it company in patna for internship, 
          top software development company in patna bihar,patna software company,best software company in patna, Website Designing company, software company,
           industrial training,  All types of Web Design, Complete Web Design Solution Patna, Satisfied Web Design Clients Patna, 
           E-commerce web solutions Patna, web consultants Patna, Design and Development Patna, Designers group Patna, Website Company Patna, Mobile Web Application Patna, Cheap Rate Website Designing Services Patna "
        />
        {/* <link rel="canonical" href="https://infoera.in/" aria-label="Canonical - Info Era Software Services Pvt. Ltd." /> */}
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
        <meta
          name="document-classification"
          content="Software & Website development company"
        />
        <meta name="Distribution" content="Global" />
        <meta
          name="Product"
          content="Software Development, Web Development, SEO, GST Billing Software, Web Hosting, Graphic Designing, Mobile App, E-Learning, CRM, ERP, Bulk SMS, Internship, Jobs "
        />
        <meta
          name="abstract"
          content="Software Development company in Patna, Website Development Company in Patna, Customer Budget Website Design Company Patna, Experienced Web Designing Company Patna,
        PHP Programing Websites Patna, ASP Programing Websites Patna, Completely Experienced Website Designing Company Patna, offshor development in Patna (Patna), 
        Software Development Company in Patna, Brochure Designing Company Patna, Logo Designing Patna Bihar, Business Card Designs Patna, Cd Presentations Patna, Software Packages Patna, 
        Accounting Software Packages Patna, e-learning Software Patna, Education Software Patna, Banking Web Software Patna, ATM Software Patna, Web based Accounting Software Patna,
         Web Analytics Patna, Web Development Patna, Web traffic solution Patna, Web Server Support Patna, Web page calendar software Patna, Web PHP Programs Patna, 
         useful free Web development programs, Web Business Opportunities Patna, Web Design Training Programs Patna, free tax preparation web softwares Patna, Web Conference programs Patna, Web It Solution Patna, Web Hosting Affiliate Program offers, HiTech Bar Code Business Accounting Web Software Patna,
        Web-mail programs Patna Bihar, Experts Website Designing Company Bhagalpur, Domain Renewal Services Patna Bihar, Domain Registration Services Patna, Graphic Designing Services Patna, 
        Completly Web Application Development Company Patna, Web Page Applications Patna, Web Scripts Directory Patna, Building Interactive Web Softwares, Internet Fax Software Patna,
        Web Page Builders, Web Editors and Web Site programmers Patna, Web Browser Applications, Web Wide Software Patna, web conferencing programs Patna, Web Design Toolbox Patna, 
       Reseller Web Hosting Services Patna Bihar India, Medical Billing Web Softwares Patna Bihar, Advanced Website Designing Services Patna, Web Marketing Solutions Patna, Web Award Programs Patna,
       Web Captioning Software Patna(Patna), Website Security Division Patna, Animated Web Graphics Patna, Bihar, GST Billing Software, Internship, E-Commerce Development, IT Company, Bulk SMS and Voice Call, Graphic Designing, Web Hosting, SEO services provider in Patna Bihar India"
        />

        <meta
          name="keyphrases"
          content="Software development in Patna, Web Design and Development Company in Patna, SEO, Bulk SMS, Customized GST Billing Software developer in Patna,
         Best IT Company,  Ernakulam District Web Design, KTDC Web Design Patna, Patna.com Web Design, Patna.com Web Design, Patna Refineries Web Design, Patna Port Web Design, 
         Patna Special Economic Zone Web design, Patna Kinfra Park Web Design, Web Applications Patna, Cheap Domain Registration Patna, Internet Marketing Group Patna, Brochure Designing Patna, Logo Design Patna, eBrochure Design Patna, 
          Free Websites Patna, Web Animations Patna, Web Ads Patna, Design Jobs Patna, Patna City Designers, Designers Association Patna, Patna Web Design Association,
           City Designers Patna, web hosting Patna, WEB DESIGN Solution Patna, Quick Web Design Patna, custom web site design Patna, webdesigncompanies Patna, internet website development company Patna, 
           internet designers Patna, wbe design Patna, web dseign Patna, web deisgn Patna, web desgin Patna, web desing Patna, web desine Patna, webdesin Patna, webdesine Patna, 
           Patna's Website Designing Company, webdesign Patna, webdezine Patna, web dezin Patna, web desighn Patna, webbdesign Patna, wweb design Patna, web ddesign Patna, web deesign Patna,
            web dessign Patna, webdesiign Patna, web desiggn Patna, web designn Patna, webdesign Patna, webdesigne Patna, webdesig Patna, webdesig Patna, we design Patna, wedesign Patna,
             veb design Patna, Web designs Patna, Website Designing Company in Patna Bihar, Outsource Web design Patna, outsourcing,First Website Dezigning Company in Patna,
              No.1 Webhosting Services Patna,  Customer Budget Website Design Company Patna, Experienced Web Designing Company Patna, 
              PHP Programing Websites Patna Bihar, ASP Programing Websites Patna, Completely Experienced Website Designing Company Patna Bihar, offshor development in Patna (Patna),
               Software Development Company in Patna, Brochure Designing Company Patna, Logo Designing Patna, Business Card Designs Patna, Cd Presentations Patna, Software Packages Patna, 
               Accounting Software Packages Patna, e-learning Software Patna, Education Software Patna, Banking Web Software Patnawebdesign Patna(Patna), webdesigne vyttila ernakulam, Patna,
                website design service provider Patna Bihar, web mail services Patna, web chat services Patna, website redesigning Patna, educational website designs, web hosting support Patna,
                 web dezigning Patna, web ecommerce solutions Patna, free best web templates Patna, website promotion group Patna, Website Design Company in Patna, web flash news Patna, 
                 international standard web designs Patna, website development Patna Bihar, webdesignn tutorials, web design jobs Patna, Webdezine Patna, SEO Specialist Patna, SEO Expert Company Patna, 
                 Standard SEO Service Company Patna, Professional webdesign standards Patna, webdesign Ireland, web designe Patna, web outsourcing company in Patna, World class Website Design Provider Patna, 
                 Static Website Designs Patna, Dynamic Website Designing Patna, Realestate Website Designs Patna, Patna Top Client Satisfied Company, First Website Dezigning Company in Patna,
                  No.1 Webhosting Services Patna, Cheap Rate Website Designing Services Patna, Web Graphics Tutorials Patna, 3D graphics Patna, Web Password protect Software Patna, Web-Based Patient Education Programs, Web and Graphic Design Patna, Web based School Health Solution Patna, Dental Education Websites Patna, Language Learning Web Software Patna, Online Shopping Carts Patna, Ecommerce Solutions Patna, Web opportunities Patna, Classified Website ads, Digital Websites Patna, Around the Web Solutions Patna, Web-based Instant Messaging Programs, Web Radio Programs Patna, Webcalling Software Patna, Web Developer Careers Patna, Web Application Development Patna, Web Career Patna, Online Chat Programs Patna, Website Testing Specialists Patna, Internet Security Softwares Patna, SEO Affiliate Programs Patna,Web designing company Patnan, Patna Web solutions, Web applications Patna, Internet solutions Patna, IT solution provider Patna, Web solution Patna, Web developers Ernakulam, web designing ernakulam, web designing company ernakulam, website designing company ernakulam, website designing ernakulam, web-design company Patna, web design services Patna, web ernakulam, web Patna, web Patna, web Patnan, web news Patna, web latest songs Patna, Business card designing, web solutions ernakulam, web business Patna, web design masters Patna, web masters Patna, web design guru Patna, web design experts ernakulam, web design specialists ernakulam, web design experts Patna, web design expert company Patna, web Software outsourcing Patna, outsourcing web dezign Patna, Web design Patna,Web Design Patna, Kerala,Web Design Patna, Patna Web Designers, Website Design Company, Web design Patna, Web Design Kerala, Website Designing Company in Patna, Web Designing Patna,Website Designing Company in Patna,Web design Patna, Kerala, India, Website Designing Company in Patna, Kerala, India, Outsource Web design Patna, Kerala, India, Web Design and Development Company Patna, Web designing Patna, Web design Outsourcing Company Patna, Web Design Experts Patna, Web Hosting Patna, SEO Specialist Patna, Web Portals Patna, Kerala, India, XHTML CSS Design Patna, SEO Patna, Web Development Patna, design development,, SEO Kerala, XHTML CSS Kerala, Tech Soft India"
        />
        <meta
          name="contactorganization"
          content="Info Era Software Services Pvt. Ltd."
        />
        <meta name="contactzipcode" content="800001" />
        <meta name="contactcity" content="Patna" />
        <meta name="contactcountry" content="india" />
        <meta name="Geography" content="Patna, Bihar, India" />
        <meta name="country" content="INDIA" />
        <meta name="contactmobilenumber" content="+91-7008411312" />
        <meta
          name="copyright"
          content="Copyright (c) 2014 by Info Era Software Services Pvt. Ltd."
        />

        <meta name="Publisher" content="www.infoera.in" />
      </Helmet>
      <HeroSection />
      <MainSection />
    </div>
  );
};

export default Home;
