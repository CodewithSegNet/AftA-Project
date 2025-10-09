import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/footer";
import FirstLayer from "../../layouts/FirstLayer" 
import SecondLayer from "../../layouts/SecondLayer" 
import ThirdLayer from "../../layouts/ThirdLayer"
import FourthLayer from "../../layouts/FourthLayer"
import FifthLayer from "../../layouts/FifthLayer"

const HomePage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>AftA - Africa's #1 Social Media Platform | Connect, Share, Celebrate African Culture</title>
          <meta
            name="description"
            content="Join AftA - Africa's premier social media platform connecting millions across the continent and diaspora. Share moments, celebrate culture, and build meaningful connections in the world's most inclusive African social network."
          />
          <meta
            name="keywords"
            content="African social media, AftA app, social network Africa, pan-African platform, African diaspora, African culture online, connect Africans worldwide, African social platform, Afrocentric social media"
          />
          <meta
            property="og:title"
            content="AftA - Africa's Leading Social Media Platform | Join Millions of Africans"
          />
          <meta
            property="og:description"
            content="Experience social networking reimagined for Africa. Join millions celebrating African culture, connecting across borders, and building community on the continent's most trusted platform."
          />
          <meta
            property="og:url"
            content="https://www.afta.app"
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
            property="og:site_name"
            content="AftA"
          />
          <meta
            name="twitter:title"
            content="AftA - Where Africa Connects | The Continent's Premier Social Platform"
          />
          <meta
            name="twitter:description"
            content="Join the social media revolution made for Africa. Connect with millions, share your story, and celebrate our rich heritage on the platform built by Africans, for Africans."
          />
          <meta
            name="twitter:image"
            content="https://www.afta.app/logo.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@afta" />
          <link rel="canonical" href="https://www.afta.app" />
          
          {/* Additional SEO tags */}
          <meta name="robots" content="index, follow, max-image-preview:large" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#002A28" />
          <meta name="author" content="AftA" />
          <meta httpEquiv="Content-Language" content="en" />
          
          {/* Geographic targeting */}
          <meta name="geo.region" content="Africa" />
          <meta name="geo.placename" content="Africa" />
          
          {/* App Store / Play Store links */}
          <meta name="apple-itunes-app" content="app-id=afta-social" />
          <meta name="google-play-app" content="app-id=com.afta.social" />
          
          {/* Structured Data */}
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "AftA",
                "alternateName": "Africa's Social Media Platform",
                "url": "https://www.afta.app",
                "description": "Africa's premier social media platform connecting millions across the continent and diaspora",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://www.afta.com/search?q={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                },
                "sameAs": [
                  "https://www.facebook.com/afta",
                  "https://www.twitter.com/afta",
                  "https://www.instagram.com/afta",
                  "https://www.linkedin.com/company/afta"
                ]
              }
            `}
          </script>
          
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "AftA",
                "description": "Africa's leading social media platform for connection, culture, and community",
                "url": "https://www.afta.app",
                "logo": "https://www.afta.app/logo.png",
                "foundingDate": "2024",
                "areaServed": {
                  "@type": "Place",
                  "name": "Africa and Diaspora"
                },
                "category": "Social Media Platform",
                "address": {
                  "@type": "PostalAddress",
                  "addressRegion": "Africa"
                }
              }
            `}
          </script>
        </Helmet>

        <div>
          <div className="mx-4 md:mx-6 md:mt-[8rem] lg:mt-[1rem] pb-[7rem] lg:pb-[8rem]">
            <Navbar />
          </div>
  
          <div className="md:pt-[22rem] lg:pt-[0rem] ">
            <FirstLayer/>
          </div>

          <div className="mx-4 md:mx-6">
            <SecondLayer/>
          </div>

          <div className=" bg-[rgba(0,42,40,1)] ">
            <ThirdLayer/>
          </div>

          <div className="mt-[1rem]">
            <FourthLayer/>
          </div>

          <div className="mx-4 md:mx-6 mt-[2rem]">
            <FifthLayer/>
          </div>

          <div className="">
            <Footer/>
          </div>
        </div>
      </HelmetProvider>
    </>
  );
};

export default HomePage;