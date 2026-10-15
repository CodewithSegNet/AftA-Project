import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../../shared/components/Navbar";
import Footer from "../../shared/components/footer";
import FeatureFirst from "../../layouts/features/featureFirst";
import FeatureSecond from "../../layouts/features/featureSecond";
import FeatureThird from "../../layouts/features/featureThird";
import FeatureFourth from "../../layouts/features/featureFouth";
import FeatureFifth from "../../layouts/features/featureFifth";
import FeatureSixth from "../../layouts/features/featureSixth";
import FeatureSeventh from "../../layouts/features/featureSeventh";
import FeatureEight from "../../layouts/features/featureEigth";
import FeatureNine from "../../layouts/features/featureNine";
import FeatureTen from "../../layouts/features/featureTen";
import FeatureEleven from "../../layouts/features/featureEleven";
import FeatureTwelve from "../../layouts/features/featureTwelve";
import FeatureFaq from "../../layouts/homepage/FifthLayer";

const Features = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>AftA Features - Advanced Social Media Tools for African Communities | Explore Now</title>
          <meta
            name="description"
            content="Discover AftA's powerful social media features designed for African communities. From cultural content sharing to diaspora connections, explore tools that celebrate African identity online."
          />
          <meta
            name="keywords"
            content="AftA features, African social media features, social networking tools Africa, AftA app features, African community tools, diaspora social features, cultural sharing platform, African social network capabilities"
          />
          <meta
            property="og:title"
            content="AftA Features - Social Media Tools Built for Africa | Platform Capabilities"
          />
          <meta
            property="og:description"
            content="Explore AftA's innovative features designed specifically for African communities. Discover how our social platform enhances cultural connection and community building."
          />
          <meta
            property="og:url"
            content="https://www.afta.app/features"
          />
          <meta
            property="og:image"
            content="https://www.afta.app/logo.png"
          />
          <meta
            property="og:type"
            content="website"
          />
          <meta
            name="twitter:title"
            content="AftA Platform Features - Social Networking Reimagined for Africa"
          />
          <meta
            name="twitter:description"
            content="See what makes AftA unique. Explore features crafted for African culture, community building, and diaspora connections in our comprehensive platform overview."
          />
          <meta
            name="twitter:image"
            content="https://www.afta.app/logo.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="canonical" href="https://www.afta.app/features" />
          
          {/* Additional SEO tags */}
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#002A28" />
          
          {/* Structured Data */}
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "AftA Features",
                "description": "Comprehensive overview of AftA's social media features for African communities",
                "url": "https://www.afta.app/features",
                "isPartOf": {
                  "@type": "WebSite",
                  "name": "AftA",
                  "url": "https://www.afta.app"
                },
                "mainEntity": {
                  "@type": "SoftwareApplication",
                  "name": "AftA Social Platform",
                  "applicationCategory": "SocialNetworkingApplication",
                  "description": "Social media platform with features designed for African communities and diaspora",
                  "operatingSystem": "Web, iOS, Android",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                  }
                }
              }
            `}
          </script>
        </Helmet>

        <div>
          <div className="mx-4 md:mx-6 md:mt-[8rem] lg:mt-[1rem] pb-[7rem] lg:pb-[8rem]">
            <Navbar />
          </div>
  
          <div className=" mx-4 md:mx-6 ">
            <FeatureFirst/>
          </div>

          <div className=" mx-4 md:mx-6 ">
            <FeatureSecond/>
          </div>

          <div className=" mx-4 md:mx-6 ">
            <FeatureThird/>
          </div>

          <div className=" mx-4 md:mx-6 ">
            <FeatureFourth/>
          </div>

          <div className=" mx-4 md:mx-6 ">
            <FeatureFifth/>
          </div>

          <div className=" mx-4 md:mx-6 ">
            <FeatureSixth/>
          </div>

          <div className=" mx-4 md:mx-6 ">
            <FeatureSeventh/>
          </div>

          <div className=" mx-4 md:mx-6 ">
            <FeatureEight/>
          </div>

          <div className=" mx-4 md:mx-6 ">
            <FeatureNine/>
          </div>

          <div className=" mx-4 md:mx-6 ">
            <FeatureTen/>
          </div>

          <div className=" mx-4 md:mx-6 ">
            <FeatureEleven/>
          </div>

          <div className=" mx-4 md:mx-6 ">
            <FeatureTwelve/>
          </div>

          <div className="mx-4 md:mx-6 mt-[2rem]">
            <FeatureFaq/>
          </div>

          <div className="lg:mt-[96px] mt-[40px]">
            <Footer/>
          </div>
        </div>
      </HelmetProvider>
    </>
  );
};

export default Features;