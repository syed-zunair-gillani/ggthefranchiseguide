import React from "react";
import BackgroundImage from "../../public/images/main.webp";
import Image from "next/image";
import { notFound } from "next/navigation";
import { faqPageQuery } from "@/services";

const Faqs = async () => {
  const page = await faqPageQuery();
  console.log("🚀 ~ Faqs ~ page:", page);

  if (!page) {
    return notFound();
  }

  return (
    <>
      <main
        className="min-h-screen w-full bg-cover bg-no-repeat flex justify-center relative"
        style={{
          backgroundImage: `url(${BackgroundImage.src})`,
          backgroundOrigin: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="!max-w-[1280px] flex flex-col justify-center mx-auto px-3">
          <div className="max-w-[1000px]">
            <h2 className="text-left font-bold text-6xl mb-5">
              Everything You Want to Know About Franchising
            </h2>
            <p className="font_aleo text-2xl">
              If you’re considering franchising, you probably have a lot of
              questions. How does franchising work? What are the benefits and
              drawbacks? How much will it cost? There are a lot of frequently
              asked questions and we’re here to help.
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
          {[1, 2, 3, 4]?.map((item, index) => (
            <div key={index}>
              <div>
                <div>
                  <h3 className="text-center mb-4 font-semibold">
                    Who Is Giuseppe Grammatico?
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
                      src="https://www.youtube.com/embed/uZYBc4G25uA?controls=1&amp;rel=0&amp;playsinline=0&amp;cc_load_policy=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fggthefranchiseguide.com&amp;widgetid=1&amp;forigin=https%3A%2F%2Fggthefranchiseguide.com%2Ffaq%2F&amp;aoriginsup=1&amp;gporigin=https%3A%2F%2Fggthefranchiseguide.com%2Ffaq%2F&amp;vf=1"
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
