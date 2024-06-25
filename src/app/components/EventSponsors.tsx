export default function EventSponsors() {
  return (
    <section
      className="flex flex-col gap-5 bg-white  main-container py-16"
      id="event"
    >
      <h1 className="heading_title leading-3">THIS IS EVENT SPONSORS</h1>
      <p className="description">This is description of sponsors section.</p>
      <div className="grid grid-cols-3 gap-7">
        <a href="https://konfhub.com/" target="_">
          <img
            src="./image/sponsor1.webp"
            alt="sponsors"
            className="w-full shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-lg"
          />
        </a>
        <a href="https://darkknight.in/" target="_">
          <img
            src="./image/sponsor-2.jpg"
            alt="sponsors"
            className="w-full rounded-lg shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
          />
        </a>
      </div>
      {/* <div className="flex lg:gap-20 gap-8 items-center">
        <h1 className="text-lg font-semibold">
          SPONSOR
          <br /> CATEGORY
        </h1>
        <div className="w-full bg-secondary/50 h-[0.1rem] rounded-full "></div>
      </div>
      <div className="md:w-1/4">
        <a href="https://darkknight.in/" target="_">
          <img
            src="./image/sponsor-2.jpg"
            alt="sponsors"
            className="w-full rounded-lg"
          />
        </a>
      </div> */}
    </section>
  );
}
