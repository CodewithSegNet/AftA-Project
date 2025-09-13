import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/footer";
import Policy from "../../layouts/Policy"

const Privacy = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Privacy Policy - AftA | How We Protect Your Data & Privacy Rights</title>
          <meta
            name="description"
            content="Read AftA's comprehensive privacy policy. Learn how we protect your personal data, respect your privacy rights, and maintain security on Africa's leading social media platform."
          />
          <meta
            name="keywords"
            content="AftA privacy policy, data protection AftA, privacy rights Africa, social media privacy, data security AftA, user privacy protection, African social platform privacy"
          />
          <meta
            property="og:title"
            content="AftA Privacy Policy - Your Data Protection & Privacy Rights"
          />
          <meta
            property="og:description"
            content="Understand how AftA protects your privacy and personal data. Transparent policies for Africa's most trusted social media platform."
          />
          <meta
            property="og:url"
            content="https://www.afta.com/privacy"
          />
          <meta
            property="og:image"
            content="https://www.afta.com/privacy-og-image.jpg"
          />
          <meta
            property="og:type"
            content="website"
          />
          <meta
            name="twitter:title"
            content="AftA Privacy Policy - Data Protection & User Rights"
          />
          <meta
            name="twitter:description"
            content="Learn about AftA's commitment to privacy and data protection. Transparent policies for secure social networking in Africa."
          />
          <meta
            name="twitter:image"
            content="https://www.afta.com/privacy-twitter-image.jpg"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="canonical" href="https://www.afta.com/privacy" />
          
          {/* Additional SEO tags */}
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#002A28" />
          <meta name="author" content="AftA Legal Team" />
          
          {/* Structured Data */}
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Privacy Policy",
                "description": "AftA's privacy policy and data protection information",
                "url": "https://www.afta.com/privacy",
                "isPartOf": {
                  "@type": "WebSite",
                  "name": "AftA",
                  "url": "https://www.afta.com"
                },
                "dateModified": "2025-01-15",
                "inLanguage": "en",
                "mainEntity": {
                  "@type": "Article",
                  "name": "AftA Privacy Policy",
                  "description": "Comprehensive privacy policy detailing data protection practices",
                  "author": {
                    "@type": "Organization",
                    "name": "AftA"
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
  
          <div className="mx-4 md:mx-6 mt-[rem]">
            <Policy/>
          </div>

          <div className="">
            <Footer/>
          </div>
        </div>
      </HelmetProvider>
    </>
  );
};

export default Privacy;