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
      <section className="bg-gray-50 my-20 p-10 max-w-[1100px] content mx-auto">
          <div dangerouslySetInnerHTML={{ __html:page?.content }}/>
      </section>
    </>
  );
};

export default About;
