import { morseList } from "./data.js";

export const englishToMorse = (text) => {
  const textUpperCase = text.toUpperCase();
  const charArr = textUpperCase.split("");
  const morseArr = charArr.map((char) => {
    if (morseList[char]) {
      return morseList[char];
    } else {
      return "invalid character";
    }
  });
  const finalMorse = morseArr.join(" ");
  return finalMorse;
};

const input = document.querySelector("#input");
const output = document.querySelector("#output");
const submit = document.querySelector("#submit");

submit.addEventListener("click", () => {
  const inputText = input.value;
  const convertedToMorse = englishToMorse(inputText);
  const finalOutput = output;
});
