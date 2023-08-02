"use client";
import CourseSection from "./CourseSection";
import HeroSection from "./HeroSection";
import SponserSection from "./SponserSection";

const HomePage = () => {
  return (
    <section>
      <HeroSection />
      <SponserSection />
      <CourseSection />
    </section>
  );
};

export default HomePage;
