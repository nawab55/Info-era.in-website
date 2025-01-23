import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, useLocation, matchPath, } from "react-router-dom";
import RestoreScroll from "./hooks/RestoreScroll";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SkeletonLoader from "./components/loader/Loader";
import BackToTopButton from "./components/BackToTopButton";
import NotFound from "./pages/NotFound";
import StudentDetails from "./components/assessmentTest/StudentDetails";
import AssessmentTest from "./components/assessmentTest/AssessmentTest";
import axios from "axios";

// const WebDesign = lazy(() => import("./courses/webDesignCourse/WebDesign"));
const WebDevelopment = lazy(() => import("./courses/webDevelopmentCourse/WebDevelopment"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const WebsiteDesign = lazy(() => import("./pages/WebsiteDesign"));
const WhyChoose = lazy(() => import("./pages/WhyChoose"));
const WebApplication = lazy(() => import("./pages/WebApplication"));
const DesktopApplication = lazy(() => import("./pages/DesktopApplication"));
const DigitalMarketing = lazy(() => import("./pages/DigitalMarketing"));
const Seo = lazy(() => import("./pages/Seo"));
const BulkSms = lazy(() => import("./pages/BulkSms"));
const BulkEmail = lazy(() => import("./pages/BulkEmail"));
const Cctv = lazy(() => import("./pages/Cctv"));
const Biometric = lazy(() => import("./pages/Biometric"));
const ComputerSupply = lazy(() => import("./pages/ComputerSupply"));
const Consulting = lazy(() => import("./pages/Consulting"));
const Contact = lazy(() => import("./pages/Contact"));
const ClientQuery = lazy(() => import("./pages/ClientQuery"));
const Activity = lazy(() => import("./pages/Activity"));
const Team = lazy(() => import("./pages/Team"));
const Jobs = lazy(() => import("./pages/Jobs"));
const JobsViewDetails = lazy(() => import("./pages/JobsViewDetails")) ;
const Training = lazy(() => import("./pages/Training"));
const Certificate = lazy(() => import("./pages/Certificate"));
const Shop = lazy(() => import("./pages/Shop"));
const Ibc = lazy(() => import("./pages/Ibc"));
const Bbc = lazy(() => import("./pages/Bbc"));
const ReturnPolicy = lazy(() => import("./pages/ReturnPolicy"));
const TermConditions = lazy(() => import("./pages/TermConditions"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const SchoolManagementSystem = lazy(() =>
  import("./pages/SchoolManagementSystem")
);
const CollegeManagementSystem = lazy(() =>
  import("./pages/CollegeManagementSystem")
);
const HospitalManagementSystem = lazy(() =>
  import("./pages/HospitalManagementSystem")
);
const HotelManagementSystem = lazy(() =>
  import("./pages/HotelManagementSystem")
);

const PortalEcommerce = lazy(() => import("./pages/PortalEcommerce"));
const PortalNewsMagzine = lazy(() => import("./pages/PortalNewsMagzine"));
const PortalMlm = lazy(() => import("./pages/PortalMlm"));
const PortalInsurance = lazy(() => import("./pages/PortalInsurance"));
const RealEstateManaementSystem = lazy(() =>
  import("./pages/RealEstateManaementSystem")
);
const ShopManagementSystem = lazy(() => import("./pages/ShopManagementSystem"));
const SeoSearch = lazy(() => import("./pages/SeoSearch"));
const Best_website_development_jehanabad = lazy(() =>
  import("./pages/Best_website_development_jehanabad")
);
const Best_it_company_noida = lazy(() =>
  import("./pages/Best_it_company_noida")
);
const Best_web_development_services_company_bangladesh = lazy(() =>
  import("./pages/Best_web_development_services_company_bangladesh")
);
const Best_website_designing_hydrabad = lazy(() =>
  import("./pages/Best_website_designing_hydrabad")
);
const Best_web_design_agency_canada = lazy(() =>
  import("./pages/Best_web_design_agency_canada")
);
const Best_digital_marketing_agencys_egypt = lazy(() =>
  import("./pages/Best_digital_marketing_agencys_egypt")
);
const It_company_in_aurangabad = lazy(() =>
  import("./pages/It_company_in_aurangabad")
);
const It_company_in_kaimur = lazy(() => import("./pages/It_company_in_kaimur"));
const It_consulting_solution_perth = lazy(() =>
  import("./pages/It_consulting_solution_perth")
);
const It_company_in_purnia = lazy(() => import("./pages/It_company_in_purnia"));
const It_companies_ranchi = lazy(() => import("./pages/It_companies_ranchi"));
const It_company_in_varanasi = lazy(() =>
  import("./pages/It_company_in_varanasi")
);
const It_company_jamui = lazy(() => import("./pages/It_company_jamui"));
const It_company_khagaria = lazy(() => import("./pages/It_company_khagaria"));
const It_company_mirzapur = lazy(() => import("./pages/It_company_mirzapur"));
const It_company_near_me = lazy(() => import("./pages/It_company_near_me"));
const Software_company_chhapra = lazy(() =>
  import("./pages/Software_company_chhapra")
);
const Software_company_darbhanga = lazy(() =>
  import("./pages/Software_company_darbhanga")
);
const Software_company_east_champaran = lazy(() =>
  import("./pages/Software_company_east_champaran")
);
const Software_company_in_begusarai = lazy(() =>
  import("./pages/Software_company_in_begusarai")
);
const Software_company_in_bhagalpur = lazy(() =>
  import("./pages/Software_company_in_bhagalpur")
);
const Software_company_in_bhojpur = lazy(() =>
  import("./pages/Software_company_in_bhojpur")
);
const Software_company_in_madhepura = lazy(() =>
  import("./pages/Software_company_in_madhepura")
);
const Software_company_in_madhubani = lazy(() =>
  import("./pages/Software_company_in_madhubani")
);
const Software_company_in_nalanda = lazy(() =>
  import("./pages/Software_company_in_nalanda")
);
const Software_company_in_sitamarhi = lazy(() =>
  import("./pages/Software_company_in_sitamarhi")
);
const Software_company_in_siwan = lazy(() =>
  import("./pages/Software_company_in_siwan")
);
const Software_company_in_vaishali = lazy(() =>
  import("./pages/Software_company_in_vaishali")
);
const Software_company_in_west_champaran = lazy(() =>
  import("./pages/Software_company_in_west_champaran")
);
const Software_development_company_in_arwal = lazy(() =>
  import("./pages/Software_development_company_in_arwal")
);
const Software_development_company_in_banka = lazy(() =>
  import("./pages/Software_development_company_in_banka")
);
const Software_development_company_in_buxar = lazy(() =>
  import("./pages/Software_development_company_in_buxar")
);
const Software_development_company_in_muzaffarpur = lazy(() =>
  import("./pages/Software_development_company_in_muzaffarpur")
);
const Software_development_company_in_siwan = lazy(() =>
  import("./pages/Software_development_company_in_siwan")
);
const Software_development_company_saharsa = lazy(() =>
  import("./pages/Software_development_company_saharsa")
);

const Top_10_it_company_in_india = lazy(() =>
  import("./pages/Top_10_it_company_in_india")
);
const Top_10_software_company_india = lazy(() =>
  import("./pages/Top_10_software_company_india")
);
const Top_it_company_bihar = lazy(() => import("./pages/Top_it_company_bihar"));
const Top_it_Company_in_supaul = lazy(() =>
  import("./pages/Top_it_Company_in_supaul")
);
const Top_it_company_kishanganj = lazy(() =>
  import("./pages/Top_it_company_kishanganj")
);
const Top_software_company_in_araria = lazy(() =>
  import("./pages/Top_software_company_in_araria")
);
const Top_software_company_in_gopalganj = lazy(() =>
  import("./pages/Top_software_company_in_gopalganj")
);
const Top_software_company_in_katihar = lazy(() =>
  import("./pages/Top_software_company_in_katihar")
);
const Top_web_designing_company_california = lazy(() =>
  import("./pages/Top_web_designing_company_california")
);
const Top_web_development_company_chennai = lazy(() =>
  import("./pages/Top_web_development_company_chennai")
);
const Web_application_development_company_gurgaon = lazy(() =>
  import("./pages/Web_application_development_company_gurgaon")
);
const Web_design_toronto = lazy(() => import("./pages/Web_design_toronto"));
const Web_designing_company_kochi = lazy(() =>
  import("./pages/Web_designing_company_kochi")
);
const Web_development_company_michigan = lazy(() =>
  import("./pages/Web_development_company_michigan")
);
const Website_design_and_development_agency_nepal = lazy(() =>
  import("./pages/Website_design_and_development_agency_nepal")
);
const Website_design_development_services_landon = lazy(() =>
  import("./pages/Website_design_development_services_landon")
);
const Website_designing_company_nawada = lazy(() =>
  import("./pages/Website_designing_company_nawada")
);
const Website_designing_company_pune = lazy(() =>
  import("./pages/Website_designing_company_pune")
);
const Website_development_company_bhutan = lazy(() =>
  import("./pages/Website_development_company_bhutan")
);
const Website_development_company_gaya = lazy(() =>
  import("./pages/Website_development_company_gaya")
);
const Website_development_training_cerner_in_jehanabad = lazy(() =>
  import("./pages/Website_development_training_cerner_in_jehanabad")
);


function App() {
  const { pathname } = useLocation();
  // console.log(pathname);
  const [assessmentStatus, setAssessmentStatus] = useState("Inactive");

  // Fetch assessmentStatus from dashboard.infoera.in
  useEffect(() => {
    const fetchAssessmentStatus = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/assessment-status/get-status`
        );
        if (response.status === 200 && response.data.success) {
          setAssessmentStatus(response.data.data.status || "Inactive");
        } else {
          console.warn("Failed to fetch assessment status. Defaulting to Inactive.");
        }
      } catch (error) {
        console.error("Error fetching assessment status:", error);
      }
    };

    fetchAssessmentStatus();
  }, []);

  const routes = [
    "/",
    "/about",
    "/why-choose",
    "/website-design",
    "/web-application",
    "/desktop-application",
    "/digital-marketing",
    "/seo",
    "/bulk-sms",
    "/bulk-email",
    "/cctv",
    "/biometric",
    "/computer-supply",
    "/consulting",
    "/contact",
    "/client-query",
    "/activity",
    "/team",
    "/jobs",
    "/view-details",
    "/training",
    "/certificate",
    "/shop",
    "/ibc",
    "/bbc",
    "/return-policy",
    "/terms-conditions",
    "/privacy-policy",
    "/school-management-system",
    "/college-management-system",
    "/hospital-management-system",
    "/hotel-management-system",
    "/portal-ecommerce",
    "/portal-news-magzin",
    "/portal-mlm",
    "/portal-insurance",
    "/real-estate-manaement-system",
    "/shop-management-system",
    "/best_digital_marketing_agencys_egypt",
    "/best_it_company_in_lakhisarai",
    "/best_it_company_in_darbhanga",
    "/best_software_company_darbhanga",
    "/best_it_company_in_rohtas",
    "/best_it_company_samastipur",
    "/best_it_company_noida",
    "/best_software_company_bhubaneswar",
    "/best_software_company_in_sheohar",
    "/best_web_design_agency_canada",
    "/best_web_development_services_company_bangladesh",
    "/best_website_designing_hydrabad",
    "/best_website_development_jehanabad",
    "/it_companies_ranchi",
    "/it_company_in_aurangabad",
    "/it_company_in_kaimur",
    "/it_company_in_purnia",
    "/it_company_in_varanasi",
    "/it_company_jamui",
    "/it_company_khagaria",
    "/it_company_mirzapur",
    "/it_company_near_me",
    "/it_consulting_solution_perth",
    "/software_company_chhapra",
    "/software_company_darbhanga",
    "/software_company_east_champaran",
    "/software_company_in_begusarai",
    "/software_company_in_bhagalpur",
    "/software_company_in_bhojpur",
    "/software_company_in_madhepura",
    "/software_company_in_madhubani",
    "/software_company_in_nalanda",
    "/software_company_in_sitamarhi",
    "/software_company_in_siwan",
    "/software_company_in_vaishali",
    "/software_company_in_west_champaran",
    "/software_development_company_in_arwal",
    "/software_development_company_in_banka",
    "/software_development_company_in_buxar",
    "/software_development_company_in_muzaffarpur",
    "/software_development_company_in_siwan",
    "/software_development_company_saharsa",
    "/top_10_it_company_in_india",
    "/top_10_software_company_india",
    "/top_it_company_bihar",
    "/top_it_Company_in_supaul",
    "/top_it_company_kishanganj",
    "/top_software_company_in_araria",
    "/top_software_company_in_gopalganj",
    "/top_software_company_in_katihar",
    "/top_software_company_in_gopalganj",
    "/top_web_designing_company_california",
    "/top_web_development_company_chennai",
    "/web_application_development_company_gurgaon",
    "/web_design_toronto",
    "/web_designing_company_kochi",
    "/web_development_company_michigan",
    "/website_design_and_development_agency_nepal",
    "/website_design_development_services_landon",
    "/website_designing_company_nawada",
    "/website_designing_company_pune",
    "/website_development_company_bhutan",
    "/website_development_company_gaya",
    "/website_development_training_cerner_in_jehanabad",
    "/web-design-course",
    "/mern-stack-workshop",
    // "/exam",
  ];
  // Conditionally include "/exam" route based on assessmentStatus
  if (assessmentStatus === "Active") {
    routes.push("/exam");
  }
  // const hidden = !routes.includes(pathname);
  // console.log(hidden)

  const hidden = !routes.some((route) => matchPath(route, pathname));
// console.log(hidden);

  return (
    <>
      {!hidden && <Navbar />}
      <RestoreScroll />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Home />
            </Suspense>
          }
        />
        {assessmentStatus === "Active" && (
          <Route
            path="/exam"
            element={
              <Suspense fallback={<SkeletonLoader />}>
                <StudentDetails />
              </Suspense>
            }
          />
        )}
        <Route
          path="/assessment-test"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <AssessmentTest />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/why-choose"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <WhyChoose />
            </Suspense>
          }
        />
        <Route
          path="/website-design"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <WebsiteDesign />
            </Suspense>
          }
        />
        <Route
          path="/web-application"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <WebApplication />
            </Suspense>
          }
        />
        <Route
          path="/desktop-application"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <DesktopApplication />
            </Suspense>
          }
        />
        <Route
          path="/digital-marketing"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <DigitalMarketing />
            </Suspense>
          }
        />
        <Route
          path="/seo"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Seo />
            </Suspense>
          }
        />
        <Route
          path="/bulk-sms"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <BulkSms />
            </Suspense>
          }
        />
        <Route
          path="/bulk-email"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <BulkEmail />
            </Suspense>
          }
        />
        <Route
          path="/cctv"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Cctv />
            </Suspense>
          }
        />
        <Route
          path="/biometric"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Biometric />
            </Suspense>
          }
        />
        <Route
          path="/computer-supply"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <ComputerSupply />
            </Suspense>
          }
        />
        <Route
          path="/consulting"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Consulting />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/client-query"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <ClientQuery />
            </Suspense>
          }
        />
        <Route
          path="/activity"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Activity />
            </Suspense>
          }
        />
        <Route
          path="/team"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Team />
            </Suspense>
          }
        />
        <Route
          path="/jobs"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Jobs />
            </Suspense>
          }
        />
        <Route
          path="/view-details"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <JobsViewDetails />
            </Suspense>
          }
        />
        <Route
          path="/training"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Training />
            </Suspense>
          }
        />
        <Route
          path="/certificate"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Certificate />
            </Suspense>
          }
        />
        <Route
          path="/shop"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Shop />
            </Suspense>
          }
        />
        <Route
          path="/ibc"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Ibc />
            </Suspense>
          }
        />
        <Route
          path="/bbc"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Bbc />
            </Suspense>
          }
        />
        <Route
          path="/return-policy"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <ReturnPolicy />
            </Suspense>
          }
        />
        <Route
          path="/terms-conditions"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <TermConditions />
            </Suspense>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <PrivacyPolicy />
            </Suspense>
          }
        />
        <Route
          path="/school-management-system"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <SchoolManagementSystem />
            </Suspense>
          }
        />
        <Route
          path="/college-management-system"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <CollegeManagementSystem />
            </Suspense>
          }
        />
        <Route
          path="/hospital-management-system"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <HospitalManagementSystem />
            </Suspense>
          }
        />
        <Route
          path="/hotel-management-system"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <HotelManagementSystem />
            </Suspense>
          }
        />
        <Route
          path="/portal-ecommerce"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <PortalEcommerce />
            </Suspense>
          }
        />
        <Route
          path="/portal-news-magzin"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <PortalNewsMagzine />
            </Suspense>
          }
        />
        <Route
          path="/portal-mlm"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <PortalMlm />
            </Suspense>
          }
        />
        <Route
          path="/portal-insurance"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <PortalInsurance />
            </Suspense>
          }
        />
        <Route
          path="/real-estate-manaement-system"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <RealEstateManaementSystem />
            </Suspense>
          }
        />
        <Route
          path="/shop-management-system"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <ShopManagementSystem />
            </Suspense>
          }
        />
        <Route
          path="/best_digital_marketing_agencys_egypt"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Best_digital_marketing_agencys_egypt />
            </Suspense>
          }
        />

        <Route
          path="/best_it_company_in_lakhisarai"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <SeoSearch city={"Lakhisarai"} />
            </Suspense>
          }
        />
        <Route
          path="/best_it_company_in_darbhanga"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <SeoSearch city={"Darbhanga"} />
            </Suspense>
          }
        />
        <Route
          path="/best_software_company_darbhanga"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <SeoSearch city={"Darbhanga"} />
            </Suspense>
          }
        />
        <Route
          path="/best_it_company_in_rohtas"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <SeoSearch city={"Rohtas"} />
            </Suspense>
          }
        />
        <Route
          path="/best_it_company_samastipur"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <SeoSearch city={"Samastipur"} />
            </Suspense>
          }
        />
        <Route
          path="/best_it_company_noida"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Best_it_company_noida />
            </Suspense>
          }
        />
        <Route
          path="/best_software_company_bhubaneswar"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <SeoSearch city={"Bhubaneswar"} />
            </Suspense>
          }
        />
        <Route
          path="/best_software_company_in_sheohar"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <SeoSearch city={"Sheohar"} />
            </Suspense>
          }
        />
        <Route
          path="/best_web_design_agency_canada"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Best_web_design_agency_canada />
            </Suspense>
          }
        />
        <Route
          path="/best_web_development_services_company_bangladesh"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Best_web_development_services_company_bangladesh />
            </Suspense>
          }
        />
        <Route
          path="/best_website_designing_hydrabad"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Best_website_designing_hydrabad />
            </Suspense>
          }
        />
        <Route
          path="/best_website_development_jehanabad"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Best_website_development_jehanabad />
            </Suspense>
          }
        />
        <Route
          path="/it_companies_ranchi"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <It_companies_ranchi />
            </Suspense>
          }
        />
        <Route
          path="/it_company_in_aurangabad"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <It_company_in_aurangabad />
            </Suspense>
          }
        />
        <Route
          path="/it_company_in_kaimur"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <It_company_in_kaimur />
            </Suspense>
          }
        />
        <Route
          path="/it_company_in_purnia"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <It_company_in_purnia />
            </Suspense>
          }
        />
        <Route
          path="/it_company_in_varanasi"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <It_company_in_varanasi />
            </Suspense>
          }
        />
        <Route
          path="/it_company_jamui"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <It_company_jamui />
            </Suspense>
          }
        />
        <Route
          path="/it_company_khagaria"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <It_company_khagaria />
            </Suspense>
          }
        />
        <Route
          path="/it_company_mirzapur"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <It_company_mirzapur />
            </Suspense>
          }
        />
        <Route
          path="/it_company_near_me"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <It_company_near_me />
            </Suspense>
          }
        />
        <Route
          path="/it_consulting_solution_perth"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <It_consulting_solution_perth />
            </Suspense>
          }
        />
        <Route
          path="/software_company_chhapra"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Software_company_chhapra />
            </Suspense>
          }
        />
        <Route
          path="/software_company_darbhanga"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Software_company_darbhanga />
            </Suspense>
          }
        />
        <Route
          path="/software_company_east_champaran"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Software_company_east_champaran />
            </Suspense>
          }
        />
        <Route
          path="/software_company_in_begusarai"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Software_company_in_begusarai />
            </Suspense>
          }
        />
        <Route
          path="/software_company_in_bhagalpur"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Software_company_in_bhagalpur />
            </Suspense>
          }
        />
        <Route
          path="/software_company_in_bhojpur"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Software_company_in_bhojpur />
            </Suspense>
          }
        />
        <Route
          path="/software_company_in_madhepura"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Software_company_in_madhepura />
            </Suspense>
          }
        />
        <Route
          path="/software_company_in_madhubani"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Software_company_in_madhubani />
            </Suspense>
          }
        />
        <Route
          path="/software_company_in_nalanda"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Software_company_in_nalanda />
            </Suspense>
          }
        />
        <Route
          path="/software_company_in_sitamarhi"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Software_company_in_sitamarhi />
            </Suspense>
          }
        />
        <Route
          path="/software_company_in_siwan"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Software_company_in_siwan />
            </Suspense>
          }
        />
        <Route
          path="/software_company_in_vaishali"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Software_company_in_vaishali />
            </Suspense>
          }
        />
        <Route
          path="/software_company_in_west_champaran"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Software_company_in_west_champaran />
            </Suspense>
          }
        />
        <Route
          path="/software_development_company_in_arwal"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Software_development_company_in_arwal />
            </Suspense>
          }
        />
        <Route
          path="/software_development_company_in_banka"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Software_development_company_in_banka />
            </Suspense>
          }
        />
        <Route
          path="/software_development_company_in_buxar"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Software_development_company_in_buxar />
            </Suspense>
          }
        />
        <Route
          path="/software_development_company_in_muzaffarpur"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Software_development_company_in_muzaffarpur />
            </Suspense>
          }
        />
        <Route
          path="/software_development_company_in_siwan"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Software_development_company_in_siwan />
            </Suspense>
          }
        />
        <Route
          path="/software_development_company_saharsa"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Software_development_company_saharsa />
            </Suspense>
          }
        />
        <Route
          path="/top_10_it_company_in_india"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Top_10_it_company_in_india />
            </Suspense>
          }
        />
        <Route
          path="/top_10_software_company_india"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Top_10_software_company_india />
            </Suspense>
          }
        />
        <Route
          path="/top_it_company_bihar"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Top_it_company_bihar />
            </Suspense>
          }
        />
        <Route
          path="/top_it_Company_in_supaul"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Top_it_Company_in_supaul />
            </Suspense>
          }
        />
        <Route
          path="/top_it_company_kishanganj"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Top_it_company_kishanganj />
            </Suspense>
          }
        />
        <Route
          path="/top_software_company_in_araria"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Top_software_company_in_araria />
            </Suspense>
          }
        />
        <Route
          path="/top_software_company_in_gopalganj"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Top_software_company_in_gopalganj />
            </Suspense>
          }
        />
        <Route
          path="/top_software_company_in_katihar"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Top_software_company_in_katihar />
            </Suspense>
          }
        />
        <Route
          path="/top_software_company_in_gopalganj"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Top_software_company_in_gopalganj />
            </Suspense>
          }
        />
        <Route
          path="/top_web_designing_company_california"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Top_web_designing_company_california />
            </Suspense>
          }
        />
        <Route
          path="/top_web_development_company_chennai"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Top_web_development_company_chennai />
            </Suspense>
          }
        />
        <Route
          path="/web_application_development_company_gurgaon"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Web_application_development_company_gurgaon />
            </Suspense>
          }
        />
        <Route
          path="/web_design_toronto"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Web_design_toronto />
            </Suspense>
          }
        />
        <Route
          path="/web_designing_company_kochi"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Web_designing_company_kochi />
            </Suspense>
          }
        />
        <Route
          path="/web_development_company_michigan"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Web_development_company_michigan />
            </Suspense>
          }
        />
        <Route
          path="/website_design_and_development_agency_nepal"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Website_design_and_development_agency_nepal />
            </Suspense>
          }
        />
        <Route
          path="/website_design_development_services_landon"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Website_design_development_services_landon />
            </Suspense>
          }
        />
        <Route
          path="/website_designing_company_nawada"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Website_designing_company_nawada />
            </Suspense>
          }
        />
        <Route
          path="/website_designing_company_pune"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Website_designing_company_pune />
            </Suspense>
          }
        />
        <Route
          path="/website_development_company_bhutan"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Website_development_company_bhutan />
            </Suspense>
          }
        />
        <Route
          path="/website_development_company_gaya"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Website_development_company_gaya />
            </Suspense>
          }
        />
        <Route
          path="/website_development_training_cerner_in_jehanabad"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Website_development_training_cerner_in_jehanabad />
            </Suspense>
          }
        />
        {/* <Route
          path="/web-design-course"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <WebDesign />
            </Suspense>
          }
        /> */}
        <Route
          path="/mern-stack-workshop"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <WebDevelopment/>
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BackToTopButton />
      {!hidden && <Footer />}
    </>
  );
}

export default App;
