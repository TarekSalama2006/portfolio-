// ===========================
// 1. جيب كل الصور وكل ما
//    يخصنا بالدائرة الوسطى
// ===========================
const items        = document.querySelectorAll(".item");
const centerCircle = document.querySelector(".center-circle");


// ===========================
// 2. المسافة من المركز
// ===========================
const radius = 280;


// ===========================
// 3. ترتيب الصور حوالين الدائرة
// ===========================
items.forEach((item, i) => {

    const angle = (360 / items.length) * i;

    item.style.transform =
        `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`;


    // ===========================
    // 4. اضغط على الصوره
    // ===========================
    item.addEventListener("click", () => {

        // نجيب البيانات اللي حطيناها
        // بالـ HTML على شكل
        // data-name و data-price
        const name  = item.getAttribute("data-name");
        const price = item.getAttribute("data-price");
        centerCircle.classList.add("active");

        // نغيّر محتوى الدائرة بالاسم
        // والسعر. كل مرة بنحط HTML

        centerCircle.innerHTML = `
            <h3>${name}</h3>
            <p>${price}</p>
        `;


        // لحجمها الطبيعي ترجع بعد 400 ت
        setTimeout(() => {
            centerCircle.classList.remove("active");
        }, 400);

    });

});
