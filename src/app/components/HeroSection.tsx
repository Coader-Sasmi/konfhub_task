/* eslint-disable @next/next/no-img-element */
"use client";
export default function HeroSection({
  value,
}: {
  value: EventDetails | undefined;
}) {
  const regex = /<img[^>]+src="([^">]+)"/i;
  const match = value?.description.match(regex);

  const tableRegex = /<table[\s\S]*?<\/table>/m;
  const tableMatch = value?.description.match(tableRegex);

  return (
    <section className="grid grid-cols-12 gap-5 relative bg-white py-16 overflow-hidden main-container">
      <div className="absolute w-full h-full -bottom-20 md:-right-44 opacity-[0.10] z-0">
        <img src="./image/hero_image.jpg" alt="Hero image" />
      </div>
      <div className="absolute md:w-44 md:h-44 bg-gradient-to-br from-purple-50 to-purple-50 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] opacity-70 -bottom-10 -left-10 rounded-full z-0"></div>
      <div className="w-full flex md:col-span-7 col-span-12 flex-col gap-5 relative">
        <h1 className="heading_title z-20">ABOUT EVENT</h1>
        <p
          dangerouslySetInnerHTML={{
            __html:
              `${
                value?.description?.split("reachus@konfhub.com")[0]
              } reachus@konfhub.com.` || "",
          }}
        />

        <div className="grid grid-cols-12 gap-5">
          <div
            className="md:col-span-9 col-span-12 border"
            dangerouslySetInnerHTML={{
              __html: `${tableMatch ? tableMatch[0] : ""}`,
            }}
          ></div>
        </div>
      </div>

      <div className="w-full md:col-span-5 col-span-12">
        <img
          src={
            (match && match[0] && JSON.parse(match[0].split("src=")[1])) || ""
          }
          alt=""
          className="w-full h-full rounded-md"
        />
      </div>
    </section>
  );
}
