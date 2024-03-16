const { default: Image } = require("next/image");
const { default: MemberDetailDate } = require("./MemberDetailDate");

const images = {
  YouTube: import("../../public/youtube.svg"),
  GitHub: import("../../public/github.svg"),
  LinkedIn: import("../../public/linkedin.svg"),
  vimeo: import("../../public/vimeo.svg"),
};

export default function MemberDetailCard({
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
          <MemberDetailDate label="Start Date" date={startDate} />
          <MemberDetailDate label="End Date" date={endDate} />
        </div>
      </div>
    </div>
  );
}
