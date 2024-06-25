"use client";
export default function HeroSection() {
  return (
    <section className="grid grid-cols-12 gap-5 relative bg-white py-16 overflow-hidden main-container">
      <div className="absolute w-full h-full -bottom-20 -right-44 opacity-[0.10] z-0">
        <img src="./image/hero_image.jpg" alt="Hero image" />
      </div>
      <div className="absolute w-44 h-44 bg-gradient-to-br from-purple-50 to-purple-50 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] opacity-70 -bottom-10 -left-10 rounded-full z-0"></div>
      {/* <div className="absolute w-40 h-40 bg-gradient-to-bl from-gray-50 to-gray-300 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] opacity-30 top-40 left-0 rounded-lg rotate-45 z-0"></div> */}
      <div className="w-full flex md:col-span-7 col-span-12 flex-col gap-5 relative">
        <h1 className="heading_title z-20">ABOUT EVENT</h1>
        <p className="description z-20">
          This is the description of an event. This event was created as an
          evaluation task for the role of <strong>Frontend Engineer</strong>.
          Are you the one we are looking for? {`Don't`} get nervous. Take help
          if you need. Ask us more questions if you did not understand the
          problem. You can reach-us out at reachus@konfhub.com..
        </p>

        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-9">
            <div className="grid grid-cols-3 w-full font-semibold">
              <div className="border-y border-l border-gray-300 p-2 bg-purple-900/10">
                A
              </div>
              <div className="border-y border-l border-gray-300 p-2 bg-purple-900/10">
                B
              </div>
              <div className="border border-gray-300 p-2 bg-purple-900/10">
                C
              </div>
            </div>

            <div className="grid grid-cols-3 text-sm">
              <div className=" border-l border-gray-300 bg-gray-100/50 p-2">
                A1
              </div>
              <div className=" border-l border-gray-300 bg-gray-100/50 p-2">
                B1
              </div>
              <div className=" border-x border-gray-300 bg-gray-100/50 p-2">
                C1
              </div>

              <div className="border-y border-l border-gray-300 p-2">A1</div>
              <div className="border-y border-l border-gray-300 p-2">B1</div>
              <div className="border border-gray-300 p-2">C1</div>
              <div className="border-y border-l border-gray-300 p-2">A1</div>
              <div className="border-y border-l border-gray-300 p-2">B1</div>
              <div className="border border-gray-300 p-2">C1</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:col-span-5 col-span-12">
        <img src="./image/about.png" className="w-full h-full rounded-md" />
      </div>
    </section>
  );
}
