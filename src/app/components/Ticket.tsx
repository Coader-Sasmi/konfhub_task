"use client";

import { AllInboxRounded, CategoryRounded } from "@mui/icons-material";
import Link from "next/link";
import { useState } from "react";

export default function Ticket() {
  const [cur, setCur] = useState(0);
  const ticketcArr = [
    {
      id: 1,
      icon: (
        <AllInboxRounded
          sx={{
            fontSize: 18,
          }}
        />
      ),
      title: "All",
      subArr: [
        {
          id: "i",
          subTitle: "Free Ticket",
          subheading:
            "This is a ticket description. This is a free ticket. This ticket is uncategorised.",
          location:
            "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
          time: "Available Till: 31st Aug 2034, 06:00 PM IST",
          price: "Free",
        },
        {
          id: "ii",
          subTitle: "Paid Ticket",
          subheading:
            "This is a ticket description. This is a paid ticket. This ticket is uncategorised..",
          location:
            "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
          time: "Available Till: 31st Aug 2034, 06:00 PM IST",
          price: "₹1,000",
        },
        {
          id: "iii",
          subTitle: "Donation Ticket",
          subheading:
            "This is a ticket description. This is a donation ticket. This ticket is uncategorised.",
          location:
            "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
          time: "Available Till: 31st Aug 2034, 06:00 PM IST",
          price: "Min ₹10 - Max ₹1,000",
        },
        {
          id: "iv",
          subTitle: "Ticket With Coupon",
          subheading:
            "This is a ticket description. This is a paid ticket. This ticket is uncategorised. This ticket also has a coupon. Buy minimum - 1 and maximum - 1000000 and avail 10% off.",
          location:
            "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
          time: "Available Till: 31st Aug 2034, 06:00 PM IST",
          price: "₹1,000",
        },
        {
          id: "iv",
          subTitle: "Free Ticket in Category1",
          subheading:
            "This is a ticket description. This is a free ticket. This ticket is categorized..",
          location:
            "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
          time: "Available Till: 31st Aug 2034, 06:00 PM IST",
          price: "FREE",
        },
        {
          id: "iv",
          subTitle: "Paid Ticket in Category1",
          subheading:
            "This is a ticket description. This is a paid ticket. This ticket is categorised..",
          location:
            "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
          time: "Available Till: 31st Aug 2034, 06:00 PM IST",
          price: "₹1,000",
        },
        {
          id: "iv",
          subTitle: "Free Ticket in Category2",
          subheading:
            "This is a ticket description. This is a free ticket. This ticket is categorised..",
          location:
            "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
          time: "Available Till: 31st Aug 2034, 06:00 PM IST",
          price: "FREE",
        },
        {
          id: "iv",
          subTitle: "Paid Ticket in Category2",
          subheading:
            "This is a ticket description. This is a paid ticket. This ticket is categorised.",
          location:
            "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
          time: "Available Till: 31st Aug 2034, 06:00 PM IST",
          price: "₹1,000",
        },
      ],
    },
    {
      id: 2,
      title: "Category-1",
      icon: (
        <CategoryRounded
          sx={{
            fontSize: 18,
          }}
        />
      ),
      subDescription:
        "This is a ticket description. This is a paid ticket. This ticket is categorised.",
      subArr: [
        {
          id: "iv",
          subTitle: "Free Ticket in Category1",
          subheading:
            "This is a ticket description. This is a free ticket. This ticket is categorized..",
          location:
            "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
          time: "Available Till: 31st Aug 2034, 06:00 PM IST",
          price: "FREE",
        },
        {
          id: "iv",
          subTitle: "Paid Ticket in Category1",
          subheading:
            "This is a ticket description. This is a paid ticket. This ticket is categorised..",
          location:
            "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
          time: "Available Till: 31st Aug 2034, 06:00 PM IST",
          price: "₹1,000",
        },
      ],
    },
    {
      id: 3,
      title: "Category-2",
      icon: (
        <CategoryRounded
          sx={{
            fontSize: 18,
          }}
        />
      ),
      subDescription:
        "This is category description. This category is expanded by default. This is a little longer description. Adding more content to make the description look longer. Adding more content to make the description look longer. Adding more content to make the description look longer. Adding more content to make the description look longer. Adding more content to make the description look longer. Adding more content to make the description look longer.",
      subArr: [
        {
          id: "iv",
          subTitle: "Free Ticket in Category2",
          subheading:
            "This is a ticket description. This is a free ticket. This ticket is categorised..",
          location:
            "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
          time: "Available Till: 31st Aug 2034, 06:00 PM IST",
          price: "FREE",
        },
        {
          id: "iv",
          subTitle: "Paid Ticket in Category2",
          subheading:
            "This is a ticket description. This is a paid ticket. This ticket is categorised.",
          location:
            "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
          time: "Available Till: 31st Aug 2034, 06:00 PM IST",
          price: "₹1,000",
        },
      ],
    },
  ];

  return (
    <section className="bg-purple-50/50 scroll-m-10" id="ticket">
      <div
        className="flex items-start justify-center flex-col gap-5
       py-12 main-container"
      >
        <h1 className="heading_title z-20">Tickets</h1>
        <div className=" w-full items-start rounded-lg md:gap-5 gap-3 flex bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] md:p-5 p-1">
          {ticketcArr.map((curElm, i) => (
            <div key={i}>
              <button
                onClick={() => setCur(i)}
                className={`${
                  cur === i ? "bg-secondary/70" : "bg-primary"
                } md:w-40 w-24 rounded-md py-2 text-white flex gap-2 justify-center items-center`}
              >
                <div className="-mt-1 hidden md:block">{curElm?.icon}</div>
                <p className="font-">{curElm?.title}</p>
              </button>
            </div>
          ))}
        </div>
        <p className="description">{ticketcArr[cur]?.subDescription}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6">
          {ticketcArr[cur].subArr.map((item, index) => (
            <div
              key={index}
              className="shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-white flex flex-col gap-3 rounded-lg p-4"
            >
              <h1 className="text-xl font-medium">{item.subTitle}</h1>
              <p className="text-gray-500 text-sm">
                {item.subheading.slice(0, 90)}
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-1">
                  <p className="text-blue-500 text-xs">{item.location}</p>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <button className=" text-sm rounded-md text-black">
                    {item.time}
                  </button>

                  <div className="flex justify-between items-center w-full pt-3">
                    <p className="text-center md:text-lg text-black font-semibold">
                      {item.price}
                    </p>
                    <Link
                      href="https://dev.konfhub.com/checkout/konfhub-frontend-evaluation-task?ticketId=99865"
                      target="_blank"
                    >
                      <button className="btn_primary px-4 py-2 text-sm rounded-md">
                        Register
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
