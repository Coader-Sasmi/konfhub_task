import { OpenInNew } from "@mui/icons-material";
import moment from "moment";

export default function RightBar({
  value,
}: {
  value: EventDetails | undefined;
}) {
  const contactArr = [
    {
      image: "./image/facebook.png",
      link: `${value?.organizer_facebook_url || ""}`,
    },
    {
      image: "./image/twitter.png",
      link: `${value?.organizer_twitter_url || ""}`,
    },
    {
      image: "./image/linkedin.png",
      link: `${value?.organizer_linkedin_url || ""}`,
    },
    {
      image: "./image/internet.png",
      link: `${value?.organiser_website || ""}`,
    },
    {
      image: "./image/email.png",
      link: `mailto:${value?.organiser_email || ""}`,
    },
    {
      image: "./image/telephone.png",
      link: `tel:${value?.organiser_dial_code || ""}${
        value?.organiser_phone || ""
      }`,
    },
  ];
  const inputTime = value?.start_time;
  // Parse the string into a Moment object
  const timeMoment = moment(inputTime, "HH:mm:ss");

  // Format the Moment object to get only the time
  const formattedTime = timeMoment.format("HH:mm A");

  const endTime = value?.end_time;
  // Parse the string into a Moment object
  const endMoment = moment(endTime, "HH:mm:ss");

  // Format the Moment object to get only the time
  const formattedEndTime = endMoment.format("HH:mm A");

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
              href={value?.event_live_link || ""}
              target="_"
              className="text-blue-500 underline"
            >
              Open streaming website
            </a>
          </p>

          <p>
            Date:{" "}
            <span className="text-gray-500 text-xs tracking-wider">
              {moment(value?.start_date).format("MMMM Do YYYY")} {formattedTime}{" "}
              - {moment(value?.end_date).format("MMMM Do YYYY")}{" "}
              {formattedEndTime}
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
          href={value?.event_live_link || ""}
          target="_"
          className="btn_primary py-2 rounded-lg"
        >
          Buy Now
        </a>
        <a
          href={value?.event_live_link || ""}
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
              src={value?.organiser_image_url || ""}
              alt="profile"
              className="h-20 rounded-full object-cover"
            />
            <div>
              <h1 className="text-lg font-medium tracking-wider">
                {value?.organiser_name || ""}
              </h1>
              <p
                className="text-xs font-light md:tracking-wide"
                dangerouslySetInnerHTML={{
                  __html: `${value?.organiser_info || ""}`,
                }}
              ></p>
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
