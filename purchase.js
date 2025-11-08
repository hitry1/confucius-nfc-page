/**
 * Purchase Page - Optimized JavaScript
 * Version: 2.0
 */

// Global state
let currentLang = 'ko';
let selectedVariant = 'confucius';
let selectedBundle = 'single'; // 'single' or 'set'
let quantity = 1;

// Price configuration
const PRICES = {
    single: {
        original: 35000,
        sale: 24500,
        discount: 30,
        usd: { original: 35.00, sale: 24.50 }
    },
    set: {
        original: 105000,
        sale: 52500,
        discount: 50,
        usd: { original: 105.00, sale: 52.50 }
    }
};

// Philosopher names
const PHILOSOPHER_NAMES = {
    confucius: { ko: '공자 키링', en: 'Confucius Keyring' },
    laozi: { ko: '노자 키링', en: 'Laozi Keyring' },
    buddha: { ko: '석가모니 키링', en: 'Buddha Keyring' }
};

/**
 * Initialize when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
    initLanguageFromStorage();
    initCountdownTimer();
    initStockCounter();
    saveToRecentView();
});

/**
 * Load language preference from localStorage
 */
function initLanguageFromStorage() {
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang && (savedLang === 'ko' || savedLang === 'en')) {
        currentLang = savedLang;
        updateLanguage(currentLang);
    }
}

/**
 * Toggle language
 */
function toggleLanguage() {
    currentLang = currentLang === 'ko' ? 'en' : 'ko';
    updateLanguage(currentLang);
    localStorage.setItem('preferredLang', currentLang);
}

/**
 * Update all language elements
 */
function updateLanguage(lang) {
    document.querySelectorAll('[data-ko][data-en]').forEach(el => {
        const text = el.getAttribute('data-' + lang);
        if (text) {
            el.textContent = text;
        }
    });

    // Update prices
    updatePriceDisplay();

    document.documentElement.lang = lang;
}

/**
 * Change main image
 */
function changeImage(icon, element) {
    document.getElementById('mainIcon').textContent = icon;
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    element.classList.add('active');
}

/**
 * Change thumbnail image in gallery
 */
function changeThumbnail(imageSrc, element) {
    const mainImage = document.getElementById('mainProductImage');
    if (mainImage) {
        mainImage.src = imageSrc;
    }
    document.querySelectorAll('.thumbnail-img-wrapper').forEach(t => t.classList.remove('active'));
    element.classList.add('active');
}

/**
 * Select bundle option
 */
function selectBundle(bundle, element) {
    selectedBundle = bundle;
    document.querySelectorAll('.bundle-option').forEach(b => b.classList.remove('selected'));
    element.classList.add('selected');

    // Show/hide variant and quantity sections
    const variantSection = document.getElementById('variantSection');
    const quantitySection = document.getElementById('quantitySection');

    if (bundle === 'set') {
        variantSection.style.display = 'none';
        quantitySection.style.display = 'none';
    } else {
        variantSection.style.display = 'block';
        quantitySection.style.display = 'block';
    }

    updatePriceDisplay();
}

/**
 * Select variant (philosopher)
 */
function selectVariant(variant, element) {
    selectedVariant = variant;
    document.querySelectorAll('.variant-option').forEach(v => v.classList.remove('selected'));
    element.classList.add('selected');

    // Update main image
    const icons = { confucius: '孔', laozi: '老', buddha: '佛' };
    document.getElementById('mainIcon').textContent = icons[variant];

    // Update thumbnail
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    document.querySelector(`.thumbnail[data-character="${variant}"]`).classList.add('active');
}

/**
 * Change quantity
 */
function changeQuantity(delta) {
    const input = document.getElementById('quantity');
    let newValue = parseInt(input.value) + delta;

    if (newValue >= 1 && newValue <= 99) {
        input.value = newValue;
        quantity = newValue;
        updatePriceDisplay();
        updateStockInfo(newValue);
    }
}

/**
 * Update price display
 */
