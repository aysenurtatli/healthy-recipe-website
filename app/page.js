import CallToAction from "@/components/home/CallToAction";
import Features from "@/components/home/Features/Features";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import InfoSection from "@/components/home/InfoSection";

export default function Home() {
  return (
   <>
   <div className=" my-20 px-4 md:px-8  ">
      <Header />
      <Hero />
    <Features />
    <InfoSection
    title={"Built for real life"} 
    imageSrc={"/images/image-home-real-life-large.webp"}
    description={<p>Cooking shouldn’t be complicated. These recipes come in under <span className="bg-accent rounded-sm"><strong>30 minutes</strong></span> of active time, fit busy schedules, and taste good enough to repeat. <br/><br/> Whether you’re new to the kitchen or just need fresh ideas, we’ve got you covered.</p>} 
    />
    <CallToAction />
   </div>
   </>
  );
}
