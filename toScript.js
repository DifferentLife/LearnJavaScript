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
    let num2=4, str="Correct.", car_Name = "Toyota";
    var result, card_Number = 16629, card_number = 16357, carName = "Volvo"; 
    result = ((num1+num2)*5)/6; //declare result, give it the value of ((num1+num2)*5)/6
    document.getElementById('jn3').innerHTML ="jn3" + " => " + result +"<br>"+ str;
    document.getElementById('jn4').innerHTML ="jn4" + " => " + card_Number +", "+ card_number;
    document.getElementById('jn5').innerHTML ="jn5" + " => " + carName;
    document.getElementById('jn6').innerHTML ="jn6" + " => " + car_Name;
}
//Data Types
const myData_Type = () => {
    let x, y, z, q ;
    x = 1;
    y = 3;
    z = 1;
    q = 10 + 2 + "jame" ;
    document.getElementById('jn5').innerHTML = (z==x) + "<br>" + (z==y) + "<br>" + q ;
}