const { useState } = require("react");

export default function MemberDetailRadioButtons({ options = [] }) {
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
