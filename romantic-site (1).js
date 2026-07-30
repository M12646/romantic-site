// ===============================
// Romantic Site - script.js
// Part 1
// ===============================

const API_URL =
"https://script.google.com/macros/s/AKfycbxseWWGszORcEtuTvmkGdY6UQN_wcdx8OHdTZ3imeNcF9fSdsH9V94gWCUaPIGAYa0I/exec";

// عناصر صفحه
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const success = document.getElementById("success");

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

const submitBtn = document.getElementById("submit");

const dateInput = document.getElementById("date");
const placeSelect = document.getElementById("place");

// اندازه دکمه‌ها
let yesScale = 1;
let noScale = 1;

// هر بار روی "نه" کلیک شود
noBtn.addEventListener("click", () => {

    noScale -= 0.10;
    yesScale += 0.10;

    if(noScale < 0.20){
        noScale = 0.20;
    }

    noBtn.style.transform =
        `scale(${noScale})`;

    yesBtn.style.transform =
        `scale(${yesScale})`;

});

// فرار کردن دکمه نه از زیر موس
document.addEventListener("mousemove", (e)=>{

    const rect = noBtn.getBoundingClientRect();

    const x =
        rect.left + rect.width/2;

    const y =
        rect.top + rect.height/2;

    const dx = e.clientX - x;
    const dy = e.clientY - y;

    const distance =
        Math.sqrt(dx*dx + dy*dy);

    if(distance < 120){

        const moveX =
            (Math.random()*180)-90;

        const moveY =
            (Math.random()*120)-60;

        noBtn.style.position="relative";

        noBtn.style.left =
            moveX + "px";

        noBtn.style.top =
            moveY + "px";

    }

});

// رفتن به صفحه دوم
yesBtn.addEventListener("click",()=>{

    page1.style.display="none";

    page2.style.display="block";

});
// ===============================
// Romantic Site - script.js
// Part 2
// ===============================

// ثبت اطلاعات
submitBtn.addEventListener("click", saveData);

async function saveData(){

    // بررسی تاریخ
    if(dateInput.value===""){

        alert("اول تاریخ رو انتخاب کن 😊");

        return;

    }

    submitBtn.disabled=true;

    submitBtn.innerHTML="در حال ثبت...";

    const data={

        date:dateInput.value,

        place:placeSelect.value

    };

    try{

        const response=await fetch(API_URL,{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(data)

        });

        if(!response.ok){

            throw new Error("خطا");

        }

        page2.style.display="none";

        success.style.display="block";

        // اگر فایل confetti.js وجود داشته باشد
        if(typeof startConfetti==="function"){

            startConfetti();

        }

    }

    catch(error){

        console.error(error);

        alert("ثبت اطلاعات انجام نشد.");

    }

    finally{

        submitBtn.disabled=false;

        submitBtn.innerHTML="ثبت ❤️";

    }

}

// انیمیشن ظاهر شدن صفحه موفقیت
function showSuccess(){

    success.style.display="block";

    success.animate([

        {
            opacity:0,
            transform:"scale(.8)"
        },

        {
            opacity:1,
            transform:"scale(1)"
        }

    ],{

        duration:700,

        easing:"ease"

    });

}

// نمایش تاریخ امروز به‌صورت پیش‌فرض
window.addEventListener("load",()=>{

    const today=new Date();

    const yyyy=today.getFullYear();

    const mm=String(today.getMonth()+1).padStart(2,"0");

    const dd=String(today.getDate()).padStart(2,"0");

    dateInput.value=`${yyyy}-${mm}-${dd}`;

});

// افکت کوچک روی دکمه آره
setInterval(()=>{

    yesBtn.animate([

        {transform:`scale(${yesScale})`},

        {transform:`scale(${yesScale+0.05})`},

        {transform:`scale(${yesScale})`}

    ],{

        duration:1200

    });

},1500);