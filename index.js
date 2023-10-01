// dice comparison
navigator.vibrate(200);

random1 = Math.ceil(Math.random() * 6);
random2 = Math.ceil(Math.random() * 6);

img1 = document.querySelector('.img1').setAttribute('src', `./images/dice${random1}.png`);
img2 = document.querySelector('.img2').setAttribute('src', `./images/dice${random2}.png`);

if (random1 > random2) {
    document.querySelector('h1').textContent = '🎊 PLAYER1 WINS! 🎊';
    document.querySelector('div div').firstElementChild.classList.add('dice-winner');
} else if (random2 > random1) {
    document.querySelector('h1').textContent = '🎊 PLAYER2 WINS! 🎊';
    document.querySelector('div div').lastElementChild.classList.add('dice-winner');
} else {
    document.querySelector('h1').textContent = 'DRAW!';
}