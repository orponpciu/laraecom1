// --- AUTHENTICATION SYSTEM ---
let users = []; // Simulating DB
let currentUser = null;

function checkLoginState() {
    const authGuest = document.getElementById('auth-guest');
    const authUser = document.getElementById('auth-user');
    
    // Safety check if elements exist (e.g. might not exist on all pages)
    if (!authGuest || !authUser) return;

    if (currentUser) {
        authGuest.style.display = 'none';
        authUser.style.display = 'flex';
        
        // Pre-fill checkout if logged in and on checkout page
        const custName = document.getElementById('custName');
        if(custName) {
            document.getElementById('custName').value = currentUser.name;
            document.getElementById('custPhone').value = currentUser.phone;
            document.getElementById('custAddr').value = currentUser.address;
        }
    } else {
        authGuest.style.display = 'flex';
        authUser.style.display = 'none';
        
        const custName = document.getElementById('custName');
        if(custName) {
            document.getElementById('custName').value = '';
            document.getElementById('custPhone').value = '';
            document.getElementById('custAddr').value = '';
        }
    }
}

function logout() {
    currentUser = null;
    checkLoginState();
    alert("Logged out successfully.");
    window.location.href = 'index.html';
}

// --- PRODUCT DATA ---
const products = [
    { 
        id: 101, 
        name: "Basic Cotton T-Shirt", 
        price: 550, 
        oldPrice: 800, 
        isNew: true, 
        img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80", 
        cat: "Clothing",
        tags: ["Men", "Casual", "Summer", "Cotton"],
        desc: "A timeless classic tee perfect for everyday wear. Soft, breathable, and durable."
    },
    { 
        id: 102, 
        name: "Summer Floral Dress", 
        price: 1850, 
        oldPrice: 2200, 
        isNew: true, 
        img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80", 
        cat: "Clothing",
        tags: ["Women", "Summer", "Formal"],
        desc: "Lightweight and breezy summer dress designed for maximum comfort and style."
    },
    { 
        id: 103, 
        name: "Urban Pullover Hoodie", 
        price: 1299, 
        oldPrice: 1699, 
        isNew: false, 
        img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80", 
        cat: "Clothing",
        tags: ["Men", "Casual", "Winter"]
    },
    { 
        id: 104, 
        name: "Wireless Pro Buds", 
        price: 2500, 
        oldPrice: 3200, 
        isNew: true, 
        img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80", 
        cat: "Gadgets",
        tags: ["Audio", "Wireless"]
    },
    { 
        id: 105, 
        name: "Smart Watch V2", 
        price: 4500, 
        oldPrice: 6000, 
        isNew: true, 
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80", 
        cat: "Watches",
        tags: ["Smart", "Digital", "Tech"] 
    },
    { 
        id: 106, 
        name: "Performance Running Shoes", 
        price: 3200, 
        oldPrice: 4000, 
        isNew: false, 
        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80", 
        cat: "Sneakers",
        tags: ["Sneakers", "Running", "Sports"]
    },
    { 
        id: 107, 
        name: "Bluetooth Portable Speaker", 
        price: 1550, 
        oldPrice: 1900, 
        isNew: false, 
        img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80", 
        cat: "Gadgets",
        tags: ["Audio", "Tech"]
    },
    { 
        id: 108, 
        name: "Classic Retro Sneakers", 
        price: 2800, 
        oldPrice: 3500, 
        isNew: true, 
        img: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=600&q=80", 
        cat: "Sneakers",
        tags: ["Sneakers", "Casual"]
    },
];

// New Arrivals Data
const newArrivals = [
    { id: 201, name: "Summer Hat", price: 450, oldPrice: 600, isNew: true, img: "img/hat1.jpg", cat: "Accessories", tags: ["Summer"] },
    { id: 202, name: "Eco Bottle", price: 300, oldPrice: 450, isNew: true, img: "img/bottle.jpg", cat: "Accessories", tags: [] },
    { id: 203, name: "Yoga Mat", price: 800, oldPrice: 1200, isNew: true, img: "img/mat.jpg", cat: "Accessories", tags: ["Sports"] },
    { id: 204, name: "Vintage Cam", price: 12000, oldPrice: 15000, isNew: true, img: "img/cam.jpg", cat: "Gadgets", tags: ["Tech"] },
    { id: 205, name: "Travel Pillow", price: 650, oldPrice: 900, isNew: true, img: "img/pillow.jpg", cat: "Accessories", tags: [] }
];

