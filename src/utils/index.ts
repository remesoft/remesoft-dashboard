// Digit Translator
const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
export const bnDigit = (number: number) => {
  return number
    .toString()
    .split("")
    .map((char) => {
      return /\d/.test(char) ? banglaDigits[parseInt(char)] : char;
    })
    .join("");
};
