import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import { Testimonial } from "@/components/Testimonial";
import Webinars from "@/components/Werbiners";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-black/95 ">
      <HeroSection></HeroSection>
      <FeaturedCourses />
      <WhyChooseUs></WhyChooseUs>
      <Testimonial />
      <Webinars />
    </div>
  );
}
