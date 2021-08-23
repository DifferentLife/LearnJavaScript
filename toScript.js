// Where To
const myFunction = () => {
    document.getElementById('jn').innerHTML = "Hi where to."
}
// Statements
const myStatement = () => {
    let j, p, o, g;
    j = 5;
    p = 6;
    o = 8;
    g = (j+p)*o;
    document.getElementById('jn1').innerHTML = g;
    document.getElementById('jn2').innerHTML = Math.floor(Math.random() * g);
}
//Syntax
const mySyntax = () => {
    const num1=7;
    let num2=4, str="Correct.";
    var result;
    var card_Number, card_number;
    card_Number = 16629;
    card_number = 16357;
    result = ((num1+num2)*5)/6
    document.getElementById('jn3').innerHTML = result +" "+ str;
    document.getElementById('jn4').innerHTML = card_Number +" "+ card_number;
}