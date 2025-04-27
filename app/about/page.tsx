import Main from "@/templates/about/main";
import GetBook from "@/templates/about/get-book";
import React from "react";
import { aboutPageQuery } from "@/services";
import { notFound } from "next/navigation";

const About = async () => {
  const page = await aboutPageQuery();

  if (!page) {
    return notFound();
  }

  return (
    <>
      <Main data={page?.aboutMePageMeta?.about}/>
      <GetBook data={page?.aboutMePageMeta?.workWithUs}/>
    </>
  );
};

export default About;
