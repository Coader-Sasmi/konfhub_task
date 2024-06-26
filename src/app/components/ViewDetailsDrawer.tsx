/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import Drawer from "../Drawer";

type DetailsProps = {
  openDrawer: boolean;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
  activeIndex: any;

  value: EventDetails | undefined;
};

export default function ViewDetailsDrawer({
  openDrawer,
  setOpenDrawer,
  activeIndex,
  value,
}: DetailsProps) {
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
    <Drawer
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
      anchor="right"
      drawerStyle="w-[75vw] md:w-[28vw] h-screen p-5 "
    >
      <div className="flex flex-col gap-5">
        <h1 className="text-lg text-primary font-medium">
          {activeIndex?.title}
        </h1>
        <p className="text-gray-600">{activeIndex?.time}</p>
        <p className="description">
          This is the description for workshop sections.
        </p>
        <div className="flex flex-col gap-2">
          <h1 className="heading_title">SPEAKERS</h1>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            {activeIndex?.subArr?.map((item: any, i: number) => (
              <div key={i} className="relative">
                <img
                  src={item?.img}
                  alt="card"
                  className="h-auto w-auto rounded-md"
                />
                <div className="absolute top-0 right-0 p-3 flex flex-col gap-2">
                  {socialArr.map((curElm, i) => (
                    <div
                      key={i}
                      className="md:h-7 h-10 md:w-7 w-10 z-20 bg-white rounded-full cursor-pointer flex flex-col items-center justify-center gap-5"
                    >
                      <Link href={curElm.link} target="_blank">
                        <img
                          src={curElm.image}
                          className="h-4 w-4 "
                          alt="image"
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Drawer>
  );
}
