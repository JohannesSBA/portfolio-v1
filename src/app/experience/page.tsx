import React from "react";
import ExperienceItem from "../components/ExperienceItem";

const page = () => {
  return (
    <div className="w-screen bg-teal-blue-950 bg-opacity-30 flex flex-col justify-center items-center overflow-scroll mt-12">
      <h1 className="text-2xl font-extrabold uppercase my-12">
        Work Experiences
      </h1>
      <div className="flex flex-col gap-4 overflow-scroll">
        <ExperienceItem
          date={"May 2023 - August 2023"}
          title={"Grassroots Grocery"}
          desc={[
            "Designed Automation for sending event notifications to over 2000 people that coordinates drivers, volunteers, and company employees",
            "Reduced 90% of manual driver assignments by developing automated scripts using JS",
            "Established +6 efficient webhooks and text triggers, boosted operational efficiency by 50%",
            "Presented outline and documentation to Grassroots Grocery founder and tech lead for deployment",
          ]}
        />
        <ExperienceItem
          date={"May 2022 - August 2022"}
          title={"Shady Grove Group"}
          desc={[
            "Used Flutter and FireBase to develop an application capable of authenticating and creating mobile users in the GERD app",
            "Participated in daily, hour-long, standup meetings to discuss the progress of our program, impediments and/or blockers to push team branches onto Git",
            "Worked alongside a Scrum Agile team, including roles such as team leader and scrum master.",
          ]}
        />
        <ExperienceItem
          date={"March 2019"}
          title={"Websprix IT Solutions PLC"}
          desc={[
            "Aided in filing paperwork of new customers of their broadband connections",
            "Called former customers to gain an understanding of customer dissatisfaction",
            "Worked at a booth, handing out fliers to promote the service that the business provided",
          ]}
        />
      </div>
      <div className="hidden md:flex absolute h-12 w-12"></div>
    </div>
  );
};

export default page;
