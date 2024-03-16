export default function MemberDetailDetailSection(headings = [], detail = []) {
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
