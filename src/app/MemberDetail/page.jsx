"use client";

import MemberDetailCard from "@/components/MemberDetailCard";
import MemberDetailDetailSection from "@/components/MemberDetailDetailSection";
import MemberDetailLeftHead from "@/components/MemberDetailLeftHead";
import MemberDetailRadioButtons from "@/components/MemberDetailRadio";

import { objectToArray } from "../../Utils/ObjectToArray.js";

const headColor = "4285F4";
const headSize = "18px";

const images = {
  YouTube: import("../../../public/youtube.svg"),
  GitHub: import("../../../public/github.svg"),
  LinkedIn: import("../../../public/linkedin.svg"),
  vimeo: import("../../../public/vimeo.svg"),
};

const detailObject = {
  1: {
    Name: "Arnav Chhabra",
    DateOfBirth: "12th September 2003",
    TotalProjectCount: 8,
  },
  2: {
    Phone: "1234567890",
    AlternatePhone: "0987654321",
    Email: "22BCS024@nith.ac.in",
    AlternateEmail: "aranvadvik2003@gmail.com",
  },
  3: {
    LinkedIn: "halleys123",
    Github: "arnavchhabra",
    Codeforces: "arnavchhabra",
  },
  4: {
    GDSC: "Member",
    Year: "Second Year",
  },
};
const buttonOptions = ["Projects", "Event List"];

const projectCards = [
  {
    projectName: "Some project Name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dignissimos fuga, quam unde voluptas facere saepe similique at non aperiam eum eligendi est incidunt modi distinctio ab, in ipsam ex!",
    image: images.YouTube,
    color: "yellow-500",
    externalLinks: [
      {
        name: "Some name",
        link: "Some link",
        type: "YouTube",
      },
      {
        name: "Some name",
        link: "Some link",
        type: "YouTube",
      },
      {
        name: "Some name",
        link: "Some link",
        type: "YouTube",
      },
    ],
  },
  {
    projectName: "Some project Name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dignissimos fuga, quam unde voluptas facere saepe similique at non aperiam eum eligendi est incidunt modi distinctio ab, in ipsam ex!",
    image: images.GitHub,
    color: "Red-500",
    externalLinks: [
      {
        name: "Some name",
        link: "Some link",
        type: "GitHub",
      },
      {
        name: "Some name",
        link: "Some link",
        type: "GitHub",
      },
      {
        name: "Some name",
        link: "Some link",
        type: "GitHub",
      },
    ],
  },
];

export default function MemberDetail() {
  return (
    // <div className="flex flex-col items-center justify-center h-full w-full">
    <div className="flex flex-row w-full h-full gap-4 overflow-hidden">
      <div className="flex flex-col gap-8 p-8 pt-0">
        <MemberDetailLeftHead text="Personal Details" />
        {/* 400 px width */}
        <div className="flex flex-row gap-4 w-full">
          {MemberDetailDetailSection(...objectToArray(detailObject[1]))}
          {MemberDetailDetailSection(...objectToArray(detailObject[2]))}
        </div>
        <MemberDetailLeftHead text="Contact Details" />
        <div className="flex flex-row gap-4 w-full">
          {MemberDetailDetailSection(...objectToArray(detailObject[3]))}
          {MemberDetailDetailSection(...objectToArray(detailObject[4]))}
        </div>
      </div>
      <div className="flex flex-col gap-12 w-full h-full">
        <div className="flex flex-row justify-between w-full pr-2">
          <MemberDetailRadioButtons options={buttonOptions} />
          <input
            type="button"
            value="Change View"
            className={`flex flex-col w-32 h-10 rounded-full text-white bg-slate-800 text-sm`}
          />
        </div>
        {/* Overflow scroll */}
        <div className="flex flex-col gap-8 w-full h-full p-8 pt-0 overflow-scroll">
          {
            // if projectCards is not empty
            !!projectCards.length ? (
              projectCards.map((card, index) => (
                <MemberDetailCard
                  key={index}
                  projectName={card.projectName}
                  description={card.description}
                  image={card.image}
                  color={card.color}
                  externalLinks={card.externalLinks}
                />
              ))
            ) : (
              <div>No Project</div>
            )
          }
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
