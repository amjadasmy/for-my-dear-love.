
/* ==================================================
   LOVE PROPOSAL WEBSITE
   script.js - PART 1
================================================== */

/* -------------------------
   Elements
------------------------- */

const loader = document.getElementById("loader");
const envelopeSection = document.getElementById("envelopeSection");
const mainContent = document.getElementById("mainContent");

const envelope = document.querySelector(".envelope");

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const typingText = document.getElementById("typingText");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const hiddenMessage = document.getElementById("hiddenMessage");

/* -------------------------
   Loader
------------------------- */

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);

    }, 2000);

});

/* -------------------------
   Envelope Click → Open
------------------------- */

envelope.addEventListener("click", () => {

    envelopeSection.style.display = "none";
    mainContent.style.display = "block";

    startMusic();
    startTyping();

    createStars();
    createHearts();
    createRoses();

});

/* -------------------------
   Music Control
------------------------- */

function startMusic() {

    bgMusic.volume = 0.5;
    bgMusic.play();

}

musicBtn.addEventListener("click", () => {

    if (bgMusic.paused) {

        bgMusic.play();
        musicBtn.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;

    } else {

        bgMusic.pause();
        musicBtn.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`;

    }

});

/* -------------------------
   Typing Effect
------------------------- */

const messages = [

    "I don't know how this started...",
    "Maybe it was your smile...",
    "Or maybe your presence...",
    "But something about you stayed in my mind...",
    "Even when I tried to ignore it...",
    "You became a thought I never planned to have...",
    "And a feeling I never expected to feel..."

];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {

    if (i < messages.length) {

        if (!isDeleting && j <= messages[i].length) {

            currentText = messages[i].substring(0, j++);
            typingText.innerHTML = currentText;

        }

        if (isDeleting && j >= 0) {

            currentText = messages[i].substring(0, j--);
            typingText.innerHTML = currentText;

        }

        if (j === messages[i].length) {

            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;

        }

        if (j === 0 && isDeleting) {

            isDeleting = false;
            i++;

        }

    } else {

        i = 0;
    }

    setTimeout(typeEffect, 80);
}

function startTyping() {
    typeEffect();
}

/* -------------------------
   Button Interaction (basic)
------------------------- */

yesBtn.addEventListener("click", () => {

    hiddenMessage.style.display = "block";

});

noBtn.addEventListener("mouseover", () => {

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 150);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

});
/* ==================================================
   LOVE PROPOSAL WEBSITE
   script.js - PART 2 (FINAL EFFECTS)
================================================== */

/* -------------------------
   Stars Generator
------------------------- */

function createStars() {

    const starsContainer = document.getElementById("stars");

    for (let i = 0; i < 80; i++) {

        let star = document.createElement("div");

        star.classList.add("star");

        star.style.position = "absolute";
        star.style.width = "2px";
        star.style.height = "2px";
        star.style.background = "white";
        star.style.borderRadius = "50%";

        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";

        star.style.opacity = Math.random();

        star.style.animation = "twinkle 2s infinite alternate";

        starsContainer.appendChild(star);
    }
}

/* -------------------------
   Hearts Floating
------------------------- */

function createHearts() {

    const heartsContainer = document.getElementById("hearts");

    setInterval(() => {

        let heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "absolute";
        heart.style.left = Math.random() * 100 + "%";
        heart.style.bottom = "-20px";

        heart.style.fontSize = Math.random() * 20 + 10 + "px";

        heart.style.animation = "floatUp 6s linear forwards";

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);

    }, 700);
}

/* -------------------------
   Roses Falling
------------------------- */

function createRoses() {

    const rosesContainer = document.getElementById("roses");

    setInterval(() => {

        let rose = document.createElement("div");

        rose.innerHTML = "🌹";

        rose.style.position = "absolute";
        rose.style.left = Math.random() * 100 + "%";
        rose.style.top = "-20px";

        rose.style.fontSize = Math.random() * 20 + 10 + "px";

        rose.style.animation = "fall 7s linear forwards";

        rosesContainer.appendChild(rose);

        setTimeout(() => {
            rose.remove();
        }, 7000);

    }, 1000);
}

/* -------------------------
   Fireworks (YES Effect)
------------------------- */

function fireworkBurst(x, y) {

    for (let i = 0; i < 20; i++) {

        let spark = document.createElement("div");

        spark.classList.add("spark");

        spark.style.position = "fixed";
        spark.style.left = x + "px";
        spark.style.top = y + "px";

        spark.style.width = "6px";
        spark.style.height = "6px";
        spark.style.background = "#FFD700";

        spark.style.borderRadius = "50%";

        spark.style.pointerEvents = "none";

        document.body.appendChild(spark);

        let angle = Math.random() * 2 * Math.PI;
        let distance = Math.random() * 100;

        let dx = Math.cos(angle) * distance;
        let dy = Math.sin(angle) * distance;

        spark.animate([

            { transform: "translate(0,0)", opacity: 1 },
            { transform: `translate(${dx}px, ${dy}px)`, opacity: 0 }

        ], {

            duration: 1000,
            easing: "ease-out"

        });

        setTimeout(() => {
            spark.remove();
        }, 1000);
    }
}

/* -------------------------
   YES Button Final Action
------------------------- */

yesBtn.addEventListener("click", (e) => {

    hiddenMessage.style.display = "block";

    let rect = yesBtn.getBoundingClientRect();

    fireworkBurst(rect.left + 50, rect.top + 20);

    document.body.style.background = "radial-gradient(circle,#1a0000,#000)";

});

/* -------------------------
   Mouse Sparkle Effect
------------------------- */

document.addEventListener("mousemove", (e) => {

    let sparkle = document.createElement("div");

    sparkle.classList.add("sparkle");

    sparkle.style.position = "fixed";
    sparkle.style.left = e.clientX + "px";
    sparkle.style.top = e.clientY + "px";

    sparkle.style.width = "4px";
    sparkle.style.height = "4px";

    sparkle.style.background = "#fff";
    sparkle.style.borderRadius = "50%";

    sparkle.style.pointerEvents = "none";

    sparkle.style.opacity = 0.8;

    document.body.appendChild(sparkle);

    sparkle.animate([

        { transform: "scale(1)", opacity: 1 },
        { transform: "scale(0)", opacity: 0 }

    ], {

        duration: 600,
        easing: "ease-out"

    });

    setTimeout(() => sparkle.remove(), 600);
});

/* -------------------------
   CSS Animations Injector
   (required for effects)
------------------------- */

const style = document.createElement("style");

style.innerHTML = `

@keyframes floatUp {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-100vh); opacity: 0; }
}

@keyframes fall {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(100vh); opacity: 0; }
}

@keyframes twinkle {
    0% { opacity: 0.2; }
    100% { opacity: 1; }
}

.spark {
    filter: blur(1px);
}

`;

document.head.appendChild(style);
