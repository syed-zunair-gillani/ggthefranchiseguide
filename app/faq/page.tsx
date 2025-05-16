import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { faqPageQuery } from "@/services";
import { videoURL } from "@/lib/videoURL";

const Faqs = async () => {
  const page = await faqPageQuery();

  if (!page) {
    return notFound();
  }

  return (
    <>
      <main
        className="min-h-screen w-full bg-cover bg-no-repeat flex justify-center relative"
        style={{
          backgroundImage: `url(${page?.faqPageMeta?.main?.backgroundImage?.node?.mediaItemUrl})`,
          backgroundOrigin: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="!max-w-[1280px] flex flex-col justify-center mx-auto px-3">
          <div className="max-w-[1000px] text-white">
            <h2 className="text-left font-bold text-6xl mb-5 text-shadow-title">
              {page?.faqPageMeta?.main?.title}
            </h2>
            <p className="font_aleo text-2xl text-shadow-title">
            {page?.faqPageMeta?.main?.caption}
            </p>
          </div>
        </div>
        <Image
          src="/images/divider2.webp"
          alt=""
          width={800}
          height={120}
          className="w-full absolute bottom-0"
          style={{ transform: "scaleX(-1)" }}
        />
      </main>

      <section className="z-[1] bg-white relative mt-[-2px]">
        <div className="max-w-[1280px] w-full mx-auto px-3 py-10 grid gap-8 my-10 grid-cols-1 md:grid-cols-2 lg:!grid-cols-3">
          {page?.faqPageMeta?.faq?.map((item:any, index:any) => (
            <div key={index}>
              <div>
                <div>
                  <h3 className="text-center mb-4 font-semibold">
                    {item?.title}
                  </h3>{" "}
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <iframe
                      className="w-full h-[225px]"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      title="Who is Giuseppe Grammatico?"
                      width="640"
                      height="360"
                      src={videoURL(item?.videoUrl)}
                      id="widget2"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Faqs;
