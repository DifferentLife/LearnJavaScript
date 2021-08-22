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