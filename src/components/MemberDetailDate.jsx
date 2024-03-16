export default function MemberDetailDate({
  label = "Some label",
  date = "Some date",
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium text-slate-400">{label}</span>
      <span className="text-base font-medium text-white">{date}</span>
    </div>
  );
}
