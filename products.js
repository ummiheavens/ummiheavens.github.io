// =============================
// PRODUCT DATABASE
// =============================

const products = {

    "Raw Spices": [
        "Green Cardamom",
        "Black Pepper",
        "Cinnamon Sticks",
        "Premium Cloves"
    ],

    "Spice Powders": [
        "Chilli Powder",
        "Turmeric Powder",
        "Coriander Powder"
    ],

    "Pure Honey": [
        "Pure Natural Honey"
    ],

    "Pure Ghee": [
        "Traditional Pure Ghee"
    ],

    "Coconut Oils": [
        "Pure Coconut Oil"
    ],

    "Tea Powders": [
        "Premium Tea Powder"
    ],

    "Dry Fruits": [
        "Premium Cashew Nuts"
    ],

    "Premium Chips": [
        "Kerala Banana Chips"
    ],

    "Ummi Signature Box": [
        "Build Your Own Signature Box"
    ]

};

// =============================
// GET ELEMENTS
// =============================

const categoryModal = document.getElementById("categoryModal");
const modalTitle = document.getElementById("modalTitle");
const modalProducts = document.getElementById("modalProducts");
const closeModal = document.querySelector(".close-modal");

const productModal = document.getElementById("productModal");
const productName = document.getElementById("productName");
const productImage = document.getElementById("productImage");
const closeProduct = document.querySelector(".close-product");

// =============================
// CATEGORY CLICK
// =============================

document.querySelectorAll(".category-btn").forEach(card => {

    card.addEventListener("click", function () {

        const category = this.dataset.category;

        modalTitle.textContent = category;

        modalProducts.innerHTML = "";

        products[category].forEach(product => {

            const item = document.createElement("div");

            item.className = "modal-product";

            item.textContent = product;

            modalProducts.appendChild(item);

        });

        categoryModal.style.display = "flex";

    });

});

// =============================
// CLOSE CATEGORY
// =============================

closeModal.onclick = function () {

    categoryModal.style.display = "none";

};

// =============================
// PRODUCT CLICK
// =============================

document.addEventListener("click", function (e) {

    if (e.target.classList.contains("modal-product")) {

        const selectedProduct = e.target.textContent;

        productName.textContent = selectedProduct;

        productImage.src = "assets/logo.png";

        const bottleBtn = document.querySelector(".pack-option:nth-child(1)");
        const pouchBtn = document.querySelector(".pack-option:nth-child(2)");

        // Show both by default
        bottleBtn.style.display = "inline-block";
        pouchBtn.style.display = "inline-block";

        // Honey, Ghee & Coconut Oil = Bottle only
        if (
            selectedProduct === "Pure Natural Honey" ||
            selectedProduct === "Traditional Pure Ghee" ||
            selectedProduct === "Pure Coconut Oil"
        ) {
            pouchBtn.style.display = "none";
        }

        // Reset previous packaging selection
        selectedPackaging = "";
        document.querySelectorAll(".pack-option").forEach(btn => {
            btn.classList.remove("active-option");
        });

        productModal.style.display = "flex";

    }

});

// =============================
// CLOSE PRODUCT
// =============================

closeProduct.onclick = function () {

    productModal.style.display = "none";

};

// =============================
// CLOSE OUTSIDE
// =============================

window.onclick = function (e) {

    if (e.target === categoryModal) {

        categoryModal.style.display = "none";

    }

    if (e.target === productModal) {

        productModal.style.display = "none";

    }

};
// ================= SELECT OPTIONS =================

let selectedPackaging = "";
let selectedWeight = "";

document.querySelectorAll(".pack-option").forEach(button => {

    button.addEventListener("click", () => {

        document.querySelectorAll(".pack-option").forEach(btn => {
            btn.classList.remove("active-option");
        });

        button.classList.add("active-option");

        selectedPackaging = button.textContent;

    });

});

document.querySelectorAll(".weight-option").forEach(button => {

    button.addEventListener("click", () => {

        document.querySelectorAll(".weight-option").forEach(btn => {
            btn.classList.remove("active-option");
        });

        button.classList.add("active-option");

        selectedWeight = button.textContent;

    });

});
// ================= QUANTITY =================

