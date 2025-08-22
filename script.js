 var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i < stars; i++) {
  var x = Math.random() * canvas.width;
  var y = Math.random() * canvas.height;
  var radius = Math.random() * 1.2;
  var hue = colorrange[getRandom(0, colorrange.length - 1)];
  var sat = getRandom(50, 100);
  var opacity = Math.random();
  starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

function drawStars() {
  for (var i = 0; i < stars; i++) {
    var star = starArray[i];
    context.beginPath();
    context.arc(star.x, star.y, star.radius, 0, 360);
    context.fillStyle = "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
    context.fill();
  }
}

function updateStars() {
  for (var i = 0; i < stars; i++) {
    if (Math.random() > 0.99) {
      starArray[i].opacity = Math.random();
    }
  }
}

const button = document.getElementById("valentinesButton");

button.addEventListener("click", () => {
  if (button.textContent === "Click Me! ❤") {
    button.textContent = "loading...";
    fetch('send_mail.php')
      .then(response => {
        button.textContent = "tendras algo en whats ❤";
      })
      .catch(error => {
        console.error('Error:', error);
        button.textContent = "tendras algo en whats ❤";
      });
  }
});

// 🔑 Función para auto-ajustar texto
function wrapText(context, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";
  let lines = [];

  for (let n = 0; n < words.length; n++) {
    let testLine = line + words[n] + " ";
    let metrics = context.measureText(testLine);
    let testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      lines.push(line.trim());
      line = words[n] + " ";
    } else {
      line = testLine;
    }
  }
  lines.push(line.trim());

  lines.forEach((l, i) => {
    context.fillText(l, x, y + (i * lineHeight));
  });
}

function drawText() {
  // 🔑 tamaño dinámico de fuente según ancho de pantalla
  var fontSize = Math.max(18, Math.min(42, window.innerWidth * 0.03));
  var lineHeight = fontSize * 1.4;
  context.font = fontSize + "px Comic Sans MS";
  context.textAlign = "center";
  context.textBaseline = "middle"; // centra verticalmente

  context.shadowColor = "rgba(45, 45, 255, 1)";
  context.shadowBlur = 8;

  const maxWidth = canvas.width * 0.9;
  const centerY = canvas.height / 2;

  if(frameNumber < 250){
    context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
    wrapText(context, "Sé que no es buen momento porque se que estas enojada conmigo ahorita pero...", canvas.width/2, centerY, maxWidth, lineHeight);
    opacity += 0.01;
  }
  if(frameNumber >= 250 && frameNumber < 500){
    context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
    wrapText(context, "Sé que no es buen momento porque se que estas enojada conmigo ahorita pero...", canvas.width/2, centerY, maxWidth, lineHeight);
    opacity -= 0.01;
  }
  if(frameNumber == 500){ opacity = 0; }

  if(frameNumber > 500 && frameNumber < 750){
    context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
    wrapText(context, "Quiero que sepas que eres la persona más especial que tengo en mi vida", canvas.width/2, centerY, maxWidth, lineHeight);
    opacity += 0.01;
  }
  if(frameNumber >= 750 && frameNumber < 1000){
    context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
    wrapText(context, "Soy tan afortunado de tenerte y odio más que nunca la distancia que nos separa", canvas.width/2, centerY, maxWidth, lineHeight);
    opacity -= 0.01;
  }
  if(frameNumber == 1000){ opacity = 0; }

  if(frameNumber > 1000 && frameNumber < 1250){
    context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
    wrapText(context, "Pero quiero decirte que te amo mucho más de lo que las palabras pueden describir", canvas.width/2, centerY, maxWidth, lineHeight);
    opacity += 0.01;
  }
  if(frameNumber >= 1250 && frameNumber < 1500){
    context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
    wrapText(context, "Pero quiero decirte que te amo mucho más de lo que las palabras pueden describir", canvas.width/2, centerY, maxWidth, lineHeight);
    opacity -= 0.01;
  }
  if(frameNumber == 1500){ opacity = 0; }

  if(frameNumber > 1500 && frameNumber < 1750){
    context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
    wrapText(context, "Eres la niña de mis ojos, mi vida, mi TODO", canvas.width/2, centerY, maxWidth, lineHeight);
    opacity += 0.01;
  }
  if(frameNumber >= 1750 && frameNumber < 2000){
    context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
    wrapText(context, "Eres la niña de mis ojos, mi vida, mi TODO", canvas.width/2, centerY, maxWidth, lineHeight);
    opacity -= 0.01;
  }
  if(frameNumber == 2000){ opacity = 0; }

  if(frameNumber > 2000 && frameNumber < 2250){
    context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
    wrapText(context, "Me tienes completamente enamorado de TI, De tus ojitos, de tu carita, de como eres", canvas.width/2, centerY, maxWidth, lineHeight);
    opacity += 0.01;
  }
  if(frameNumber >= 2250 && frameNumber < 2500){
    context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
    wrapText(context, "Me tienes completamente enamorado de TI, De tus ojitos, de tu carita, de como eres", canvas.width/2, centerY, maxWidth, lineHeight);
    opacity -= 0.01;
  }
  if(frameNumber == 2500){ opacity = 0; }

  if(frameNumber > 2500 && frameNumber < 99999){
    context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
    wrapText(context, "Te amo por ser taaaaan RAFAELA, tanto como el tiempo y espacio existente en el universo", canvas.width/2, centerY, maxWidth, lineHeight);
    opacity += 0.01;
  }
  if(frameNumber >= 2750 && frameNumber < 99999){
    context.fillStyle = `rgba(45, 45, 255, ${secondOpacity})`;
    wrapText(context, "Y estoy muy agradecido contigo por todo, si eres tu lo quiero todo", canvas.width/2, (centerY + lineHeight * 2), maxWidth, lineHeight);
    secondOpacity += 0.01;
  }
  if(frameNumber >= 3000 && frameNumber < 99999){
    context.fillStyle = `rgba(45, 45, 255, ${thirdOpacity})`;
    wrapText(context, "Un mes que me hubiese encantado compartirlo contigo <3", canvas.width/2, (centerY + lineHeight * 4), maxWidth, lineHeight);
    thirdOpacity += 0.01;
    button.style.display = "block";
  }

  context.shadowColor = "transparent";
  context.shadowBlur = 0;
}

function draw() {
  context.clearRect(0,0,canvas.width,canvas.height);
  drawStars();
  updateStars();
  drawText();
  if (frameNumber < 99999) frameNumber++;
  window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

window.requestAnimationFrame(draw);
