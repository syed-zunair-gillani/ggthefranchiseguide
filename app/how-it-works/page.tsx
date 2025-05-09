import React from "react";
import Hero from "@/templates/how-it-works/Hero";
import Text from "@/templates/how-it-works/Text";
import Help from "@/templates/how-it-works/Help";
import StepsSection from "@/templates/home/steps";
import Step1 from "@/templates/how-it-works/Step1";
import Step2 from "@/templates/how-it-works/Step2";
import Step3 from "@/templates/how-it-works/Step3";
import Step4 from "@/templates/how-it-works/Step4";
import { notFound } from "next/navigation";
import { howItsWorkPageQuery } from "@/services";

const HowItWork = async () => {
  const page = await howItsWorkPageQuery();
  console.log("🚀 ~ HowItWork ~ page:", page)

  if (!page) {
    return notFound();
  }

  return (
    <>
      <Hero data={page?.howItsWorksPageMeta?.main}/>
      <Text data={page?.content}/>
      <Help data={page?.howItsWorksPageMeta?.howICanHelp} link={page?.howItsWorksPageMeta?.howICanHelpButtonLink}/>
      <StepsSection data={page?.howItsWorksPageMeta?.steps}/>
      <Step1 data={page?.howItsWorksPageMeta?.step1}/>
      <Step2 data={page?.howItsWorksPageMeta?.step1}/>
      <Step3 data={page?.howItsWorksPageMeta?.step3}/>
      <Step4 data={page?.howItsWorksPageMeta?.step4}/>
    </>
  );
};

export default HowItWork;