let quantity = 1;

const quantityText = document.getElementById("quantity");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

plus.addEventListener("click", () => {

    quantity++;

    quantityText.textContent = quantity;

});

minus.addEventListener("click", () => {

    if(quantity > 1){

        quantity--;

        quantityText.textContent = quantity;

    }

});
// ================= WHATSAPP BUY =================

const buyBtn = document.getElementById("buyWhatsapp");

buyBtn.addEventListener("click", () => {

    if(selectedPackaging === ""){

        alert("Please select a packaging.");

        return;

    }

    if(selectedWeight === ""){

        alert("Please select a weight.");

        return;

    }

    const message =
`Hello Ummi Heavens,

I would like to order:

🌿 Product: ${productName.textContent}

📦 Packaging: ${selectedPackaging}

⚖️ Weight: ${selectedWeight}

🔢 Quantity: ${quantity}

Please share the price and availability.`;

    const whatsapp =
`https://wa.me/917902825149?text=${encodeURIComponent(message)}`;

    window.open(whatsapp, "_blank");

});
// ======================================
// SIGNATURE BOX
// ======================================

const signatureModal = document.getElementById("signatureModal");
const closeSignature = document.querySelector(".close-signature");

const signatureProducts = [
    "Green Cardamom",
    "Black Pepper",
    "Cinnamon Sticks",
    "Premium Cloves",
    "Chilli Powder",
    "Turmeric Powder",
    "Coriander Powder",
    "Pure Natural Honey",
    "Traditional Pure Ghee",
    "Pure Coconut Oil",
    "Premium Tea Powder",
    "Premium Cashew Nuts",
    "Kerala Banana Chips"
];

const selects = [
    document.getElementById("slot1"),
    document.getElementById("slot2"),
    document.getElementById("slot3"),
    document.getElementById("slot4")
];

// Fill dropdowns
selects.forEach(select => {

    signatureProducts.forEach(product => {

        const option = document.createElement("option");

        option.value = product;
        option.textContent = product;

        select.appendChild(option);

    });

});

// Open Signature Box instead of normal popup
document.querySelectorAll(".category-btn").forEach(card => {

    card.addEventListener("click", function () {

        if (this.dataset.category === "Ummi Signature Box") {

            categoryModal.style.display = "none";

            signatureModal.style.display = "flex";

        }

    });

});

// Close Signature Popup
closeSignature.onclick = function(){

    signatureModal.style.display = "none";

};

window.addEventListener("click", function(e){

    if(e.target === signatureModal){

        signatureModal.style.display = "none";

    }

});
// ======================================
// SIGNATURE BOX QUANTITY
// ======================================

let signatureQuantity = 1;

const signatureQuantityText = document.getElementById("signatureQuantity");
const signaturePlus = document.getElementById("signaturePlus");
const signatureMinus = document.getElementById("signatureMinus");

signaturePlus.addEventListener("click", () => {

    signatureQuantity++;

    signatureQuantityText.textContent = signatureQuantity;

});

signatureMinus.addEventListener("click", () => {

    if(signatureQuantity > 1){

        signatureQuantity--;

        signatureQuantityText.textContent = signatureQuantity;

    }

});

// ======================================
// SIGNATURE BOX WHATSAPP
// ======================================

const signatureBuy = document.getElementById("signatureBuy");

signatureBuy.addEventListener("click", () => {

    const product1 = document.getElementById("slot1").value;
    const product2 = document.getElementById("slot2").value;
    const product3 = document.getElementById("slot3").value;
    const product4 = document.getElementById("slot4").value;

    if(
        product1 === "" ||
        product2 === "" ||
        product3 === "" ||
        product4 === ""
    ){
        alert("Please select all 4 products.");
        return;
    }

    const message =
`Hello Ummi Heavens,

I would like to order a Signature Box.

🎁 Products

1. ${product1}
2. ${product2}
3. ${product3}
4. ${product4}

📦 Quantity: ${signatureQuantity}

Please share the price and availability.`;

    const whatsapp =
`https://wa.me/917902825149?text=${encodeURIComponent(message)}`;

    window.open(whatsapp, "_blank");

});