import React from "react";
import PressKitTemplate from "@/templates/press-kit";
import { pressKitPageQuery } from "@/services";
import { notFound } from "next/navigation";

const PressKit = async () => {
  const page = await pressKitPageQuery();
  console.log("🚀 ~ PressKit ~ page:", page);

  if (!page) {
    return notFound();
  }
  return (
    <>
      <PressKitTemplate />
    </>
  );
};

export default PressKit;
