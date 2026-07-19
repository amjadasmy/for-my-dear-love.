const name = "Ruska";

const message =
`My Dearest ${name} ❤️

I don't know what the future holds, but I know one thing...

I will always do my best to make you happy and keep a smile on your face.

I promise I will never let you down.

No matter how difficult life becomes, I will stand beside you, support you, and give you my strength.

I will be there in your happiest moments and also your hardest days.

You will never have to feel alone when I am with you.

I want to protect your heart, respect your dreams, and be someone you can always trust.

This feeling I have for you is special.

You are someone I truly care about, Ruska ❤️

Forever with you 💖`;

let i = 0;

function showLove() {
    const text = document.getElementById("text");
    text.innerHTML = "";
    i = 0;
    typeWriter();
}

function typeWriter() {
    if (i < message.length) {
        document.getElementById("text").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 70);
    }
}


/* Smooth background colour change */
const colors = [
    "#071426",
    "#102a43",
    "#163a5f",
    "#0b1d35"
];

let colorIndex = 0;

setInterval(() => {
    document.body.style.transition = "background 5s ease";
    document.body.style.background = colors[colorIndex];

    colorIndex++;

    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }

}, 5000);


/* Few soft hearts only */
function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "❤";
    heart.style.position = "fixed";
    heart.style.bottom = "0";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = "18px";
    heart.style.color = "rgba(255,150,180,0.6)";
    heart.style.transition = "transform 8s linear, opacity 8s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.transform = "translateY(-100vh)";
        heart.style.opacity = "0";
    }, 100);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 1500);
