import { formatHeadings } from "./FormatHeading.js";

export function objectToArray(obj) {
  const headings = [];
  const detail = [];
  for (const key in obj) {
    headings.push(formatHeadings(key));
    detail.push(obj[key]);
  }
  return [headings, detail];
}
