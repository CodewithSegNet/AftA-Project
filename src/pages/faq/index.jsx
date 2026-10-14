import React from "react";
import Navbar from "../../shared/components/Navbar";
import Footer from "../../shared/components/footer.jsx";
import FAQ from "../../shared/components/faq.jsx";

const FAQPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[100px]">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-[44px] py-16">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Help Center
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to frequently asked questions about AftA and discover what makes our platform unique.
            </p>
          </div>
          
          {/* FAQ Component */}
          <div className="max-w-4xl mx-auto">
            <FAQ />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FAQPage;