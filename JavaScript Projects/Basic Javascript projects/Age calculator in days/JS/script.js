// let birthyear;
// let ageInYear;
// let ageInDays;
// let h1;
// let textAnswer;

function ageInDays() {
    var birthyear = prompt('What year you were born?');
    var ageInDays = (2020 - birthyear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDays + ' Years old.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}