"use client";

import Link from "next/link";

export default function SpeakerSection({
  value,
}: {
  value: EventDetails | undefined;
}) {
  const speakerArr = [
    {
      id: 1,
      title: "Bruce Wayne",
      subTitle: "Chairman",
      subHeading: "Wayne Enterprises",
      image:
        "https://dev-media.konfhub.com/speakers/2024/June/09/1717977337424-66d3d266-64c3-4c45-a4ec-f9288d96dbc8.jpg",
    },
    {
      id: 2,
      title: "Dark Knight",
      subTitle: "Batman",
      subHeading: "Gotham",
      image:
        "https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg",
    },
  ];
  return (
    <div className="bg-white main-container py-16" id="speaker">
      <div className="flex flex-col gap-2">
        <h1 className="heading_title !uppercase">
          {value?.speaker_section_title || ""}
        </h1>
        <p
          className="description"
          dangerouslySetInnerHTML={{
            __html: `${value?.speaker_section_description || ""}`,
          }}
        ></p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6">
        {speakerArr.map((item, i) => (
          <Speaker item={item} key={i} value={value} />
        ))}
      </div>
    </div>
  );
}

const Speaker = ({
  item,
  value,
}: {
  item: any;
  value: EventDetails | undefined;
}) => {
  const socialArr = [
    {
      id: 1,
      image: "https://cdn-icons-png.flaticon.com/128/20/20837.png",
      link: `${value?.organizer_facebook_url || ""}`,
    },
    {
      id: 2,
      image: "https://cdn-icons-png.flaticon.com/128/2976/2976286.png",
      link: `${value?.organizer_twitter_url || ""}`,
    },
    {
      id: 3,
      image: "https://cdn-icons-png.flaticon.com/128/2111/2111532.png",
      link: `${value?.organizer_linkedin_url || ""}`,
    },
    {
      id: 4,
      image: "https://cdn-icons-png.flaticon.com/128/3083/3083741.png",
      link: `${value?.organiser_website || ""}`,
    },
  ];
  return (
    <div className="py-5 flex items-center justify-center ">
      <div className="relative overflow-hidden w-full ">
        <div className="absolute flex items-end bottom-0 bg-gradient-to-b from-transparent via-black/40 to-black/60  w-full h-full z-10 rounded-b-md">
          <div className="flex justify-between w-full text-white p-4 items-center">
            <div className="flex flex-col">
              <h1 className="lg:text-base 2xl:text-xl font-semibold">
                {item.title}
              </h1>
              <h2 className="text-xs font-normal">{item.subTitle}</h2>
            </div>
            <div>
              <h3 className="text-sm">{item.subHeading}</h3>
            </div>
          </div>
        </div>
        <div className="w-full relative ">
          <div className="absolute top-0 right-0 p-4 flex flex-col gap-4">
            {socialArr.map((curElm, i) => (
              <div
                key={i}
                className="h-9 w-9 z-20 bg-white rounded-full cursor-pointer flex flex-col items-center justify-center gap-5"
              >
                <Link href={curElm.link} target="_blank">
                  <img src={curElm.image} className="h-4 w-4 " alt="image" />
                </Link>
              </div>
            ))}
          </div>
          <div className="w-full">
            <img
              src={item.image}
              className="w-full object-cover rounded-md"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
