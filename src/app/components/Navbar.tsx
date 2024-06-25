import { Close } from "@mui/icons-material";
import { Collapse } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export const menuArr = [
  { title: "Tickets", link: "#ticket" },
  { title: "Speakers", link: "#speaker" },
  { title: "Workshop", link: "#workshop" },
  { title: "Event Sponsors", link: "#event" },
];

export default function Navbar() {
  return (
    <>
      <nav className=" main-container w-full bg-white shadow lg:sticky lg:block top-0 z-[999] hidden">
        <section className="flex justify-between w-full items-center ">
          <Link href="/">
            <img src="./main_logo.svg" alt="main_logo" className="h-16" />
          </Link>

          <div className="lg:flex gap-10 hidden">
            {menuArr?.map((item, index) => (
              <div key={index} className="cursor-pointer">
                <Link href={item?.link}>
                  <p className="font-normal">{item?.title}</p>
                </Link>
              </div>
            ))}
          </div>
          <div className="hidden md:block">
            <Link href="https://dev-accounts.konfhub.com/login">
              <img src="./image/user.png" alt="user profile" className="h-5" />
            </Link>
          </div>
        </section>
      </nav>
      <ResponsiveNav />
    </>
  );
}

const ResponsiveNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="main-container block lg:hidden py-1 relative  z-[9000] shadow">
      <div className="flex justify-between items-center ">
        <Link href="/">
          <img src="./main_logo.svg" alt="main_logo" className="h-16" />
        </Link>

        <span className="" onClick={() => setOpen(!open)}>
          {open ? (
            <Close className="text-secondary text-3xl" />
          ) : (
            <img src="./image/menu.png" alt="menu" className="h-5 w-5" />
          )}
        </span>
      </div>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <section className="flex flex-col gap-4  absolute bg-white left-0 shadow p-5 top-14 md:top-16 w-full uppercase font-semibold">
          {menuArr?.map((item, index) => (
            <p key={index} className="cursor-pointer">
              <Link href={item?.link}>
                <span>{item?.title}</span>
              </Link>
            </p>
          ))}
          <Link href="https://dev-accounts.konfhub.com/login">Register</Link>
        </section>
      </Collapse>
    </section>
  );
};
