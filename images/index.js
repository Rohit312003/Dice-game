var ran = Math.random() * 6;

ran = Math.floor(1 + ran);
console.log(ran);

var ran2 = Math.random() * 6;

ran2 = Math.floor(1 + ran2);
console.log(ran2);

const a = { 1: "images/dice1.png", 2: "images/dice2.png", 3: "images/dice3.png", 4: "images/dice4.png", 5: "images/dice5.png", 6: "images/dice6.png" };


// const img1 = document.getElementsByClassName("img1");
// img1.setAttribute('src', 'images/dice2.png');
if (ran === ran2) {
    document.querySelector("h1").innerText = "Draw";
    document.getElementsByClassName("img1")[0].setAttribute("src", a[ran]);
    document.getElementsByClassName("img2")[0].setAttribute("src", a[ran2]);
}

if (ran > ran2) {
    document.querySelector("h1").innerText = "Player 1 Wins";
    document.getElementsByClassName("img1")[0].setAttribute("src", a[ran]);
    document.getElementsByClassName("img2")[0].setAttribute("src", a[ran2]);
}

if (ran < ran2) {
    document.querySelector("h1").innerText = "Player 2 Wins";
    document.getElementsByClassName("img1")[0].setAttribute("src", a[ran]);
    document.getElementsByClassName("img2")[0].setAttribute("src", a[ran2]);
}