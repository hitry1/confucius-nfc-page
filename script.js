/**
 * 공자 NFC 연동 페이지 - 인터랙션 스크립트
 * 모바일 최적화 및 성능을 고려한 경량 JavaScript
 */

// 페이지 로드 완료 시 실행
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer를 통한 스크롤 애니메이션
    initScrollAnimations();

    // 성능 모니터링 (개발용)
    logPerformanceMetrics();
});

/**
 * 스크롤 시 요소가 화면에 나타날 때 애니메이션 실행
 */
function initScrollAnimations() {
    // Intersection Observer를 지원하는지 확인
    if ('IntersectionObserver' in window) {
        const fadeElements = document.querySelectorAll('.fade-in');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1 // 요소의 10%가 보이면 트리거
        };

        const fadeInObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    // 요소가 화면에 나타나면 애니메이션 시작
                    entry.target.style.opacity = '1';

                    // 한 번 애니메이션이 실행되면 관찰 중지 (성능 최적화)
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // 모든 fade-in 요소 관찰 시작
        fadeElements.forEach(function(element) {
            fadeInObserver.observe(element);
        });
    } else {
        // Intersection Observer를 지원하지 않는 구형 브라우저는 바로 표시
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(function(element) {
            element.style.opacity = '1';
        });
    }
}

/**
 * 업적 카드 호버 효과 (터치 디바이스용)
 */
function initAchievementInteractions() {
    const achievementItems = document.querySelectorAll('.achievement-item');

    achievementItems.forEach(function(item) {
        // 터치 디바이스에서 탭 시 간단한 피드백
        item.addEventListener('touchstart', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });

        item.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
}

// 터치 디바이스 확인 후 인터랙션 초기화
if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    document.addEventListener('DOMContentLoaded', initAchievementInteractions);
}

/**
 * 성능 메트릭 로깅 (개발용)
 * 3초 이내 로딩을 목표로 함
 */
function logPerformanceMetrics() {
    if ('performance' in window && 'getEntriesByType' in performance) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                const perfData = performance.getEntriesByType('navigation')[0];

                if (perfData) {
                    const loadTime = perfData.loadEventEnd - perfData.fetchStart;
                    const domContentLoaded = perfData.domContentLoadedEventEnd - perfData.fetchStart;

                    console.log('=== 페이지 성능 메트릭 ===');
                    console.log('전체 로딩 시간:', (loadTime / 1000).toFixed(2), '초');
                    console.log('DOM 준비 시간:', (domContentLoaded / 1000).toFixed(2), '초');

                    // 목표: 3초 이내 로딩
                    if (loadTime < 3000) {
                        console.log('✅ 성능 목표 달성 (3초 이내)');
                    } else {
                        console.warn('⚠️ 성능 최적화 필요 (3초 초과)');
                    }
                }
            }, 0);
        });
    }
}

/**
 * 부드러운 스크롤 (선택적 기능)
 * 페이지 내 앵커 링크가 있을 경우 사용
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * NFC 태그 정보 추적 (선택적)
 * URL 파라미터를 통해 NFC 태그 스캔 추적 가능
 */
function trackNFCAccess() {
    const urlParams = new URLSearchParams(window.location.search);
    const isFromNFC = urlParams.get('source') === 'nfc';

    if (isFromNFC) {
        console.log('📱 NFC 태그를 통한 접속');

        // 필요시 분석 도구에 이벤트 전송
        // 예: gtag('event', 'nfc_scan', { item: 'confucius_keyring' });
    }
}

// 초기화
trackNFCAccess();
