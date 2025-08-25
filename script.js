const pressStart = document.getElementById('press-start');
const levelupButton = document.getElementById('levelup-button');
const birthdayMessage = document.getElementById('birthday-message');

// Sound Effects with Howler
const coinSound = new Howl({
  src: ['coin.mp3']
});

const levelSound = new Howl({
  src: ['level.mp3']
});

const birthdaySound = new Howl({
  src: ['birthday.mp3']
});

const burst = new mojs.Burst({
  parent: levelupButton,
  radius: { 50: 150 },
  count: 15,
  children: {
    shape: 'rect',
    fill: [ '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff' ],
    strokeWidth: 1,
    stroke: '#fff',
    duration: 1000,
    easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
    delay: 'stagger(50)',
  }
});

pressStart.addEventListener('click', () => {
    coinSound.play();
    pressStart.classList.add('hidden');
    levelupButton.classList.remove('hidden');
});

levelupButton.addEventListener('click', () => {
  levelSound.play();
  burst.play();
  levelupButton.classList.add('hidden');

  setTimeout(() => {
    birthdaySound.play();
    birthdayMessage.classList.remove('hidden');
  }, 800); // Show message slightly before animation ends
});
