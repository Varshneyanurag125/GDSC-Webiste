import { useState } from "react";
import Image from "next/image";
const events = [
  {
    eventhead1: "Event 1",
    eventdetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus",
    eventdate: "22 December 2023",
    eventimage: "/event image.png",
    lineimage: "/line attr2.png",
    datecol: "text-red-600",
  },
  {
    eventhead1: "Event 2",
    eventdetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus",
    eventdate: "30 December 2023",
    eventimage: "/event image 2.png",
    lineimage: "/line attr1.png",
    datecol: "text-yellow-600",
  },
];
function Events({ props }) {
  return (
    <div className="flex mx-12 items-center self-stretch justify-center gap-8 border-spacing-16 border-dashed border-2 border-red-500 rounded-2xl">
      <div className="flex justify-center items-center gap-4 self-stretch py-4 pl-14 flex-1">
        <Image
          src={props.eventimage}
          fill={false}
          width={700}
          height={600}
          alt={"event img"}
        />
      </div>
      <div>
        <Image
          src={props.lineimage}
          fill={false}
          width={50}
          height={60}
          alt={"img"}
        />
      </div>
      <div className="flex flex-col justify-center gap-4 self-stretch flex-1  py-8 px-12">
        <p className=" text-5xl not-italic font-bold tracking-[0.064em] leading-[4rem]">
          {props.eventhead1}
        </p>
        <p className="text-xl">{props.eventdetails}</p>
        <p
          className={`${props.datecol} text-3xl not-italic font-normal tracking-[0.4px]`}
        >
          {props.eventdate}
        </p>
      </div>
    </div>
  );
}
const Timeline = () => {
  return (
    <main className="flex flex-col justify-self-center items-center gap-28">
      <section className="flex flex-col justify-center content-center text-center gap-16 px-12 pt-12  w-6/12 ">
        <p className="text-5xl leading-10 tracking-normal text-yellow-500 font-bold">
          Now viewing
        </p>
        <p className="text-8xl font-bold leading-10 tracking-[.25em]">
          Timeline
        </p>
        <p className="px-2 text-left text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
          quaerat quae temporibus quia nemo laborum facere blanditiis ipsam.
          Error rerum corporis dolores, iure sequi eligendi nihil temporibus
          veniam sunt cumque!Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Optio, quaerat quae temporibus quia nemo laborum facere
          blanditiis ipsam. Error rerum corporis dolores, iure sequi eligendi
          nihil temporibus veniam sunt cumque!
        </p>
      </section>
      <Events props={events[0]} />
      <Events props={events[1]} />
    </main>
  );
};

export default Timeline;
