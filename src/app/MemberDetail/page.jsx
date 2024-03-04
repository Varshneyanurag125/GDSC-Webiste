"use client";
import Header from "@/components/Header";
import { useState } from "react";

const headColor = "4285F4";
const headSize = "18px";
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

function RadioButtons(options = []) {
  const [selected, setSelected] = useState(0);

  function handleOnSelection(index) {
    setSelected(index);
  }

  return (
    <div className="flex flex-row gap-4 w-fit">
      <input
        type="button"
        value={options[0]}
        onClick={() => handleOnSelection(0)}
        className={`flex flex-col w-32 h-10 rounded-full text-white  ${
          selected === 0 ? "bg-orange-600" : "bg-slate-800"
        }`}
      />
      <input
        type="button"
        value={options[1]}
        onClick={() => handleOnSelection(1)}
        className={`flex flex-col w-32 h-10 rounded-full text-white ${
          selected === 1 ? "bg-orange-600" : "bg-slate-800"
        }`}
      />
    </div>
  );
}

export default function MemberDetail() {
  return (
    // <div className="flex flex-col items-center justify-center h-full w-full">
    <div className="flex flex-row w-full h-full">
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
      <div className="flex flex-col gap-4 w-full h-full">
        <div className="flex flex-row justify-between w-full pr-2">
          <RadioButtons options={buttonOptions} />
          <input
            type="button"
            value="Change View"
            className={`flex flex-col w-32 h-10 rounded-full text-white bg-slate-800 text-sm`}
          />
        </div>
        <div className="flex flex-col gap-4 w-full h-full p-8 pt-0"></div>
        {/* </div> */}
      </div>
    </div>
  );
}
