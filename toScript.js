// Where To
const myFunction = () => {
    document.getElementById('jn').innerHTML = "Hi where to."
}
// Statements
const myStatement = () => {
    let j, p, g;
    j = 5;
    p = 6;
    g = j+p;
    document.getElementById('jn1').innerHTML = g;
    document.getElementById('jn2').innerHTML = Math.floor(Math.random() * g);
}