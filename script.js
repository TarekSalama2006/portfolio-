////////////////////////////////////////////////////////////
/////////////////////////log in ////////////////////////////
///////////////////////////////////////////////////////////

// ===== عقارب الساعة =====
const hourHand   = document.getElementById("hourHand");
const minuteHand = document.getElementById("minuteHand");

let hourDeg   = 0;
let minuteDeg = 0;
let clockInterval = null;

function startClock() {
    clockInterval = setInterval(() => {
        minuteDeg += 6;
        hourDeg   += 0.5;
        minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
        hourHand.style.transform   = `rotate(${hourDeg}deg)`;
    }, 30);
}

function stopClock() {
    clearInterval(clockInterval);
}

// ===== Login Button =====
const loginBtn      = document.getElementById("loginBtn");
const loaderOverlay = document.getElementById("loaderOverlay");
const email         = document.getElementById("email");
const password      = document.getElementById("password");

loginBtn.addEventListener("click", () => {

  
    if (email.value === "" || password.value === "") {
        alert("Please fill in all fields.");
        return;
    }

    // شغّل الـ Loader
    loaderOverlay.classList.add("active");
    startClock();

    // بعد 3 ثواني أخفيه (هون بتحط redirect أو رسالة نجاح)
setTimeout(() => {
    stopClock();
    loaderOverlay.classList.remove("active");

    window.location.href = "start.html";
}, 6000);});
// //////////////////////////////////////////////
/////////////////////////////////////////////////

