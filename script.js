// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt=yes]");

consttitle = document.getElementById("letter-title");
constcatImg = document.getElementById("letter-cat");
constbuttons = document.getElementById("letter-buttons");


// click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display ="none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);

});

// Logic to make YES btn to grow

letyesScale = 1;

yesBtn.style.position = "relative"
yesBtn.style.transformOrigin = "center center";
yesBtn.style.transition = "transform 0.3s ease";

noBtn.addEventListener("click", () => {
    yesScale += 2;

    if (yesBtn.style.position !== fixed) {
        yesBtn.style.position = "fixed";
        yesBtn.style.top = "50";
        yesBtn.style.left = "50";
        yesBtn.style.transform = 'translate(-50%, -50%) scale(${yesScale})';
    }else{
        yesBtn.style.transform = 'translate(-50%, -50%) scale(${yesScale})';
    }
});

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Yipppeeeee!";

    catImg.src = "cat_dance.gif";

    document.querySelector
    {(".letter-window")}classList.add("final");

    buttons.style.display = "none";

});