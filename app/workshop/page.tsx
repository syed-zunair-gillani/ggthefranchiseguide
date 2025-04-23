import React from "react";
import WorkshopTemp from "@/templates/workshop";
import { notFound } from "next/navigation";
import { workshopPageQuery } from "@/services";

const Workshop = async () => {
  const page = await workshopPageQuery();
  console.log("🚀 ~ Workshop ~ page:", page);

  if (!page) {
    return notFound();
  }

  return (
    <>
      <WorkshopTemp />
    </>
  );
};

export default Workshop;
