import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../../shared/components/Navbar";
import Footer from "../../shared/components/footer";
import CommunityFirst from "../../layouts/community/communityFirst";
import FifthLayer from "../../layouts/homepage/FifthLayer";

const Community = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>AftA Community - Join Africa's Largest Online Social Network | Connect Now</title>
          <meta
            name="description"
            content="Join millions of Africans and diaspora members in AftA's vibrant online community. Connect with like-minded people, share your culture, and build meaningful relationships across the continent."
          />
          <meta
            name="keywords"
            content="AftA community, African online community, join AftA, African social network, diaspora community, African connections, pan-African network, African culture sharing, African social groups"
          />
          <meta
            property="og:title"
            content="AftA Community - Where Africa Connects | Join Our Social Network"
          />
          <meta
            property="og:description"
            content="Become part of Africa's most vibrant online community. Connect with millions of Africans worldwide, share your story, and celebrate our rich cultural heritage together."
          />
          <meta
            property="og:url"
            content="https://www.afta.app/community"
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
            content="Join AftA Community - Africa's Premier Social Network"
          />
          <meta
            name="twitter:description"
            content="Connect with Africans worldwide. Share stories, celebrate culture, and build lasting friendships in Africa's most inclusive social media community."
          />
          <meta
            name="twitter:image"
            content="https://www.afta.app/logo.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="canonical" href="https://www.afta.app/community" />
          
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
                "name": "AftA Community",
                "description": "Join Africa's largest online social community platform",
                "url": "https://www.afta.app/community",
                "isPartOf": {
                  "@type": "WebSite",
                  "name": "AftA",
                  "url": "https://www.afta.app"
                },
                "about": {
                  "@type": "SocialMediaPosting",
                  "name": "African Community Platform",
                  "description": "A platform where Africans and diaspora connect, share culture, and build relationships"
                }
              }
            `}
          </script>
        </Helmet>

        <div>
          <div className="mx-4 md:mx-6  lg:mt-[1rem] pb-[5rem] lg:pb-[8rem]">
            <Navbar />
          </div>
  
          <div className="">
            <CommunityFirst/>
          </div>

          <div className="mx-4 md:mx-6 mt-[2rem]">
            <FifthLayer/>
          </div>

          <div className="lg:mt-[96px] mt-[40px]">
            <Footer/>
          </div>
        </div>
      </HelmetProvider>
    </>
  );
};

export default Community;