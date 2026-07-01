const message = 
"I don’t know you yet, and maybe you don’t know me... " +
"but something in me feels like I should say this. " +
"I will stand for you even in your lowest moments. " +
"I will never let you feel alone if life gets heavy. " +
"I wish I could be one of your tears, so I could be born in your eyes and die on your lips. " +
"This feeling is new to me... and I don’t want to lose it.";

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
