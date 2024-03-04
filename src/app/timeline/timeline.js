import { useEffect, useState } from "react";
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
  const [rotation, setRotation] = useState(0);
  const [width, setWidth] = useState(50);
  const [height, setheight] = useState(600);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 600) {
        setRotation(90);
        setWidth(50);
        setheight(300);
      } else {
        setRotation(0);
        setWidth(50);
        setheight(600);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row mx-6 sm:mx-12 items-center self-stretch justify-center gap-8 border-spacing-16 border-dashed border-2 border-red-500 rounded-2xl">
      <div className="flex justify-center items-center gap-4 self-stretch py-4 px-1 sm:pl-14 flex-1">
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
          style={{
            transform: `rotate(${rotation}deg)`,
            width: `${width}px`,
            height: `${height}px`,
          }}
          src={props.lineimage}
          fill={false}
          width={50}
          height={60}
          alt={"img"}
        />
      </div>
      <div className="flex flex-col justify-center gap-4 self-stretch flex-1  py-8 px-12">
        <p className=" sm:text-5xl not-italic font-bold tracking-[0.064em] leading-[4rem]">
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
      <section className="flex flex-col justify-center content-center sm:text-center gap-8 sm:gap-16 sm:px-12 pt-12 px-8 sm:w-6/12 ">
        <p className="text-3xl sm:text-5xl leading-10 tracking-normal text-yellow-500 font-bold">
          Now viewing
        </p>
        <p className="text-6xl sm:text-8xl font-bold leading-10 tracking-[.25em]">
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
