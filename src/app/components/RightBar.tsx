import { OpenInNew } from "@mui/icons-material";

export default function RightBar() {
  const contactArr = [
    { image: "./image/facebook.png", link: "https://www.facebook.com/konfhub" },
    { image: "./image/twitter.png", link: "https://twitter.com/konfhub" },
    { image: "./image/linkedin.png", link: "https://linkedin.com/konfhub" },
    { image: "./image/internet.png", link: "https://darkknight.in" },
    { image: "./image/email.png", link: "mailto:manjunath@konfhub.com" },
    {
      image: "./image/telephone.png",
      link: "tel:+919988776655",
    },
  ];
  return (
    <aside className="flex flex-col gap-3 pt-24 px-6">
      <section className="flex flex-col gap-3">
        <p className="heading_title">KonfHub Frontend Evaluation Task</p>
        <div className="w-full flex gap-7 pt-2">
          <div className="flex gap-2 ">
            <img
              src="./image/video-camera.png"
              alt="vedio"
              className="h-5 w-5"
            />
            <span className="text-sm">Online</span>
          </div>
          <div className="flex gap-2">
            <img src="./image/money.png" alt="vedio" className="h-5 w-5" />
            <span className="text-sm">Paid</span>
          </div>
        </div>
        <div>
          <p>
            Event Live Link :{" "}
            <a
              href="https://dev.konfhub.com/konfhub-frontend-evaluation-task"
              target="_"
              className="text-blue-500 underline"
            >
              Open streaming website
            </a>
          </p>
          <p>
            Date:{" "}
            <span className="text-gray-500 text-xs tracking-wider">
              Jul 31st, 2034 6:00 AM - Aug 31st, 2034 6:00 PM IST
            </span>
          </p>
        </div>
        <div>
          <p className="font-light">EVENT STARTS IN </p>
          <p className="font-semibold text-lg tracking-wider">
            3687D : 14H : 20M : 41S
          </p>
        </div>
        <a
          href="https://dev.konfhub.com/konfhub-frontend-evaluation-task"
          target="_"
          className="btn_primary py-2 rounded-lg"
        >
          Buy Now
        </a>
        <a
          href="https://dev.konfhub.com/konfhub-frontend-evaluation-task"
          target="_"
          className="common-transition border border-secondary py-1 rounded-lg flex justify-center items-center gap-2 hover:text-blue-500 hover:underline "
        >
          Official Website
          <OpenInNew />
        </a>
      </section>
      <section className="pt-5">
        <h1 className="heading_title font-semibold text-xl pb-2">HOSTED BY</h1>
        <div className="">
          <div className="flex gap-2 h-full">
            <img
              src="./image/profile_image.jpg"
              alt="profile"
              className="h-20 rounded-full object-cover"
            />
            <div>
              <h1 className="text-lg font-medium tracking-wider">
                Manjunath R
              </h1>
              <p className="text-xs font-light md:tracking-wide">
                This is the description of the organiser. You can get to know
                more about the organiser here.
              </p>
            </div>
          </div>
          <div className="flex gap-3 pt-5">
            {contactArr?.map((item, index) => (
              <a key={index} href={item?.link} target="_">
                <img src={item?.image} alt="image" className="h-8 w-8" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </aside>
  );
}
