// ===============================
// hearts.js
// قلب‌های شناور
// ===============================

const heartsContainer = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = Math.random() > 0.5 ? "💖" : "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (18 + Math.random() * 30) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    heart.style.opacity =
        (0.4 + Math.random() * 0.6);

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}

// هر ۳۰۰ میلی‌ثانیه یک قلب
setInterval(createHeart, 300);

// چند قلب اولیه
for(let i=0;i<12;i++){

    setTimeout(createHeart, i*200);

}