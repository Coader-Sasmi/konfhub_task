"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  EventSponsors,
  HeroSection,
  Navbar,
  RightBar,
  SpeakerSection,
  Ticket,
  Workshop,
} from "./components";

export default function Home() {
  const [value, setValue] = useState<EventDetails>();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task"
      );
      const json = await response.json();

      setValue(json);
    })();
  }, []);

  const regex = /youtube\.com\/embed\/([a-zA-Z0-9_-]+)/;
  const match = value?.description.match(regex);

  // Extracting the video ID from the match
  const videoId = match ? match[1] : null;

  return (
    <article className="bg-purple-50/50">
      <Navbar value={value} />
      <section className="w-full flex lg:flex-row flex-col h-full">
        <div className="lg:w-9/12 w-full flex flex-col">
          <HeroSection value={value} />
          <div className="block lg:hidden">
            <RightBar value={value} />
          </div>
          <div className="grid grid-cols-12 gap-7 main-container bg-gray-100/90 py-12">
            <div className="md:col-span-7 col-span-12 flex-col flex gap-5">
              <h1 className="heading_title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                tenetur accusamus quasi neque aspernatur magni temporibus,
                veritatis iste officiis ex suscipit odio rerum cumque
                necessitatibus, quibusdam impedit, asperiores illo natus! Lorem
                iste
              </p>
              <div>
                <button className="btn_primary px-6 py-2 rounded-lg">
                  Read More
                </button>
              </div>
            </div>
            <div className="md:col-span-5 col-span-12 h-full rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] overflow-hidden">
              <Link
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
              >
                <img
                  src="https://i.ytimg.com/vi_webp/bEM35JDYjrI/maxresdefault.webp"
                  alt=""
                  className="w-full rounded-xl h-[110%] -translate-y-4 "
                />
              </Link>
            </div>
          </div>

          <Ticket />
          <SpeakerSection value={value} />
          <Workshop value={value} />
          <EventSponsors value={value} />
        </div>
        <section className="lg:w-3/12 hidden lg:block shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] w-full bottom-0 top-0 z-20 lg:fixed right-0 bg-white border-l border-primary/10">
          <RightBar value={value} />
        </section>
      </section>
    </article>
  );
}