function updatePriceDisplay() {
    const priceConfig = PRICES[selectedBundle];
    const totalOriginal = priceConfig.original * (selectedBundle === 'single' ? quantity : 1);
    const totalSale = priceConfig.sale * (selectedBundle === 'single' ? quantity : 1);

    const isKorean = currentLang === 'ko';

    // Update discount rate
    document.getElementById('discountRate').textContent = priceConfig.discount + '%';

    // Update prices
    if (isKorean) {
        document.getElementById('finalPrice').textContent = totalSale.toLocaleString() + '원';
        document.getElementById('originalPrice').textContent = totalOriginal.toLocaleString() + '원';
        document.getElementById('stickyPrice').textContent = totalSale.toLocaleString() + '원';
    } else {
        const usdSale = priceConfig.usd.sale * (selectedBundle === 'single' ? quantity : 1);
        const usdOriginal = priceConfig.usd.original * (selectedBundle === 'single' ? quantity : 1);
        document.getElementById('finalPrice').textContent = '$' + usdSale.toFixed(2);
        document.getElementById('originalPrice').textContent = '$' + usdOriginal.toFixed(2);
        document.getElementById('stickyPrice').textContent = '$' + usdSale.toFixed(2);
    }
}

/**
 * Update stock information based on quantity
 */
function updateStockInfo(qty) {
    const stockElement = document.getElementById('stockInfo');
    const remaining = 12 - (qty - 1);

    if (currentLang === 'ko') {
        stockElement.textContent = `재고 ${remaining}개 남음`;
    } else {
        stockElement.textContent = `${remaining} left in stock`;
    }

    // Change color based on stock level
    if (remaining <= 5) {
        stockElement.classList.remove('plenty');
        stockElement.style.color = 'var(--red)';
    } else {
        stockElement.classList.add('plenty');
        stockElement.style.color = 'var(--green)';
    }
}

/**
 * Initialize countdown timer (24 hours)
 */
