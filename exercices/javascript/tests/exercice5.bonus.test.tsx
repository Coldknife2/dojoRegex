
import { regexExercice3 } from "../exercices";

test.each([
    ["3/10"],
    ["-3/10"],
    ["323452/1012504"],
    ["-323452/1012504"]
])(`Les fractions sont des nombres rationnels`, (testString) => {
    // Arrange
    const evaluatedString = testString.toString();

    // Act
    const result = (evaluatedString.match(regexExercice3) || [])[0];

    // Assert
    expect(result.length).toEqual(testString.length);
});

test.each([
    ["3/10"],
    ["-3/10"],
    ["3234,52/1012.504"],
    ["-32.3452/10125,04"]
])(`Les fractions à virgules sont des nombres rationnels !`, (testString) => {
    // Arrange
    const evaluatedString = testString.toString();

    // Act
    const result = (evaluatedString.match(regexExercice3) || [])[0];

    // Assert
    expect(result.length).toEqual(testString.length);
});

test.each([
    ["1e10"],
    ["1.5e10"],
    ["1,5e10"],
    ["-1e10"],
    ["-1.5e10"],
    ["-1,5e10"]
])(`Les exponentielles aussi`, (testString) => {
    // Arrange
    const evaluatedString = testString.toString();

    // Act
    const result = (evaluatedString.match(regexExercice3) || [])[0];

    // Assert
    expect(result.length).toEqual(testString.length);
});

test.each([
    ["3./10"],
    ["-3/.10"],
    ["323452/1012504."],
    ["-323452,/1012504"],
    ["-/"],
    ["-/"],
    ["-."],
    ["./."],
    ["1ee1"]
])(`Encore plus d'erreurs !`, (testString) => {
    // Arrange
    const evaluatedString = testString.toString();

    // Act
    const result = regexExercice3.test(evaluatedString);

    // Assert
    expect(result).toEqual(false);
});