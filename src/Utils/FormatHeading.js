// DateOfBirth to Date of Birth
export function formatHeadings(headingText) {
  return headingText.replace(/([A-Z])/g, " $1").replace(/^./, function (str) {
    return str.toUpperCase();
  });
}
