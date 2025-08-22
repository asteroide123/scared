var canvas = document.getElementById("starfield");
var context = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();

var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateStars() {
    starArray = [];
    for (var i = 0; i < stars; i++) {
        var x = Math.random() * canvas.width;
        var y = Math.random() * canvas.height;
        var radius = Math.random() * 1.2;
        var hue = colorrange[getRandom(0, colorrange.length - 1)];
        var sat = getRandom(50, 100);
        var opacity = Math.random();
        starArray.push({ x, y, radius, hue, sat, opacity });
    }
}
generateStars();

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

// 🌟 Texto con salto de línea automático
function drawWrappedText(text, x, y, fontSize, lineHeight, maxWidth) {
    const words = text.split(" ");
    let line = "";
    let lines = [];

    for (let n = 0; n < words.length; n++) {
        let testLine = line + words[n] + " ";
        let metrics = context.measureText(testLine);
        if (metrics.width > maxWidth && n > 0) {
            lines.push(line.trim());
            line = words[n] + " ";
        } else {
            line = testLine;
        }
    }
    lines.push(line.trim());

    const totalHeight = lines.length * lineHeight;
    let startY = y - totalHeight / 2;

    lines.forEach((l, i) => {
        context.fillText(l, x, startY + i * lineHeight);
    });
}

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
        if (Math.random() > 0.995) {
            starArray[i].opacity = Math.random();
        }
    }
}

const button = document.getElementById("valentinesButton");
button.style.display = "none";

button.addEventListener("click", () => {
  if (button.textContent === "Click Me! ❤") {
    button.textContent = "loading...";
    fetch('send_mail.php')
      .then(response => {
        if (response.ok) {
          button.textContent = "tendrás algo en Whats ❤";
        } else {
          button.textContent = "tendrás algo en Whats ❤";
        }
      })
      .catch(() => {
        button.textContent = "tendrás algo en Whats ❤";
      });
  }
});

function drawText() {
    var fontSize = Math.max(14, Math.min(40, Math.min(canvas.width, canvas.height) * 0.05));
    var lineHeight = fontSize * 1.6;

    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";

    context.shadowColor = "rgba(45, 45, 255, 1)";
    context.shadowBlur = 8;

    // Fades más suaves (0.005 en lugar de 0.01)
    if(frameNumber < 250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        drawWrappedText("Sorpresaaaaa!! sé que es ridículo y estoy temblando jajas pero...", canvas.width/2, canvas.height/2, fontSize, lineHeight, canvas.width * 0.9);
        opacity += 0.005;
    }
    if(frameNumber >= 250 && frameNumber < 500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        drawWrappedText("Sorpresaaaaa!! sé que es ridículo y estoy temblando jajas pero...", canvas.width/2, canvas.height/2, fontSize, lineHeight, canvas.width * 0.9);
        opacity -= 0.005;
    }

    if(frameNumber == 500){ opacity = 0; }
    if(frameNumber > 500 && frameNumber < 750){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        drawWrappedText("Quiero que sepas que eres la persona más especial que tengo en mi vida", canvas.width/2, canvas.height/2, fontSize, lineHeight, canvas.width * 0.9);
        opacity += 0.005;
    }
    if(frameNumber >= 750 && frameNumber < 1000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        drawWrappedText("Soy tan afortunado de tenerte y odio más que nunca la distancia que nos separa", canvas.width/2, canvas.height/2, fontSize, lineHeight, canvas.width * 0.9);
        opacity -= 0.005;
    }

    if(frameNumber == 1000){ opacity = 0; }
    if(frameNumber > 1000 && frameNumber < 1250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        drawWrappedText("Pero quiero decirte que te amo mucho más de lo que las palabras pueden describir", canvas.width/2, canvas.height/2, fontSize, lineHeight, canvas.width * 0.9);
        opacity += 0.005;
    }
    if(frameNumber >= 1250 && frameNumber < 1500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        drawWrappedText("Pero quiero decirte que te amo mucho más de lo que las palabras pueden describir", canvas.width/2, canvas.height/2, fontSize, lineHeight, canvas.width * 0.9);
        opacity -= 0.005;
    }

    if(frameNumber == 1500){ opacity = 0; }
    if(frameNumber > 1500 && frameNumber < 1750){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        drawWrappedText("Eres la niña de mis ojos, mi vida, mi TODO", canvas.width/2, canvas.height/2, fontSize, lineHeight, canvas.width * 0.9);
        opacity += 0.005;
    }
    if(frameNumber >= 1750 && frameNumber < 2000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        drawWrappedText("Eres la niña de mis ojos, mi vida, mi TODO", canvas.width/2, canvas.height/2, fontSize, lineHeight, canvas.width * 0.9);
        opacity -= 0.005;
    }

    if(frameNumber == 2000){ opacity = 0; }
    if(frameNumber > 2000 && frameNumber < 2250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        drawWrappedText("Me tienes completamente enamorado de TI, De tus ojitos, de tu carita, de como eres", canvas.width/2, canvas.height/2, fontSize, lineHeight, canvas.width * 0.9);
        opacity += 0.005;
    }
    if(frameNumber >= 2250 && frameNumber < 2500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        drawWrappedText("Me tienes completamente enamorado de TI, De tus ojitos, de tu carita, de como eres", canvas.width/2, canvas.height/2, fontSize, lineHeight, canvas.width * 0.9);
        opacity -= 0.005;
    }

    if(frameNumber == 2500){ opacity = 0; }
    if(frameNumber > 2500 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        drawWrappedText("Te amo por ser taaaaan RAFAELA, tanto como el tiempo y espacio existente en el universo", canvas.width/2, canvas.height/2, fontSize, lineHeight, canvas.width * 0.9);
        opacity += 0.005;
    }
    
    if(frameNumber >= 2750 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${secondOpacity})`;
        drawWrappedText("Y estoy muy agradecido contigo por todo, si eres tú lo quiero todo", canvas.width/2, (canvas.height/2 + 100), fontSize, lineHeight, canvas.width * 0.9);
        secondOpacity += 0.005;
    }

    if(frameNumber >= 3000 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${thirdOpacity})`;
        drawWrappedText("Un mes que me hubiese encantado compartirlo contigo <3", canvas.width/2, (canvas.height/2 + 200), fontSize, lineHeight, canvas.width * 0.9);
        thirdOpacity += 0.005;

        // 👉 Mostrar botón con animación
        if (button.style.display === "none") {
            button.style.display = "block";
            // Responsivo
            button.style.bottom = window.innerWidth < 600 ? "5%" : "10%";
            setTimeout(() => { button.style.opacity = "1"; }, 100);
        }
    }   

    context.shadowColor = "transparent";
    context.shadowBlur = 0;
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawStars();
    updateStars();
    drawText();

    if (frameNumber < 99999) {
        frameNumber++;
    }
    window.requestAnimationFrame(draw);
}

window.addEventListener("resize", () => {
    resizeCanvas();
    generateStars();
});

window.requestAnimationFrame(draw);