// --- CATEGORIES DATA ---
const categories = [
    { name: "Clothing", img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=600&q=80" },
    { name: "Watches",  img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80" },
    { name: "Sneakers", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80" },
    { name: "Gadgets",  img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80" }
];

// --- CONCERN DATA CONFIGURATION ---
const concernData = {
    "Clothing": ["Men", "Women", "Casual", "Formal", "Summer", "Winter"],
    "Watches": ["Smart", "Digital", "Tech"],
    "Shoes": ["Sneakers", "Running", "Sports", "Formal"]
};

let currentConcernCat = "Clothing";
let currentConcernTag = "Men";

// Global State
let cart = [];
let deliveryFee = 100;

// DOM Elements (assigned in DOMContentLoaded)
let productGrid, newArrivalsGrid, cartSidebar, menuDrawer, overlay, cartItemsEl, cartTotalEl, mobileCartCount, checkoutModal;

// --- INITIALIZATION (MASTER) ---
window.addEventListener('DOMContentLoaded', () => {
    // 1. Assign DOM Elements Safely
    productGrid = document.getElementById('productGrid');
    newArrivalsGrid = document.getElementById('newArrivalsGrid');
    cartSidebar = document.getElementById('cartSidebar');
    menuDrawer = document.getElementById('menuDrawer');
    overlay = document.getElementById('globalOverlay');
    cartItemsEl = document.getElementById('cartItems');
    cartTotalEl = document.getElementById('cartTotal');
    mobileCartCount = document.getElementById('mobileCartCount');
    checkoutModal = document.getElementById('checkoutModal');

    // 2. Initialize Common Features
    checkLoginState();
    
    // 3. PAGE SPECIFIC LOGIC
    
    // A. HOME PAGE LOGIC (If productGrid exists)
    if (productGrid) {
        renderCategories();
        renderProducts(products, productGrid);
        renderNewArrivals();
        
        // Concern Section
        if(document.getElementById('concernTabs')) {
            renderConcernTabs();
            renderConcernTags(currentConcernCat);
            filterConcernProducts(currentConcernTag);
        }

        // Shop By Look
        if(document.getElementById('shopLookProducts')) {
            renderShopByLook();
        }

        setupScrollAnimation();
        const deliveryOpt = document.querySelector('.delivery-option');
        if(deliveryOpt) selectDelivery(100, deliveryOpt);
    }

    // B. SHOP PAGE LOGIC (If product-grid exists)
    const shopGrid = document.getElementById('product-grid'); 
    if (shopGrid) {
        console.log("Shop Page Detected.");
        renderProducts(products, shopGrid);
        setupShopFilters(shopGrid);
    }

    // C. DETAILS PAGE LOGIC (If mainImage exists)
    const mainImg = document.getElementById('mainImage');
    if (mainImg) {
        initDetailsPage();
    }

    // D. CONTACT PAGE LOGIC
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        initContactForm(contactForm);
    }
    
    // 4. FIX FOR MENU TABS: Force strict initialization
    // This ensures Menu is shown and Categories is hidden on load
    const tabMenu = document.getElementById('tab-menu');
    const tabCats = document.getElementById('tab-cats');
    
    if(tabMenu) {
        tabMenu.classList.add('active');
        tabMenu.style.display = 'block';
    }
    if(tabCats) {
        tabCats.classList.remove('active');
        tabCats.style.display = 'none';
    }
});

// --- RENDER FUNCTIONS ---
function renderShopByLook() {
    const lookIds = [101, 104, 103]; 
    const lookItems = products.filter(p => lookIds.includes(p.id));
    
    const container = document.getElementById('shopLookProducts');
    if(!container) return;
    
    container.innerHTML = lookItems.map(p => `
        <div class="look-product-item">
            <img src="${p.img}" alt="${p.name}" class="look-thumb">
            <div class="look-details">
                <h4>${p.name}</h4>
                <span>৳${p.price.toLocaleString()}</span>
            </div>
            <button class="look-add-btn" onclick="addToCart(${p.id})">Add</button>
        </div>
    `).join('');
}

function renderConcernTabs() {
    const container = document.getElementById('concernTabs');
    if(!container) return;
    container.innerHTML = Object.keys(concernData).map(cat => `
        <button class="c-tab-btn ${cat === currentConcernCat ? 'active' : ''}" 
                onclick="changeConcernCat('${cat}')">
            ${cat}
        </button>
    `).join('');
}

function changeConcernCat(cat) {
    currentConcernCat = cat;
    renderConcernTabs();
    renderConcernTags(cat);
    const firstTag = concernData[cat][0];
    filterConcernProducts(firstTag);
}

function renderConcernTags(cat) {
    const container = document.getElementById('concernTags');
    if(!container) return;
    const tags = concernData[cat];
    container.innerHTML = tags.map(tag => `
        <div class="c-tag ${tag === currentConcernTag ? 'active' : ''}" 
             onclick="filterConcernProducts('${tag}')">
            ${tag}
        </div>
    `).join('');
}

function filterConcernProducts(tag) {
    currentConcernTag = tag;
    renderConcernTags(currentConcernCat); 

    const filtered = products.filter(p => p.tags && p.tags.includes(tag));
    
    const grid = document.getElementById('concernProductGrid');
    if(!grid) return;
    
    if(filtered.length === 0) {
         grid.innerHTML = `<div style="padding:2rem; color:#64748b; width:100%; text-align:center">No products found for ${tag} yet.</div>`;
    } else {
         grid.innerHTML = filtered.map(p => {
            let discountHtml = '';
            if(p.oldPrice && p.oldPrice > p.price) {
                const diff = p.oldPrice - p.price;
                const pct = Math.round((diff / p.oldPrice) * 100);
                discountHtml = `<div class="badge-pill badge-discount">-${pct}%</div>`;
            }
            return `
            <div class="arrival-card" style="min-width: 250px !important;">
                <div class="badge-stack">
                    ${discountHtml}
                </div>
                <div class="img-wrapper" onclick="viewProduct(${p.id})">
                    <img src="${p.img}" alt="${p.name}" class="product-img">
                </div>
                <div class="product-info">
                    <h3 class="product-title" style="font-size: 1rem" onclick="viewProduct(${p.id})">${p.name}</h3>
                    <div class="price-row" style="margin-bottom:0.5rem">
                        ${p.oldPrice ? `<span class="price-strike" style="font-size:0.85rem">৳${p.oldPrice.toLocaleString()}</span>` : ''}
                        <span class="product-price" style="font-size: 1.1rem">৳${p.price.toLocaleString()}</span>
                    </div>
                    <button class="add-btn" onclick="addToCart(${p.id})">Add to Cart</button>
                </div>
            </div>
         `}).join('');
    }
}

function renderCategories() {
    const container = document.getElementById('categoryGrid');
    if (!container) return;
    
    container.innerHTML = categories.map(cat => `
        <div class="cat-card stagger-delay reveal" 
             onclick="window.location.href='shop.html?category=${encodeURIComponent(cat.name)}'" 
             style="background-image: url('${cat.img}')">
            <h3>${cat.name}</h3>
        </div>
    `).join('');
}

function renderProducts(items, container) {
    if(!container) return;
    
    if(items.length === 0) {
        container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #64748b;">No products found matching your search.</div>`;
        return;
    }
    container.innerHTML = items.map(p => {
        let discountHtml = '';
        if(p.oldPrice && p.oldPrice > p.price) {
            const diff = p.oldPrice - p.price;
            const pct = Math.round((diff / p.oldPrice) * 100);
            discountHtml = `<div class="badge-pill badge-discount">-${pct}%</div>`;
        }
        let newHtml = p.isNew ? `<div class="badge-pill badge-new-style">NEW</div>` : '';

        return `
        <div class="product-card stagger-delay reveal">
            <div class="badge-stack">
                ${discountHtml}
                ${newHtml}
            </div>
            <div class="img-wrapper" onclick="viewProduct(${p.id})">
                <img src="${p.img}" alt="${p.name}" class="product-img">
            </div>
            <div class="product-info">
                <div class="product-cat">${p.cat || 'New'}</div>
                <h3 class="product-title" onclick="viewProduct(${p.id})">${p.name}</h3>
                <div class="price-row">
                    ${p.oldPrice ? `<span class="price-strike">৳${p.oldPrice.toLocaleString()}</span>` : ''}
                    <span class="product-price">৳${p.price.toLocaleString()}</span>
                </div>
                <button class="add-btn" onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
        </div>
    `}).join('');
    setupScrollAnimation(); 
}

function renderNewArrivals() {
    if(!newArrivalsGrid) return;
    newArrivalsGrid.innerHTML = newArrivals.map(p => {
        let discountHtml = '';
        if(p.oldPrice && p.oldPrice > p.price) {
            const diff = p.oldPrice - p.price;
            const pct = Math.round((diff / p.oldPrice) * 100);
            discountHtml = `<div class="badge-pill badge-discount">-${pct}%</div>`;
        }
        let newHtml = p.isNew ? `<div class="badge-pill badge-new-style">NEW</div>` : '';

        return `
        <div class="arrival-card">
            <div class="badge-stack">
                ${discountHtml}
                ${newHtml}
            </div>
            <div class="img-wrapper" onclick="viewProduct(${p.id})">
                <img src="${p.img}" alt="${p.name}" class="product-img">
            </div>
            <div class="product-info">
                <h3 class="product-title" style="font-size: 1rem" onclick="viewProduct(${p.id})">${p.name}</h3>
                <div class="price-row" style="margin-bottom:0.5rem">
                    ${p.oldPrice ? `<span class="price-strike" style="font-size:0.85rem">৳${p.oldPrice.toLocaleString()}</span>` : ''}
                    <span class="product-price" style="font-size: 1.1rem">৳${p.price.toLocaleString()}</span>
                </div>
                <button class="add-btn" onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
        </div>
    `}).join('');
}

// --- VIEW PRODUCT FUNCTION ---
function viewProduct(id) {
    window.location.href = `details.html?id=${id}`;
}

// --- CART LOGIC ---
function addToCart(id, qty = 1) {
    let item = products.find(p => p.id === id);
    if (!item) item = newArrivals.find(p => p.id === id);
    
    if(!item && typeof id !== 'number') {
        console.error("Invalid product ID"); 
        return;
    }

    const existing = cart.find(c => c.id === id);
    if(existing) {
        existing.qty += qty;
    } else {
        cart.push({...item, qty: qty});
    }
    updateCartUI();
    
    // Only open sidebar if added from a listing page, not details page (unless needed)
    if(qty === 1 && !document.querySelector('.details-container')) {
        if(!cartSidebar.classList.contains('open')) toggleCart();
    }
}

function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    updateCartUI();
}

function changeQty(id, delta) {
    const item = cart.find(c => c.id === id);
    if(item) {
        item.qty += delta;
        if(item.qty <= 0) removeFromCart(id);
        else updateCartUI();
    }
}

function updateCartUI() {
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    
    if(mobileCartCount) mobileCartCount.textContent = totalQty;
    if(cartTotalEl) cartTotalEl.textContent = '৳' + totalPrice.toLocaleString();

    if(cartItemsEl) {
        if(cart.length === 0) {
            cartItemsEl.innerHTML = '<div style="text-align:center; margin-top: 2rem; color: #94a3b8">Your cart is empty.</div>';
        } else {
            cartItemsEl.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img src="${item.img}" alt="${item.name}">
                    <div style="flex:1">
                        <div style="font-weight:600; font-size: 0.9rem">${item.name}</div>
                        <div style="color: var(--primary); font-weight:700">৳${item.price.toLocaleString()}</div>
                        <div class="qty-ctrl">
                            <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
                            <span>${item.qty}</span>
                            <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
                        </div>
                    </div>
                    <button onclick="removeFromCart(${item.id})" style="color: #ef4444; background:none; font-size: 1.2rem">&times;</button>
                </div>
            `).join('');
        }
    }
    updateCheckoutTotals();
}

// --- CHECKOUT LOGIC ---
function openCheckout() {
    if(cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    closeAllDrawers();
    checkoutModal.classList.add('active');
    updateCheckoutTotals();
}

function closeCheckout() {
    checkoutModal.classList.remove('active');
}

function selectDelivery(fee, element) {
    deliveryFee = fee;
    document.querySelectorAll('.delivery-option').forEach(el => el.classList.remove('selected'));
    if(element) {
        element.classList.add('selected');
        const input = element.querySelector('input');
        if(input) input.checked = true;
    }
    updateCheckoutTotals();
}

function updateCheckoutTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const total = subtotal + deliveryFee;

    const subEl = document.getElementById('coSubtotal');
    if(subEl) subEl.textContent = '৳' + subtotal.toLocaleString();
    
    const delEl = document.getElementById('coDelivery');
    if(delEl) delEl.textContent = '৳' + deliveryFee.toLocaleString();
    
    const totEl = document.getElementById('coTotal');
    if(totEl) totEl.textContent = '৳' + total.toLocaleString();

    const itemsListEl = document.getElementById('coItemsList');
    if(itemsListEl) {
        itemsListEl.innerHTML = cart.map(item => `
            <div class="co-item">
                <img src="${item.img}" alt="${item.name}">
                <div class="co-item-details">
                    <div class="co-item-name">${item.name}</div>
                    <div class="co-item-meta">Qty: ${item.qty}</div>
                </div>
                <div class="co-item-price">৳${(item.price * item.qty).toLocaleString()}</div>
            </div>
        `).join('');
    }
}

function placeOrder() {
    const name = document.getElementById('custName').value;
    const phone = document.getElementById('custPhone').value;
    const addr = document.getElementById('custAddr').value;

    if(!name || !phone || !addr) {
        alert("Please fill in all fields.");
        return;
    }

    // --- AUTO ACCOUNT LOGIC ---
    let message = "";
    if(!currentUser) {
        // Generate 6 Digit Password
        const randomPass = Math.floor(100000 + Math.random() * 900000);
        
        // Save User
        const newUser = { name, phone, address: addr, pass: randomPass.toString() };
        users.push(newUser);
        currentUser = newUser;
        checkLoginState();

        message = `Thank you ${name}! \nOrder placed successfully.\n\nACCOUNT CREATED:\nYour Phone: ${phone}\nYour Password: ${randomPass}\n(Please save this to login later)`;
    } else {
        message = `Thank you ${name}! \nOrder placed successfully.\nTotal Amount: ${document.getElementById('coTotal').textContent}\nWe will contact you at ${phone}.`;
    }

    alert(message);
    
    cart = [];
    updateCartUI();
    closeCheckout();
    document.getElementById('orderForm').reset();
}

// --- UI HELPERS ---
function switchTab(tabName) {
    // 1. Get Elements
    const btnMenu = document.getElementById('btn-menu');
    const btnCats = document.getElementById('btn-cats');
    const tabMenu = document.getElementById('tab-menu');
    const tabCats = document.getElementById('tab-cats');

    // 2. Reset Buttons
    if(btnMenu) btnMenu.classList.remove('active');
    if(btnCats) btnCats.classList.remove('active');

    // 3. FORCE HIDE all contents using display:none (fixes the overlap issue)
    if(tabMenu) {
        tabMenu.classList.remove('active');
        tabMenu.style.display = 'none';
    }
    if(tabCats) {
        tabCats.classList.remove('active');
        tabCats.style.display = 'none';
    }

    // 4. Activate Specific Tab
    if(tabName === 'menu') {
        if(btnMenu) btnMenu.classList.add('active');
        if(tabMenu) {
            tabMenu.classList.add('active');
            tabMenu.style.display = 'block'; // Force show
        }
    } else {
        if(btnCats) btnCats.classList.add('active');
        if(tabCats) {
            tabCats.classList.add('active');
            tabCats.style.display = 'block'; // Force show
        }
    }
}

function closeAllDrawers() {
    if(cartSidebar) cartSidebar.classList.remove('open');
    if(menuDrawer) menuDrawer.classList.remove('open');
    if(overlay) overlay.classList.remove('open');
}

function toggleCart() {
    if (cartSidebar.classList.contains('open')) closeAllDrawers();
    else {
        closeAllDrawers(); 
        cartSidebar.classList.add('open');
        overlay.classList.add('open');
    }
}

function toggleMenu() {
    if (menuDrawer.classList.contains('open')) closeAllDrawers();
    else {
        closeAllDrawers(); 
        menuDrawer.classList.add('open');
        overlay.classList.add('open');
    }
}

/* --- SEARCH FUNCTIONALITY --- */
function openSearchModal() {
    closeAllDrawers();
    const modal = document.getElementById('searchModal');
    if(modal) {
        modal.classList.add('active');
        setTimeout(() => document.getElementById('searchInput').focus(), 100);
    }
}

function closeSearchModal() {
    const modal = document.getElementById('searchModal');
    if(modal) modal.classList.remove('active');
}

function performSearch() {
    window.location.href = 'shop.html';
}

// --- FIX: UPDATED FILTER CAT TO REDIRECT ---
function filterCat(catName) {
    // OLD CODE (Problem): Just tried to filter current page.
    // NEW CODE (Fix): Redirects to shop.html with category in URL
    window.location.href = `shop.html?category=${encodeURIComponent(catName)}`;
}

function setupScrollAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// --- SLIDER CONTROLS ---
function slideLeft() {
    const container = document.getElementById('newArrivalsGrid');
    if(container) container.scrollBy({ left: -320, behavior: 'smooth' });
}

function slideRight() {
    const container = document.getElementById('newArrivalsGrid');
    if(container) container.scrollBy({ left: 320, behavior: 'smooth' });
}

function slideConcernLeft() {
    const container = document.getElementById('concernProductGrid');
    if(container) container.scrollBy({ left: -320, behavior: 'smooth' });
}

function slideConcernRight() {
    const container = document.getElementById('concernProductGrid');
    if(container) container.scrollBy({ left: 320, behavior: 'smooth' });
}

/* --- INFO PAGES --- */
const fullPagesContent = {
    'contact': `
        <div class="form-box" style="box-shadow: none; border: 1px solid #e2e8f0;">
            <h2 class="section-title" style="margin-bottom: 1.5rem">Get in Touch</h2>
            <form onsubmit="event.preventDefault(); alert('Message sent successfully!');">
                <input type="text" placeholder="Name" required>
                <input type="email" placeholder="Email Address" required>
                <textarea rows="4" placeholder="Your Message" required></textarea>
                <button class="btn btn-primary" style="width:100%">Send Message</button>
            </form>
        </div>
    `,
    'about': `<h2>About Hey Marketoza</h2><p>We are a leading fashion retailer.</p>`,
    'privacy': `<h2>Privacy Policy</h2><p>Your privacy matters to us.</p>`,
    'terms': `<h2>Terms and Conditions</h2><p>Standard terms apply.</p>`,
    'disclaimer': `<h2>Disclaimer</h2><p>Products may vary slightly from images.</p>`,
    'pages': `<h2>Our Site Map</h2>`
};

function openFullPage(pageKey) {
    closeAllDrawers();
    const modal = document.getElementById('fullPageModal');
    const titleEl = document.getElementById('fullPageTitle');
    const contentBody = document.getElementById('fullPageContent');
    
    const titles = {
        'contact': 'Get In Touch',
        'about': 'About Us',
        'privacy': 'Privacy Policy',
        'terms': 'Terms & Conditions',
        'disclaimer': 'Disclaimer',
        'pages': 'Our Pages'
    };

    if(fullPagesContent[pageKey] && modal) {
        titleEl.innerText = titles[pageKey] || 'Information';
        contentBody.innerHTML = fullPagesContent[pageKey];
        modal.classList.add('active');
    }
}

function closeFullPage() {
    const modal = document.getElementById('fullPageModal');
    if(modal) modal.classList.remove('active');
}

function closeLogin() {
    window.location.href = 'index.html'; 
}

// --- SHOP PAGE FILTERS ---
function toggleSidebar() {
    const sidebar = document.getElementById('filterSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (sidebar) sidebar.classList.toggle('active');
    
    if (overlay) {
        overlay.style.display = sidebar.classList.contains('active') ? 'block' : 'none';
    }
}

function setupShopFilters(targetGrid) {
    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');
    const checkboxes = document.querySelectorAll('.cat-checkbox');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');

    function applyFilters() {
        let filtered = [...products]; 

        // 1. Search Logic
        if (searchInput) {
            const term = searchInput.value.toLowerCase();
            if (term) filtered = filtered.filter(p => p.name.toLowerCase().includes(term));
        }

        // 2. Category Logic
        const checkedCats = Array.from(checkboxes).filter(c => c.checked).map(c => c.value);
        if (checkedCats.length > 0) {
            filtered = filtered.filter(p => checkedCats.includes(p.cat)); 
        }

        // 3. Price Logic
        if (priceRange) {
            const max = parseInt(priceRange.value);
            if (priceValue) priceValue.innerText = `৳${max}`;
            filtered = filtered.filter(p => p.price <= max);
        }

        // 4. Sort Logic
        if (sortSelect) {
            const sort = sortSelect.value;
            if (sort === 'low-high') filtered.sort((a, b) => a.price - b.price);
            if (sort === 'high-low') filtered.sort((a, b) => b.price - a.price);
        }

        renderProducts(filtered, targetGrid);
    }

    if (searchInput) searchInput.addEventListener('input', applyFilters);
    if (sortSelect) sortSelect.addEventListener('change', applyFilters);
    checkboxes.forEach(box => box.addEventListener('change', applyFilters));
    if (priceRange) priceRange.addEventListener('input', applyFilters);

    // --- CHECK URL ON LOAD ---
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');

    if (categoryParam) {
        const targetCheckbox = Array.from(checkboxes).find(box => box.value === categoryParam);
        if (targetCheckbox) {
            targetCheckbox.checked = true;
            applyFilters();
        } else {
            // Even if box not found, run filter (shows all)
            applyFilters();
        }
    } else {
        applyFilters();
    }
}

// --- DETAILS PAGE LOGIC ---
function initDetailsPage() {
    // 1. Get ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // 2. Find Product in Global Data (fallback to newArrivals if not in products)
    let product = products.find(p => p.id == productId);
    if(!product) product = newArrivals.find(p => p.id == productId);

    // 3. Render Data
    if (product) {
        // Update Title
        const titleEl = document.querySelector('.product-title');
        if(titleEl) titleEl.innerText = product.name;
        
        // Update Prices
        const priceEl = document.querySelector('.current-price');
        if(priceEl) priceEl.innerText = `৳${product.price.toLocaleString()}`;
        
        const oldPriceEl = document.querySelector('.old-price');
        if(oldPriceEl) oldPriceEl.innerText = product.oldPrice ? `৳${product.oldPrice.toLocaleString()}` : '';
        
        // Update Description Tab
        const descTab = document.getElementById('desc');
        if(descTab) descTab.innerText = product.desc || "No description available for this product.";

        // Update Main Image
        const mainImg = document.getElementById('mainImage');
        if(mainImg) mainImg.src = product.img;

        // Reset Quantity
        const qty = document.getElementById('qty');
        if(qty) qty.value = 1;

        // Handle Add To Cart Button Specially for Details Page
        const addBtn = document.querySelector('.add-to-cart-btn');
        if(addBtn) {
            // Remove old listeners to prevent duplicates (cloning hack)
            const newBtn = addBtn.cloneNode(true);
            addBtn.parentNode.replaceChild(newBtn, addBtn);
            
            newBtn.addEventListener('click', function() {
                const qtyVal = parseInt(document.getElementById('qty').value) || 1;
                addToCart(product.id, qtyVal); // Call global add cart
                
                // Animation
                const originalText = newBtn.innerHTML;
                newBtn.innerHTML = '<i class="fa-solid fa-check"></i> Added!';
                newBtn.style.backgroundColor = '#16a34a';
                setTimeout(() => {
                    newBtn.innerHTML = originalText;
                    newBtn.style.backgroundColor = '';
                    toggleCart(); // Open cart sidebar
                }, 1500);
            });
        }
    } else {
        document.querySelector('.product-title').innerText = "Product Not Found";
    }

    // Initialize Gallery Interactions
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.addEventListener('click', function() {
            changeImage(this);
        });
    });
}

function changeImage(thumbnail) {
    const mainImg = document.getElementById('mainImage');
    mainImg.src = thumbnail.src;
    mainImg.style.opacity = '0.5';
    setTimeout(() => mainImg.style.opacity = '1', 200);
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
    thumbnail.classList.add('active');
}

function increaseQty() {
    const qtyInput = document.getElementById('qty');
    if(qtyInput) qtyInput.value = parseInt(qtyInput.value) + 1;
}

function decreaseQty() {
    const qtyInput = document.getElementById('qty');
    if(qtyInput && parseInt(qtyInput.value) > 1) {
        qtyInput.value = parseInt(qtyInput.value) - 1;
    }
}

function openTab(evt, tabName) {
    // Handle tab switching for Account/Details pages
    if(evt) evt.preventDefault();
    const tabcontent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
        tabcontent[i].style.display = "none";
    }
    const tablinks = document.querySelectorAll(".account-nav a, .tab-btn");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    const target = document.getElementById(tabName);
    if(target) {
        target.style.display = "block";
        target.classList.add("active");
    }
    if(evt) evt.currentTarget.classList.add("active");
}

function initContactForm(form) {
    const submitBtn = form.querySelector('.submit-btn');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if(name && email && message) {
            const originalText = submitBtn.innerText;
            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;
            setTimeout(() => {
                alert(`Thank you, ${name}! Your message has been sent.`);
                form.reset();
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            }, 1500);
        }
    });
}