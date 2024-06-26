export default function EventSponsors({
  value,
}: {
  value: EventDetails | undefined;
}) {
  return (
    <section
      className="flex flex-col gap-5 bg-white  main-container py-16"
      id="event"
    >
      <h1 className="heading_title leading-3 !uppercase">
        {value?.sponsor_section_title || ""}
      </h1>
      <p
        className="description"
        dangerouslySetInnerHTML={{
          __html: `${value?.sponsor_section_description || ""}`,
        }}
      ></p>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
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
    </section>
  );
}
