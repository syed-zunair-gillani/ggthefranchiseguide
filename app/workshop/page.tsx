import React from "react";
import WorkshopTemp from "@/templates/workshop";
import { notFound } from "next/navigation";
import { workshopPageQuery } from "@/services";

const Workshop = async () => {
  const page = await workshopPageQuery();

  if (!page) {
    return notFound();
  }

  return (
    <>
      <WorkshopTemp data={page?.workshopPageMeta}/>
    </>
  );
};

export default Workshop;
