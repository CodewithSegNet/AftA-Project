import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/footer";
import AboutFirst from "../../layouts/aboutFirst"
import AboutSecond from "../../layouts/aboutSecond"
import AboutThird from "../../layouts/aboutThird"
import FifthLayer from "../../layouts/FifthLayer"

const About = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>About AftA - Africa's Leading Social Media Platform | Our Story & Mission</title>
          <meta
            name="description"
            content="Discover AftA's mission to unite Africa and its diaspora through innovative social networking. Learn about our journey to create the continent's premier digital community platform for African culture and connection."
          />
          <meta
            name="keywords"
            content="About AftA, African social media company, AftA mission, African tech startup, pan-African platform, social network Africa, AftA story, African diaspora connection, digital Africa community"
          />
          <meta
            property="og:title"
            content="About AftA - Connecting Africa Through Social Media | Our Mission"
          />
          <meta
            property="og:description"
            content="Learn about AftA's vision to bridge African communities worldwide. Discover how we're building Africa's most inclusive social media platform for cultural celebration and global connection."
          />
          <meta
            property="og:url"
            content="https://www.afta.com/about"
          />
          <meta
            property="og:image"
            content="https://www.afta.com/about-og-image.jpg"
          />
          <meta
            property="og:type"
            content="website"
          />
          <meta
            name="twitter:title"
            content="About AftA - Africa's Social Media Revolution | Our Story"
          />
          <meta
            name="twitter:description"
            content="From concept to community - discover how AftA is transforming social media for Africa and its diaspora. Join our mission to celebrate African identity online."
          />
          <meta
            name="twitter:image"
            content="https://www.afta.com/about-twitter-image.jpg"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="canonical" href="https://www.afta.com/about" />
          
          {/* Additional SEO tags */}
          <meta name="author" content="AftA Team" />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          
          {/* Structured Data */}
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "AboutPage",
                "name": "About AftA",
                "description": "Learn about AftA's mission to unite Africa and its diaspora through innovative social networking",
                "url": "https://www.afta.com/about",
                "mainEntity": {
                  "@type": "Organization",
                  "name": "AftA",
                  "description": "Africa's leading social media platform for connection, culture, and community",
                  "url": "https://www.afta.com",
                  "sameAs": [
                    "https://www.facebook.com/afta",
                    "https://www.twitter.com/afta",
                    "https://www.instagram.com/afta"
                  ]
                }
              }
            `}
          </script>
        </Helmet>

        <div>
          <div className="mx-4 md:mx-6 md:mt-[8rem] lg:mt-[1rem] pb-[7rem] md:pb-[0rem] lg:pb-[8rem]">
            <Navbar />
          </div>
  
          <div className="mx-4 md:mx-6">
            <AboutFirst/>
          </div>

          <div className="mx-4 md:mx-6">
            <AboutSecond/>
          </div>

          <div className="mx-4 md:mx-6">
            <AboutThird/>
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

export default About;