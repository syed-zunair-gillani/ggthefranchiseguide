import Main from "@/templates/about/main";
import GetBook from "@/templates/about/get-book";
import React from "react";
import { aboutPageQuery } from "@/services";
import { notFound } from "next/navigation";

const About = async () => {
  const page = await aboutPageQuery();
  console.log("🚀 ~ About ~ page:", page);

  if (!page) {
    return notFound();
  }

  return (
    <>
      <Main />
      <GetBook />
    </>
  );
};

export default About;
