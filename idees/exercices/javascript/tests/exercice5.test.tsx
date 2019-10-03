
import { regexExercice3 } from "../exercices";

test.each([
    ["15"],
    ["151245"],
    ["151287502323805127499252034707234"],
    ["15.25"],
    ["15,25"]
])(`La regex doit matcher des nombres positifs`, (testString) => {
    // Arrange
    const evaluatedString = testString.toString();

    // Act
    const result = (evaluatedString.match(regexExercice3) || [])[0];

    // Assert
    expect(result.length).toEqual(testString.length);
});

test.each([
    ["-15"],
    ["- 15"],
    ["-151245"],
    ["-151287502323805127499252034707234"],
    ["-15.25"],
    ["-15,25"]
])(`La regex doit matcher des nombres négatifs`, (testString) => {
    // Arrange
    const evaluatedString = testString.toString();

    // Act
    const result = (evaluatedString.match(regexExercice3) || [])[0];

    // Assert
    expect(result.length).toEqual(testString.length);
});

test.each([
    ["-15,."],
    ["-. 15"],
    ["-,151245"],
    ["-15128750232380,51274992,52034707234"],
    ["-15..25"],
    ["-15,-25"]
])(`La regex ne doit pas matcher sur des nombres faussés`, (testString) => {
    // Arrange
    const evaluatedString = testString.toString();

    // Act
    const result = regexExercice3.test(testString);

    // Assert
    expect(result).toEqual(false);
});

