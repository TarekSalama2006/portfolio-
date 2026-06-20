document.addEventListener("DOMContentLoaded", function () {

  /* =========================================
     1) إضافة منتج للسلة (موجودة من قبل)
  ========================================= */

  let buttons = document.querySelectorAll(".add-cart");

  buttons.forEach(function (button) {

    button.onclick = function () {

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      let product = {
        name: button.getAttribute("data-name"),
        price: button.getAttribute("data-price"),
        image: button.getAttribute("data-image")
      };

      cart.push(product);

      localStorage.setItem("cart", JSON.stringify(cart));

      updateCount();

      alert("Added To Cart");

    };

  });

  function updateCount() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let count = document.getElementById("cartCount");

    if (count) {
      count.innerHTML = cart.length;
    }

  }

  updateCount();


  /* =========================================
     2) عرض محتوى السلة في صفحة buy.html
        (هاد الجزء الجديد)

        بيشتغل بس إذا لقى عنصر
        id="cart-items" بالصفحة،
        يعني ما يأثر على باقي
        الصفحات إطلاقاً
  ========================================= */

  let cartItemsBox = document.getElementById("cart-items");

  if (cartItemsBox) {
    renderCart();
  }

  function renderCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // لو السلة فاضية
    if (cart.length === 0) {
      cartItemsBox.innerHTML = "<p style='color:#999;'>Your cart is empty.</p>";
      setTotals(0);
      return;
    }

    let html = "";
    let subtotal = 0;

    cart.forEach(function (item, index) {

      // تحويل السعر من نص "$12,500" إلى رقم 12500
      // عشان نقدر نجمعه
      let numericPrice = parseFloat(
        item.price.replace(/[^0-9.]/g, "")
      ) || 0;

      subtotal += numericPrice;

      html += `
        <div class="product" data-index="${index}">
          <img src="${item.image}" alt="${item.name}">
          <div class="product-info">
            <h3>${item.name}</h3>
            <p>${item.price}</p>
          </div>
          <button class="remove-item" data-index="${index}">✕</button>
        </div>
      `;

    });

    cartItemsBox.innerHTML = html;

    setTotals(subtotal);

    // ربط أزرار الحذف بعد ما نكتب الـ HTML
    let removeButtons = cartItemsBox.querySelectorAll(".remove-item");

    removeButtons.forEach(function (btn) {

      btn.onclick = function () {

        let i = parseInt(btn.getAttribute("data-index"));
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart.splice(i, 1); // يشيل المنتج من المصفوفة

        localStorage.setItem("cart", JSON.stringify(cart));

        updateCount();
        renderCart(); // يعيد رسم السلة بعد الحذف

      };

    });

  }

  function setTotals(subtotal) {

    let subtotalEl = document.getElementById("subtotal");
    let totalEl = document.getElementById("total");

    if (subtotalEl) {
      subtotalEl.innerHTML = "$" + subtotal.toLocaleString();
    }

    if (totalEl) {
      // الشحن مجاني، فالإجمالي = subtotal
      totalEl.innerHTML = "$" + subtotal.toLocaleString();
    }

  }

});
