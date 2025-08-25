import StorySection from '@/components/about/StorySection'
import CallToAction from '@/components/home/CallToAction'
import InfoSection from '@/components/home/InfoSection'
import React from 'react'

const page = () => {
    const whyWeExist = [
        {
            title: "Cut through the noise.",
            description: "The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking."
        },
        {
            title: "Empower home kitchens.",
            description: "When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep."
        },
        {
            title: "Make healthy look good.",
            description: "High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters."
        },
    ]

    const philosophy = [
        {
            title: "Whole ingredients first.",
            description: "Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe."
        },
        {
            title: "Flavor without compromise.",
            description: "Spices, citrus, and natural sweetness replace excess salt, sugar, and additives."
        },
        {
            title: "Respect for time.",
            description: "Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful."
        },
        {
            title: "Sustainable choices.",
            description: "Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly."
        },
    ]

  return (
    <div className='px-4 md:px-8'>
        <InfoSection 
        imageSrc={"/images/image-about-our-mission-large.webp"}
        badge={true}
        title={"Help more people cook nourishing meals, more often."}
        description={<>Healthy Recipe Finder was created to prove that healthy eating can be convenient, affordable, and genuinely delicious. <br /><br /> We showcase quick, whole-food dishes that anyone can master—no fancy equipment, no ultra-processed shortcuts—just honest ingredients and straightforward steps.</>}
        />
        <StorySection items={whyWeExist} title={"Why we exist"} />
        <StorySection items={philosophy} title={"Our food philosophy"} />
        <InfoSection 
        title={"Beyond the plate"} 
        imageSrc={"/images/image-about-beyond-the-plate-large.webp"}
        description={
            <>
                <p>We believe food is a catalyst for community and well-being. By sharing approachable recipes, we hope to:</p>
                <ul className='list-disc list-inside mt-5 flex flex-col ml-3'>
                    <li>Encourage family dinners and social cooking.</li>
                    <li>Reduce reliance on single-use packaging and delivery waste.</li>
                    <li>Spark curiosity about seasonal produce and local agriculture.</li>
                </ul>
            </>
         }
        />
        <CallToAction />
    </div>
  )
}

export default page