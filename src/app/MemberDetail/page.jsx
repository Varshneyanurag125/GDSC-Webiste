"use client";
import Header from "@/components/Header";
import Image from "next/image";
import { useState } from "react";

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
// DateOfBirth to Date of Birth
function formatHeadings(headingText) {
  return headingText.replace(/([A-Z])/g, " $1").replace(/^./, function (str) {
    return str.toUpperCase();
  });
}

function objectToArray(obj) {
  const headings = [];
  const detail = [];
  for (const key in obj) {
    headings.push(formatHeadings(key));
    detail.push(obj[key]);
  }
  return [headings, detail];
}

function LeftHead({ text }) {
  return (
    <div className="flex flex-col">
      <h1 className="text-base font-bold text-blue-600">{text}</h1>
    </div>
  );
}

function detailSection(headings = [], detail = []) {
  return (
    <div className="flex flex-col gap-4 w-32">
      {headings.map((heading, index) => (
        <div className="flex flex-col" key={index}>
          <h1 className="text-sm font-medium text-slate-400">
            {headings[index]}
          </h1>
          <p
            className="text-base font-medium text-white text-white overflow-ellipsis truncate"
            onMouseEnter={(e) => {
              e.target.style.overflow = "visible";
              e.target.style.whiteSpace = "normal";
              e.target.style.width = "auto";
            }}
            onMouseLeave={(e) => {
              e.target.style.overflow = "ellipsis";
              e.target.style.whiteSpace = "nowrap";
              e.target.style.width = "32px";
            }}
          >
            {detail[index]}
          </p>
        </div>
      ))}
    </div>
  );
}

function RadioButtons({ options = [] }) {
  const [selected, setSelected] = useState(0);

  function handleOnSelection(index) {
    setSelected(index);
  }
  console.log(options);
  return (
    <div className="flex flex-row gap-4 w-fit items-center">
      {
        // if options is not empty
        !!options.length ? (
          options.map((option, index) => (
            <input
              key={index}
              type="button"
              value={option}
              onClick={() => handleOnSelection(index)}
              className={`flex flex-col w-32 h-10 rounded-full text-white text-sm ${
                selected === index ? "bg-orange-600" : "bg-slate-800"
              }`}
            />
          ))
        ) : (
          <div>No Option</div>
        )
      }
    </div>
  );
}

function Date({ label = "Some label", date = "Some date" }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium text-slate-400">{label}</span>
      <span className="text-base font-medium text-white">{date}</span>
    </div>
  );
}

function Card({
  projectName = "Some project Name",
  description = "This is some very long description you need to use that you sho",
  image = images.YouTube,
  color = "yellow-500",
  externalLinks = [
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
  startDate = "Some string date",
  endDate = "Some string date",
}) {
  return (
    <div className="flex flex-row gap-4 w-full min-h-56 items-center ">
      {/* tailwind for background red */}
      <div className="w-56 h-56 h-full bg-red-500 shrink-0">
        <Image src={image} alt="project image" height={56} width={56} />
      </div>
      <div className="flex flex-col justify-between w-full h-full">
        <div className="flex flex-col gap-2">
          <h1 className={`text-${color}`}>{projectName}</h1>
          <span className="">{description}</span>
          {
            // if externalLinks is not empty
            !!externalLinks && (
              <div className="flex flex-row gap-4">
                {externalLinks.map((link, index) => (
                  <div
                    key={index}
                    className={`flex flex-row gap-2 w-fit items-center`}
                  >
                    <Image
                      className="object-cover"
                      src={images[link.type]}
                      alt={link.type}
                      height={116}
                      width={16}
                    />
                    <a
                      href={link.link}
                      key={index}
                      className="text-white text-sm"
                    >
                      {link.name}
                    </a>
                  </div>
                ))}
              </div>
            )
          }
        </div>
        <div className="flex flex-row justify-between w-full">
          <Date label="Start Date" date={startDate} />
          <Date label="End Date" date={endDate} />
        </div>
      </div>
    </div>
  );
}

export default function MemberDetail() {
  return (
    // <div className="flex flex-col items-center justify-center h-full w-full">
    <div className="flex flex-row w-full h-full gap-4 overflow-hidden">
      <div className="flex flex-col gap-8 p-8 pt-0">
        <LeftHead text="Personal Details" />
        {/* 400 px width */}
        <div className="flex flex-row gap-4 w-full">
          {detailSection(...objectToArray(detailObject[1]))}
          {detailSection(...objectToArray(detailObject[2]))}
        </div>
        <LeftHead text="Contact Details" />
        <div className="flex flex-row gap-4 w-full">
          {detailSection(...objectToArray(detailObject[3]))}
          {detailSection(...objectToArray(detailObject[4]))}
        </div>
      </div>
      <div className="flex flex-col gap-12 w-full h-full">
        <div className="flex flex-row justify-between w-full pr-2">
          <RadioButtons options={buttonOptions} />
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
                <Card
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
