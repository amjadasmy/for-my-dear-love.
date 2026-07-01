const envelope=document.getElementById("envelope");

const main=document.querySelector(".main");

const typing=document.getElementById("typing");

const surprise=document.getElementById("surprise");

const hidden=document.getElementById("hidden");

const music=document.getElementById("music");

const musicBtn=document.getElementById("musicBtn");

const message=`Dear ᥫ𝙗𝙡𝙪𝙧𝙗.3𝙧𝙧𝙮᭡ ❤️

I don't know your favorite color.

I don't know your favorite song.

I don't even know the little things that make you smile.

Yet somehow...

my heart chose you.

Maybe this feeling is strange.

Maybe it's unexpected.

But sometimes life introduces someone without warning,

and suddenly,

the world feels a little more beautiful.

I'm not here to pressure you.

I'm not here to rush your heart.

I only wanted to tell you that seeing you inspired me to create something special.

Even if this is the only moment our paths cross,

I'll always be happy knowing that someone as beautiful as you exists.

Thank you for being the inspiration behind this little surprise.

❤️`;

let i=0;

function write(){

if(i<message.length){

typing.innerHTML+=message.charAt(i);

i++;

setTimeout(write,40);

}

}

envelope.onclick=()=>{

envelope.style.display="none";

main.classList.remove("hidden");

music.play();

write();

}

surprise.onclick=()=>{

hidden.classList.remove("hidden");

confetti();

}

musicBtn.onclick=()=>{

music.play();

}

function confetti(){

for(let i=0;i<120;i++){

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-20px";

heart.style.fontSize=Math.random()*30+20+"px";

heart.style.animation=`fall ${Math.random()*4+4}s linear`;

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),8000);

}

}

const style=document.createElement("style");

style.innerHTML=`

@keyframes fall{

to{

transform:translateY(120vh) rotate(720deg);

}

}

`;

document.head.appendChild(style);
