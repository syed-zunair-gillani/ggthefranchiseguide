import React from "react";
import Hero from "@/templates/how-it-works/Hero"
import Text from "@/templates/how-it-works/Text"
import Help from "@/templates/how-it-works/Help"
import StepsSection from "@/templates/home/steps";
import Step1 from "@/templates/how-it-works/Step1"
import Step2 from "@/templates/how-it-works/Step2"
import Step3 from "@/templates/how-it-works/Step3"
import Step4 from "@/templates/how-it-works/Step4"

const howitwork = () => {
  return (
    <>
       <Hero />
       <Text/>
       <Help/>
       <StepsSection/>
       <Step1/>
       <Step2/>
       <Step3/>
       <Step4/>
    </>
  );
};

export default howitwork;
