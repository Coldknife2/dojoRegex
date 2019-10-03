
import { regexExercice2 } from "../exercices";

test(`La regex devrait détecter un nombre dans l'intervalle donné`, () => {
    // Arrange
    
    // Act

    // Assert
    for(let i = -50; i < 50; i++)
    {
        if(i >= -25 && i < 30)
        {
            expect(regexExercice2.test(`${i}`)).toBeTruthy();
        } else {
            expect(regexExercice2.test(`${i}`)).toBeFalsy();
        }
    }
});