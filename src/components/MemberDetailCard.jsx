const { default: Image } = require("next/image");
const { default: MemberDetailDate } = require("./MemberDetailDate");

const images = {
  face: import("../../public/face.png"),
};

export default function MemberDetailCard({
  projectName = "Some project Name",
  description = "This is some very long description you need to use that you sho",
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
      <div className="w-72 h-56 h-full bg-red-500 shrink-0 relative rounded-tl-2xl overflow-hidden">
        <Image
          src={require("../../public/face.png")}
          alt="project image"
          // 100% width and height
          layout="fill"
          // make it round
        />
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
                      src={require(`../../public/${link.type.toLowerCase()}.svg`)}
                      alt={link.type}
                      height={16}
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
          <MemberDetailDate label="Start Date" date={startDate} />
          <MemberDetailDate label="End Date" date={endDate} />
        </div>
      </div>
    </div>
  );
}
