"use client";
export default function Workshop({
  value,
}: {
  value: EventDetails | undefined;
}) {
  const workShopArr = [
    {
      id: 1,
      title: "How to make more money",
      time: "Jun 11th, 2024 at 10:00 AM (IST)",
      // image: "./image/workshop-1.webp",
      image: "./image/workshop-3.webp",

      subArr: [
        {
          img: "https://dev-media.konfhub.com/speakers/2024/June/09/1717977337424-66d3d266-64c3-4c45-a4ec-f9288d96dbc8.jpg",
        },
      ],
    },
    {
      id: 2,
      title: "How to fight crime",
      time: "Jun 1st, 2034 at 10:00 AM (IST)",
      image: "./image/workshop-2.webp",
      subArr: [
        {
          img: "https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg",
        },
      ],
    },
    {
      id: 3,
      title: "This is a workshop connected to a ticket",
      time: "Jun 1st, 2034 at 10:00 AM (IST)",
      image: "./image/workshop-3.webp",
      subArr: [
        {
          img: "https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg",
        },
        {
          img: "https://dev-media.konfhub.com/speakers/2024/June/09/1717977337424-66d3d266-64c3-4c45-a4ec-f9288d96dbc8.jpg",
        },
      ],
    },
  ];
  return (
    <div className="bg-transparent  main-container py-16" id="workshop">
      <div className="flex flex-col gap-2 pb-5">
        <h1 className="heading_title uppercase">
          {value?.workshop_section_title || ""}
        </h1>
        <p
          className="description"
          dangerouslySetInnerHTML={{
            __html: `${value?.workshop_section_description || ""}`,
          }}
        ></p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {workShopArr.map((item, i) => (
          <div
            key={i}
            className="shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-white flex flex-col rounded-lg overflow-hidden"
          >
            <img
              src={item.image}
              alt=""
              className="h-fit w-full object-contain"
            />
            <div className="p-4 flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <h1 className="text-primary font-semibold text-lg leading-6 truncate whitespace-nowrap">
                  {item.title}
                </h1>
                <div className="flex gap-2 items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2838/2838779.png"
                    alt=""
                    className="h-4 w-4"
                  />
                  <p className="text-gray-500 text-sm">{item.time}</p>
                </div>
              </div>
              <div className="flex justify-between w-full">
                <div className="flex">
                  {item.subArr.map((curElm, index) => (
                    <div key={index}>
                      <img
                        src={curElm.img}
                        alt=""
                        className="rounded-full h-9 object-contain w-9"
                      />
                    </div>
                  ))}
                </div>
                <button className="px-3 py-1 rounded-md bg-primary text-white text-sm">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
