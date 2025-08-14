import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/footer";
import FeatureFirst from "../../layouts/featureFirst"
import FeatureSecond from "../../layouts/featureSecond"
import FeatureThird from "../../layouts/featureThird"
import FeatureFourth from "../../layouts/featureFouth"
import FeatureFifth from "../../layouts/featureFifth"
import FeatureSixth from "../../layouts/featureSixth"
import FeatureSeventh from "../../layouts/featureSeventh"
import FeatureEight from "../../layouts/featureEigth"
import FeatureNine from "../../layouts/featureNine"
import FeatureTen from "../../layouts/featureTen"



import FifthLayer from "../../layouts/FifthLayer"


const About = () => {
  return (
    <>
      <HelmetProvider>
<Helmet>
  <title>AftA – Africa’s Social Media Platform for Connection, Culture, and Community</title>
  <meta
    name="description"
    content="Join AftA – the social media platform made for Africa, Africans, and the diaspora. Share moments, connect with people, and celebrate African culture globally."
  />
  <meta
    name="keywords"
    content="African social media, AftA app, social network for Africa, Africa’s social platform, connect Africans, African diaspora, African culture online, Afrocentric app, pan-African community"
  />
  <meta
    property="og:title"
    content="AftA – Africa’s Social Network for Global Connection"
  />
  <meta
    property="og:description"
    content="Experience social networking reimagined for Africa and its diaspora. AftA connects people, stories, and culture – all in one platform built for Africans worldwide."
  />
  <meta
    property="og:url"
    content="https://www.afta.com"
  />
  <meta
    property="og:image"
    content="https://www.afta.com/og-image.jpg"
  />
  <meta
    name="twitter:title"
    content="AftA – Connect Africans Worldwide Through Social Media"
  />
  <meta
    name="twitter:description"
    content="Celebrate African identity and unity through AftA – the social media app designed for Africans and the diaspora to share, connect, and thrive."
  />
  <meta
    name="twitter:image"
    content="https://www.afta.com/twitter-image.jpg"
  />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="canonical" href="https://www.afta.com" />
</Helmet>


        <div>

          <div  className="mx-4 md:mx-6 md:mt-[8rem] lg:mt-[1rem] pb-[7rem] lg:pb-[8rem]">
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
