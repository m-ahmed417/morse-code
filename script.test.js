import { englishToMorse } from "./script.js";
test("should convert letter a to Morse code", () => {
  const result = englishToMorse("a");
  expect(result).toBe(".-");
});

test("should convert word cat to Morse code", () => {
  const result = englishToMorse("cat");
  expect(result).toBe("-.-. .- -");
});
test("should convert words my house to Morse code", () => {
  const result = englishToMorse("my house");
  expect(result).toBe("-- -.-- / .... --- ..- ... .");
});

test("should convert word DOG in capitals to Morse code", () => {
  const result = englishToMorse("DOG");
  expect(result).toBe("-.. --- --.");
});

test("should convert number 120 to morse code", () => {
  const result = englishToMorse("120");
  expect(result).toBe(".---- ..--- -----");
});

test("should convert special character & to morse code", () => {
  const result = englishToMorse("man & dog");
  expect(result).toBe("-- .- -. / .-... / -.. --- --.");
});

test("should convert a combination of words(lower and upper case), numbers and special characters to morse code", () => {
  const result = englishToMorse("100 Books & Pens");
  expect(result).toBe(
    ".---- ----- ----- / -... --- --- -.- ... / .-... / .--. . -. ..."
  );
});

test("another combination of ords(lower and upper case), numbers and special characters to morse code", () => {
  const result = englishToMorse("There Are 80 Cats + Dogs");
  expect(result).toBe(
    "- .... . .-. . / .- .-. . / ---.. ----- / -.-. .- - ... / .-.-. / -.. --- --. ..."
  );
});
