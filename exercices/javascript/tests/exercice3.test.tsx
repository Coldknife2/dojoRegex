import { regexExercice3 } from "../exercices";
import { logs } from "./logs";

test(`La regex devrait permettre de formatter`, () => {
    // Arrange

    // Act
    const result = (logs.match(regexExercice3) || []);

    // Assert
    expect(result.length).toEqual(792);
});