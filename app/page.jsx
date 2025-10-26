import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import LatestProjects from "./components/LatestProjects";
import MySkills from "./components/MySkills";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <MySkills />
      <LatestProjects />
      {/* 4. Featured Work/Portfolio Section */}
      {/* 5. Services/Offerings Section (If Applicable) */}
      {/* 6. Testimonials/Social Proof Section */}
      {/* 7. Call-to-Action Section (Final CTA) */}
    </div>
  );
}