function initCountdownTimer() {
    const countdownElement = document.getElementById('countdown');
    if (!countdownElement) return;

    // Check if we have a saved end time, otherwise create one
    let endTime = localStorage.getItem('dealEndTime');
    if (!endTime || new Date(parseInt(endTime)) < new Date()) {
        // Set end time to midnight today
        const now = new Date();
        const midnight = new Date(now);
        midnight.setHours(23, 59, 59, 999);
        endTime = midnight.getTime();
        localStorage.setItem('dealEndTime', endTime);
    } else {
        endTime = parseInt(endTime);
    }

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = endTime - now;

        if (distance < 0) {
            // Reset to next day
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(23, 59, 59, 999);
            endTime = tomorrow.getTime();
            localStorage.setItem('dealEndTime', endTime);
            return;
        }

        const hours = Math.floor(distance / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.textContent =
            String(hours).padStart(2, '0') + ':' +
            String(minutes).padStart(2, '0') + ':' +
            String(seconds).padStart(2, '0');
    }

    // Update immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

/**
 * Simulate stock counter decrease
 */
function initStockCounter() {
    updateStockInfo(quantity);
}

/**
 * Switch tabs
 */
function switchTab(index) {
    document.querySelectorAll('.tab').forEach((t, i) => {
        t.classList.toggle('active', i === index);
    });
    document.querySelectorAll('.tab-content').forEach((c, i) => {
        c.classList.toggle('active', i === index);
    });

    // Smooth scroll to tabs on mobile
    if (window.innerWidth <= 968) {
        document.querySelector('.product-details').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * Buy now
 */
function buyNow() {
    const orderDetails = getOrderDetails();
    showModal('buy', orderDetails);

    // Analytics (optional)
    if (window.gtag) {
        gtag('event', 'purchase', {
            transaction_id: 'T' + Date.now(),
            value: orderDetails.totalPrice,
            currency: currentLang === 'ko' ? 'KRW' : 'USD',
            items: orderDetails.items
        });
    }
}

/**
 * Add to cart
 */
function addToCart() {
    const orderDetails = getOrderDetails();
    showModal('cart', orderDetails);

    // Save to localStorage cart
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(orderDetails);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Analytics (optional)
    if (window.gtag) {
        gtag('event', 'add_to_cart', {
            currency: currentLang === 'ko' ? 'KRW' : 'USD',
            value: orderDetails.totalPrice,
            items: orderDetails.items
        });
    }
}

/**
 * Get order details
 */
function getOrderDetails() {
    const priceConfig = PRICES[selectedBundle];
    const isKorean = currentLang === 'ko';

    let items = [];
    let itemNames = '';

    if (selectedBundle === 'set') {
        items = [
            { name: PHILOSOPHER_NAMES.confucius[currentLang], quantity: 1 },
            { name: PHILOSOPHER_NAMES.laozi[currentLang], quantity: 1 },
            { name: PHILOSOPHER_NAMES.buddha[currentLang], quantity: 1 }
        ];
        itemNames = isKorean ? '3개 세트 (공자 + 노자 + 석가모니)' : '3-Piece Set (Confucius + Laozi + Buddha)';
    } else {
        items = [
            { name: PHILOSOPHER_NAMES[selectedVariant][currentLang], quantity: quantity }
        ];
        itemNames = `${PHILOSOPHER_NAMES[selectedVariant][currentLang]} × ${quantity}`;
    }

    const totalPrice = isKorean ?
        priceConfig.sale * (selectedBundle === 'single' ? quantity : 1) :
        priceConfig.usd.sale * (selectedBundle === 'single' ? quantity : 1);

    return {
        bundle: selectedBundle,
        variant: selectedVariant,
        quantity: selectedBundle === 'set' ? 1 : quantity,
        items: items,
        itemNames: itemNames,
        totalPrice: totalPrice
    };
}

/**
 * Show modal
 */
function showModal(type, orderDetails) {
    const modal = document.getElementById('purchaseModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');

    const isKorean = currentLang === 'ko';
    const priceStr = isKorean ?
        orderDetails.totalPrice.toLocaleString() + '원' :
        '$' + orderDetails.totalPrice.toFixed(2);

    if (type === 'buy') {
        if (isKorean) {
            modalTitle.textContent = '주문 완료!';
            modalMessage.textContent = `${orderDetails.itemNames}가 주문되었습니다!\n\n결제 금액: ${priceStr}\n배송 예정일: 내일 도착 보장`;
        } else {
            modalTitle.textContent = 'Order Complete!';
            modalMessage.textContent = `${orderDetails.itemNames} ordered!\n\nTotal: ${priceStr}\nDelivery: Guaranteed tomorrow`;
        }
    } else if (type === 'cart') {
        if (isKorean) {
            modalTitle.textContent = '장바구니 추가 완료!';
            modalMessage.textContent = `${orderDetails.itemNames}가\n장바구니에 담겼습니다!`;
        } else {
            modalTitle.textContent = 'Added to Cart!';
            modalMessage.textContent = `${orderDetails.itemNames}\nadded to cart!`;
        }
    }

    modal.classList.add('active');
}

/**
 * Close modal
 */
function closeModal() {
    document.getElementById('purchaseModal').classList.remove('active');
}

// Close modal on outside click
document.addEventListener('click', function(e) {
    const modal = document.getElementById('purchaseModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

/**
 * Save to recent view history
 */
function saveToRecentView() {
    const recentViews = JSON.parse(localStorage.getItem('recentViews') || '[]');
    const productData = {
        id: 'nfc-keyring',
        name: '동양 사상가 NFC 키링',
        price: 24500,
        timestamp: Date.now()
    };

    // Add to beginning, remove if already exists
    const filtered = recentViews.filter(item => item.id !== productData.id);
    filtered.unshift(productData);

    // Keep only last 10
    localStorage.setItem('recentViews', JSON.stringify(filtered.slice(0, 10)));
}

/**
 * Scroll-based sticky purchase bar
 */
let lastScrollY = 0;
window.addEventListener('scroll', function() {
    const stickyBar = document.querySelector('.sticky-purchase-bar');
    if (!stickyBar || window.innerWidth > 968) return;

    const currentScrollY = window.scrollY;
    const productSection = document.querySelector('.product-section');
    const productBottom = productSection.offsetTop + productSection.offsetHeight;

    // Show sticky bar when scrolled past product section
    if (currentScrollY > productBottom) {
        stickyBar.style.transform = 'translateY(0)';
    } else {
        stickyBar.style.transform = 'translateY(100%)';
    }

    lastScrollY = currentScrollY;
}, { passive: true });

/**
 * Performance monitoring
 */
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = performance.getEntriesByType('navigation')[0];
            if (perfData) {
                const loadTime = perfData.loadEventEnd - perfData.fetchStart;
                console.log('⚡ Purchase page load time:', (loadTime / 1000).toFixed(2), 's');

                // Track performance metrics (optional)
                if (window.gtag) {
                    gtag('event', 'timing_complete', {
                        name: 'load',
                        value: Math.round(loadTime),
                        event_category: 'Purchase Page'
                    });
                }
            }
        }, 0);
    });
}
