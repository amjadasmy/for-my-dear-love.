const name = "Ruska";

const message = 
`My Dearest ${name} ❤️

I don't know what the future holds, but I know one thing...

I will always do my best to make you happy and keep a smile on your face.

I promise I will never let you down. No matter how difficult life becomes, I will stand beside you, support you, and give you my strength.

I will be there in your happiest moments and also in your hardest days. You will never have to feel alone when I am with you.

I want to protect your heart, respect your dreams, and be someone you can always trust.

This feeling I have for you is special, and I don't want to lose it.

You are someone I truly care about, Ruska ❤️

Forever with you 💖`;

let i = 0;

function showLove() {
  document.getElementById("text").innerHTML = "";
  i = 0;
  typeWriter();
}

function typeWriter() {
  if (i < message.length) {
    document.getElementById("text").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}

/* floating hearts generator */
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";
  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 300);
