// ===============================
// confetti.js
// ===============================

function startConfetti(){

    for(let i=0;i<80;i++){

        const piece=document.createElement("div");

        piece.innerHTML=Math.random()>0.5?"💖":"🎉";

        piece.style.position="fixed";

        piece.style.left=Math.random()*100+"vw";

        piece.style.top="-40px";

        piece.style.fontSize=(18+Math.random()*22)+"px";

        piece.style.pointerEvents="none";

        piece.style.zIndex="9999";

        document.body.appendChild(piece);

        const duration=3000+Math.random()*2000;

        piece.animate([

            {
                transform:"translateY(0) rotate(0deg)",
                opacity:1
            },

            {
                transform:`translateY(${window.innerHeight+100}px) rotate(${720+Math.random()*720}deg)`,
                opacity:0
            }

        ],{

            duration:duration,
            easing:"linear"

        });

        setTimeout(()=>{

            piece.remove();

        },duration);

    }

}
