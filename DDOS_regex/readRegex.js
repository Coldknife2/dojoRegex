let fs = require("fs");

let text = fs.readFileSync("./owasp.txt", {"encoding": "UTF-8"});

let splittedText = text.split(/[A-Z]/);
let [debut, fin] = splittedText;
console.log(
    Boolean(fin && debut.match(/([a-z]+.)+/) && fin.match(/[a-z]+$/) && splittedText.length == 2)
);