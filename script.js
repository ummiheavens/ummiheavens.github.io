// =====================================
// Ummi Heavens Premium Splash Screen
// Part 1
// =====================================

const splash = document.getElementById("splash");
const leafContainer = document.getElementById("leafContainer");

const leafImages = [
    "assets/leaf1.png",
    "assets/leaf2.png",
    "assets/leaf3.png",
    "assets/leaf4.png"
];

const leaves = [];
const TOTAL_LEAVES = window.innerWidth < 768 ? 60 : 220;
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

for (let i = 0; i < TOTAL_LEAVES; i++) {

    const leaf = document.createElement("img");

    leaf.src = leafImages[Math.floor(Math.random() * leafImages.length)];

    leaf.className = "leaf";

    // Random size
    const size = 12 + Math.random() * 28;

    leaf.style.width = size + "px";

    // Layer
    if (Math.random() > 0.65) {
        leaf.classList.add("front");
    } else {
        leaf.classList.add("back");
    }

    // Random scale
    const r = Math.random();

    if (r < 0.33) leaf.classList.add("small");
    else if (r < 0.66) leaf.classList.add("medium");
    else leaf.classList.add("large");

    if (Math.random() > 0.7)
        leaf.classList.add("fast");

    leafContainer.appendChild(leaf);

    leaves.push({

        el: leaf,

        angle: Math.random() * Math.PI * 2,

        radius: 100 + Math.random() * Math.max(screenWidth, screenHeight),

        speed: 0.001 + Math.random() * 0.003,

        offset: Math.random() * 1000,

        rotate: Math.random() * 360,

        rotateSpeed: -2 + Math.random() * 4,

        drift: 40 + Math.random() * 100

    });

}// =====================================
// Animation Engine
// =====================================

let time = 0;

function animate() {

    time += 0.008;

    const cx = screenWidth / 2;
    const cy = screenHeight / 2;

    leaves.forEach((leaf, index) => {

        leaf.angle += leaf.speed;

        // Large wind motion
        const wind =
            Math.sin(time + leaf.offset) * leaf.drift;

        const wave =
            Math.cos(time * 1.8 + leaf.offset) * (leaf.drift * 0.4);

        // Spiral around screen
        const x =
            cx +
            Math.cos(leaf.angle) * leaf.radius +
            wind;

        const y =
            cy +
            Math.sin(leaf.angle) * (leaf.radius * 0.55) +
            wave;

        leaf.rotate += leaf.rotateSpeed;

        leaf.el.style.transform =
            `translate(${x}px,${y}px)
             rotate(${leaf.rotate}deg)`;

    });

    requestAnimationFrame(animate);

}

animate();// =====================================
// Fade Splash
// =====================================

setTimeout(() => {

    splash.classList.add("fadeOut");

    setTimeout(() => {

        splash.style.display = "none";

        const website = document.getElementById("website");

        if (website) {
            website.style.display = "block";
        }

        document.body.style.overflow = "auto";

    }, 900);

}, 3000);
// =====================================
// CATEGORY MODAL
// =====================================
// ======================================
// UMMI HEAVENS PRODUCT DATABASE
// ======================================

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
// ================= CATEGORY POPUP =================

const categoryModal = document.getElementById("categoryModal");

if (categoryModal) {

const modalTitle = document.getElementById("modalTitle");
const modalProducts = document.getElementById("modalProducts");
const closeModal = document.querySelector(".close-modal");

const productModal = document.getElementById("productModal");
const productName = document.getElementById("productName");
const productImage = document.getElementById("productImage");
const closeProduct = document.querySelector(".close-product");

// Open Category Popup
document.querySelectorAll(".category-btn").forEach(card => {

    card.addEventListener("click", () => {

        const category = card.dataset.category;

        modalTitle.textContent = category;

        modalProducts.innerHTML = "";

        products[category].forEach(product => {

            const div = document.createElement("div");

            div.className = "modal-product";

            div.textContent = product;

            modalProducts.appendChild(div);

        });

        categoryModal.style.display = "flex";

    });

});

// Close Category Popup
closeModal.onclick = () => {

    categoryModal.style.display = "none";

};

// Open Product Popup
document.addEventListener("click", function(e){

    if(e.target.classList.contains("modal-product")){

        productName.textContent = e.target.textContent;

        productImage.src = "assets/logo.png";

        productModal.style.display = "flex";

    }

});

// Close Product Popup
closeProduct.onclick = () => {

    productModal.style.display = "none";

};

// Close Outside
window.onclick = function(e){

    if(e.target === categoryModal){

        categoryModal.style.display = "none";

    }

    if(e.target === productModal){

        productModal.style.display = "none";

    }

};

}
/* ================= SCROLL TO TOP ================= */

const scrollTopBtn = document.getElementById("scrollTopBtn");

if (scrollTopBtn) {

    function getScrollTop() {
        return document.documentElement.scrollTop || document.body.scrollTop;
    }

    window.addEventListener("scroll", () => {

        if (getScrollTop() > 50) {
            scrollTopBtn.style.display = "flex";
        } else {
            scrollTopBtn.style.display = "none";
        }

    });

    scrollTopBtn.onclick = () => {

        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        document.body.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };

}
// ================= MOBILE MENU =================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".header-nav");

if(menuToggle && navMenu){

    menuToggle.addEventListener("click",()=>{

        navMenu.classList.toggle("active");

    });


    document.querySelectorAll(".header-nav a").forEach(link => {

        link.addEventListener("click",()=>{

            navMenu.classList.remove("active");

        });

    });

}