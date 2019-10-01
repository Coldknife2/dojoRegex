
import { regexExercice1 } from "../exercices";

test(`La regex devrait nous renvoyer l'email de monsieur Durant`, () => {
    // Arrange
    const evaluatedString = "Donec sed condimentum neque, sit amet posuere diam. Mauris ex lectus, condimentum vitae malesuada eu, tempor ut nulla. Morbi laoreet leo eu velit feugiat pulvinar. Integer ut mollis eros. Aliquam facilisis arcu tellus, sed aliquet tellus congue vitae. Cras pellentesque ac nulla ut rutrum. Monsieur.durant@axa.fr In porta dolor libero, eget aliquet velit lobortis ac. Aenean id augue ac purus pellentesque eleifend. Ut consequat ex eget nulla rutrum, viverra faucibus lacus rutrum. Maecenas sollicitudin euismod nisi, vitae volutpat felis pulvinar id. Curabitur pretium lacus nec ante pellentesque rhoncus. Duis accumsan vulputate dapibus. In tincidunt est non mi imperdiet, et bibendum elit pellentesque. Praesent nunc mauris, ornare vel sem at, pellentesque bibendum quam. Proin scelerisque purus non posuere rhoncus. Curabitur fermentum laoreet varius.";
    const expectedResult = "Monsieur.durant@axa.fr";
    
    // Act
    const result = (evaluatedString.match(regexExercice1) || [])[0];

    // Assert
    expect(result).toEqual(expectedResult);
});

test.each([
    ["geoffrey.gourlez@axa.fr", true],
    ["j'ai_des#caractères_spéciaux@et_c'est_bon.com", true], /* https://en.wikipedia.org/wiki/Email_address */
    ["trop@cour.t", false], /* Trop court, les noms de domaines ont au moins 2 caractères */
    ["au@secours", false], /* Pas de nom de domaine ? */
])(`La regex devrait vérifier si l'email %p est bien ou mal formé`, (testString, expected) => {
    // Arrange
    const evaluatedString = testString.toString();

    // Act
    const result = regexExercice1.test(evaluatedString);

    // Assert
    expect(result).toEqual(expected);
});