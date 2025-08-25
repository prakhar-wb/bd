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
  src: ['birthday.mp3'],
  loop: true
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

const confetti = new mojs.Burst({
  parent: birthdayMessage,
  radius: { 200: 500 },
  count: 50,
  children: {
    shape: [ 'circle', 'rect', 'polygon' ],
    fill: [ '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff' ],
    strokeWidth: 1,
    stroke: '#fff',
    duration: 2000,
    easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
    delay: 'stagger(30)',
    angle: 'rand(0, 360)',
  }
});

const fireworks1 = new mojs.Burst({
  radius: { 50: 300 },
  count: 20,
  children: {
    shape: 'circle',
    fill: [ '#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff' ],
    strokeWidth: 2,
    stroke: '#fff',
    duration: 1500,
    easing: mojs.easing.bezier(0.25, 0.46, 0.45, 0.94),
    delay: 'stagger(40)',
  }
});

const fireworks2 = new mojs.Burst({
  radius: { 30: 250 },
  count: 15,
  children: {
    shape: 'rect',
    fill: [ '#5f27cd', '#00d2d3', '#ff9f43', '#10ac84', '#ee5a6f' ],
    strokeWidth: 1,
    stroke: '#fff',
    duration: 1200,
    easing: mojs.easing.bezier(0.25, 0.46, 0.45, 0.94),
    delay: 'stagger(60)',
  }
});

const fireworks3 = new mojs.Burst({
  radius: { 40: 200 },
  count: 12,
  children: {
    shape: 'polygon',
    fill: [ '#fd79a8', '#fdcb6e', '#6c5ce7', '#a29bfe', '#74b9ff' ],
    strokeWidth: 2,
    stroke: '#fff',
    duration: 1000,
    easing: mojs.easing.bezier(0.25, 0.46, 0.45, 0.94),
    delay: 'stagger(50)',
  }
});

const fireworks4 = new mojs.Burst({
  radius: { 60: 400 },
  count: 25,
  children: {
    shape: 'circle',
    fill: [ '#ff4757', '#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3' ],
    strokeWidth: 3,
    stroke: '#ffff00',
    duration: 2000,
    easing: mojs.easing.bezier(0.17, 0.67, 0.83, 0.67),
    delay: 'stagger(30)',
  }
});

const fireworks5 = new mojs.Burst({
  radius: { 80: 350 },
  count: 18,
  children: {
    shape: 'rect',
    fill: [ '#2ed573', '#ff3838', '#3742fa', '#ffa502', '#8c7ae6' ],
    strokeWidth: 2,
    stroke: '#fff',
    duration: 1800,
    easing: mojs.easing.bezier(0.68, -0.55, 0.265, 1.55),
    delay: 'stagger(45)',
  }
});

const fireworks6 = new mojs.Burst({
  radius: { 30: 180 },
  count: 30,
  children: {
    shape: 'circle',
    fill: [ '#ff7675', '#fd79a8', '#fdcb6e', '#00b894', '#0984e3' ],
    strokeWidth: 1,
    stroke: '#fff',
    duration: 1300,
    easing: mojs.easing.bezier(0.25, 0.46, 0.45, 0.94),
    delay: 'stagger(25)',
  }
});

const sparklers = new mojs.Burst({
  radius: { 20: 120 },
  count: 40,
  children: {
    shape: 'line',
    stroke: [ '#ffff00', '#ff00ff', '#00ffff', '#ff6b6b', '#74b9ff' ],
    strokeWidth: 2,
    duration: 800,
    easing: mojs.easing.bezier(0.25, 0.46, 0.45, 0.94),
    delay: 'stagger(15)',
  }
});

function createGlitter() {
    const glitter = document.createElement('div');
    glitter.classList.add('glitter');
    glitter.style.left = Math.random() * 100 + 'vw';
    glitter.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(glitter);

    setTimeout(() => {
        glitter.remove();
    }, 5000);
}

function createBalloon() {
    const colors = ['red', 'blue', 'yellow', 'green', 'pink', 'purple', 'orange'];
    const balloon = document.createElement('div');
    balloon.classList.add('balloon', `balloon-${colors[Math.floor(Math.random() * colors.length)]}`);
    balloon.style.left = Math.random() * 90 + 5 + 'vw';
    balloon.style.animation = `float-up ${Math.random() * 3 + 8}s linear`;
    document.body.appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 12000);
}

function createRandomFireworks() {
    const fireworksArray = [fireworks1, fireworks2, fireworks3, fireworks4, fireworks5, fireworks6, sparklers];
    const selectedFirework = fireworksArray[Math.floor(Math.random() * fireworksArray.length)];
    
    selectedFirework.tune({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight
    });
    
    selectedFirework.play();
}

pressStart.addEventListener('click', () => {
    coinSound.play();
    document.body.classList.add('shake');
    setTimeout(() => document.body.classList.remove('shake'), 500);
    pressStart.classList.add('hidden');
    levelupButton.classList.remove('hidden');
});

levelupButton.addEventListener('click', () => {
  levelSound.play();
  burst.play();
  document.body.classList.add('shake');
  setTimeout(() => document.body.classList.remove('shake'), 500);
  levelupButton.classList.add('hidden');

  setTimeout(() => {
    birthdaySound.play();
    birthdayMessage.classList.remove('hidden');
    confetti.play();
    setInterval(createGlitter, 100);
    setInterval(createRandomFireworks, 1500);
    setTimeout(() => setInterval(createRandomFireworks, 800), 3000);
    
    setTimeout(() => {
      setInterval(createBalloon, 1200);
    }, 1000);
  }, 800); // Show message slightly before animation ends
});
