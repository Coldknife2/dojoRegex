
import { regexExercice1 } from "../exercices";

/* Aussi étonnant celui puisse paraître, http://data.iana.org/TLD/tlds-alpha-by-domain.txt XN--TCKWE */
test(`Bonus : La regex devrait nous dire que l'email 小林さんち@メイドラゴン.コム est bien formé`, () => {
    // Arrange
    const evaluatedString = "小林さんち@メイドラゴン.コム";
    const expectedResult = true;
    
    // Act
    const result = regexExercice1.test(evaluatedString);

    // Assert
    expect(result).toEqual(expectedResult);
});