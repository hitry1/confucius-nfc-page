/**
 * Configuration file for environment variables and constants
 * Update these values before deploying to production
 */

const CONFIG = {
    // Site Information
    site: {
        domain: 'confucius-nfc.example.com',  // 배포 시 실제 도메인으로 변경
        url: 'https://confucius-nfc.example.com',  // 배포 시 실제 URL로 변경
        name: '동양 사상가 NFC 키링',
        email: 'contact@confucius-nfc.example.com'  // 배포 시 실제 이메일로 변경
    },

    // Social Media
    social: {
        twitter: '@ConfuciusNFC',  // 배포 시 실제 Twitter 계정으로 변경
        instagram: '@confucius_nfc',  // 배포 시 실제 Instagram 계정으로 변경
        facebook: 'ConfuciusNFCKeyring'  // 배포 시 실제 Facebook 페이지로 변경
    },

    // Images
    images: {
        ogImage: 'https://confucius-nfc.example.com/og-image.jpg',
        twitterImage: 'https://confucius-nfc.example.com/twitter-image.jpg',
        favicon32: 'favicon-32x32.png',
        favicon16: 'favicon-16x16.png',
        appleIcon: 'apple-touch-icon.png'
    },

    // Analytics (Optional)
    analytics: {
        googleAnalyticsId: '',  // TODO: Add GA4 ID if using
        facebookPixelId: ''  // TODO: Add Facebook Pixel ID if using
    },

    // Product Information
    product: {
        defaultPrice: 24500,
        defaultPriceUSD: 24.50,
        currency: {
            kr: 'KRW',
            us: 'USD'
        }
    },

    // API Endpoints (if needed in the future)
    api: {
        baseUrl: '/api',
        timeout: 10000
    }
};

// Make CONFIG available globally
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
