import Hero from "./components/Hero";
import ReasonsSection from "./components/ReasonsSection";
import PopularMenu from "./components/PopularMenu";
import BeforeAfter from "./components/BeforeAfter";
import CTASection from "./components/CTASection";
import ReviewsSection from "./components/ReviewsSection";
import FlowSection from "./components/FlowSection";
import AwardsSection from "./components/AwardsSection";
import FAQ from "./components/FAQ";
import Access from "./components/Access";
import Footer from "./components/Footer";
import DownloadButton from "./components/DownloadButton";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* ①Hero Section */}
      <Hero />

      {/* ②Reasons Section */}
      <ReasonsSection />

      {/* ③Popular Menu Section */}
      <PopularMenu />

      {/* Mid CTA Section */}
      <CTASection variant="compact" />

      {/* ④Before/After Section */}
      <BeforeAfter />

      {/* ⑤Reviews Section */}
      <ReviewsSection />

      {/* ⑥Flow Section */}
      <FlowSection />

      {/* ⑦Awards/Data Section */}
      <AwardsSection />

      {/* ⑧FAQ Section */}
      <FAQ />

      {/* ⑨Access Section */}
      <Access />

      {/* Final CTA Section */}
      <CTASection variant="default" />

      {/* Footer */}
      <Footer />

      {/* Download Button - Fixed Position */}
      <DownloadButton />
    </div>
  );
}
