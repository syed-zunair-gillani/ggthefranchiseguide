import React from "react";
import PressKitTemplate from "@/templates/press-kit";
import { pressKitPageQuery } from "@/services";
import { notFound } from "next/navigation";

const PressKit = async () => {
  const page = await pressKitPageQuery();

  if (!page) {
    return notFound();
  }
  return (
    <>
      <PressKitTemplate data={page?.pressKitPageMeta}/>
    </>
  );
};

export default PressKit;
