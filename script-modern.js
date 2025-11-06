/**
 * Modern Eastern Philosophy Collection
 * Multi-language support and character navigation
 */

// 현재 언어 상태
let currentLang = 'ko';

// DOM 로드 완료 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    initCharacterNavigation();
    initLanguageToggle();
    initScrollAnimations();
    detectURLParams();
    handleHashNavigation(); // NFC 태그 지원
    initScrollProgress();
    initPremiumEffects();
    init3DViewer();
    initScrollToTop();
    initMobileMenu();
    initShareButtons();
    initFloatingPurchase();
});

// Hash 변경 감지 (뒤로 가기/앞으로 가기 대응)
window.addEventListener('hashchange', handleHashNavigation);

/**
 * 인물 선택 네비게이션 초기화
 */
function initCharacterNavigation() {
    const navTabs = document.querySelectorAll('.nav-tab');
    const characterContents = document.querySelectorAll('.character-content');

    navTabs.forEach(function(tab) {
        tab.addEventListener('click', function(e) {
            e.preventDefault();

            // 모든 탭 비활성화
            navTabs.forEach(function(t) {
                t.classList.remove('active');
            });

            // 모든 콘텐츠 숨기기
            characterContents.forEach(function(content) {
                content.classList.remove('active');
            });

            // 클릭한 탭 활성화
            this.classList.add('active');

            // 해당 콘텐츠 표시
            const characterId = this.getAttribute('data-character');
            const targetContent = document.getElementById(characterId);

            if (targetContent) {
                targetContent.classList.add('active');

                // 부드럽게 페이지 상단으로 스크롤
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * 언어 전환 기능 초기화
 */
function initLanguageToggle() {
    const langToggle = document.getElementById('langToggle');

    if (langToggle) {
        langToggle.addEventListener('click', function() {
            // 언어 토글
            currentLang = currentLang === 'ko' ? 'en' : 'ko';

            // 모든 다국어 요소 업데이트
            updateLanguage(currentLang);

            // 버튼 텍스트 업데이트
            updateToggleButton(currentLang);
        });
    }
}

/**
 * 언어 업데이트
 */
function updateLanguage(lang) {
    // data-ko 또는 data-en 속성이 있는 모든 요소 찾기
    const elements = document.querySelectorAll('[data-ko][data-en]');

    elements.forEach(function(element) {
        const text = element.getAttribute('data-' + lang);
        if (text) {
            element.textContent = text;
        }
    });

    // HTML lang 속성 업데이트
    document.documentElement.lang = lang;

    // 로컬 스토리지에 저장
    localStorage.setItem('preferredLang', lang);
}

/**
 * 언어 전환 버튼 업데이트
 */
function updateToggleButton(lang) {
    const koBtn = document.querySelector('.lang-ko');
    const enBtn = document.querySelector('.lang-en');

    if (lang === 'en') {
        koBtn.classList.add('hidden');
        enBtn.classList.remove('hidden');
    } else {
        koBtn.classList.remove('hidden');
        enBtn.classList.add('hidden');
    }
}

/**
 * URL 파라미터로 초기 설정
 */
function detectURLParams() {
    const urlParams = new URLSearchParams(window.location.search);

    // 언어 설정
    const langParam = urlParams.get('lang');
    const savedLang = localStorage.getItem('preferredLang');

    if (langParam && (langParam === 'ko' || langParam === 'en')) {
        currentLang = langParam;
        updateLanguage(currentLang);
        updateToggleButton(currentLang);
    } else if (savedLang) {
        currentLang = savedLang;
        updateLanguage(currentLang);
        updateToggleButton(currentLang);
    }

    // 인물 설정 (Query Parameter)
    const characterParam = urlParams.get('character');
    if (characterParam) {
        const targetTab = document.querySelector(`[data-character="${characterParam}"]`);
        if (targetTab) {
            targetTab.click();
        }
    }

    // NFC 접속 추적
    const sourceParam = urlParams.get('source');
    if (sourceParam === 'nfc') {
        console.log('📱 NFC 태그를 통한 접속');
        // 분석 도구 이벤트 전송 가능
        // gtag('event', 'nfc_scan', { character: characterParam || 'confucius' });
    }
}

/**
 * Hash 기반 네비게이션 처리 (NFC 태그 지원)
 */
function handleHashNavigation() {
    const hash = window.location.hash.replace('#', '');

    if (!hash) {
        // Hash가 없으면 기본값(공자) 표시
        return;
    }

    // 유효한 인물인지 확인
    const validCharacters = ['confucius', 'laozi', 'buddha'];
    if (validCharacters.includes(hash)) {
        const targetTab = document.querySelector(`[data-character="${hash}"]`);
        if (targetTab && !targetTab.classList.contains('active')) {
            targetTab.click();
            console.log(`📱 Hash navigation: ${hash}`);
        }
    }
}

/**
 * 스크롤 애니메이션
 */
function initScrollAnimations() {
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // 애니메이션 적용할 요소들
        const animateElements = document.querySelectorAll('.card, .quote-box, .timeline');

        animateElements.forEach(function(element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });

        // 갤러리 아이템 애니메이션
        const galleryItems = document.querySelectorAll('.gallery-item');
        const galleryObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    galleryObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        galleryItems.forEach(function(item) {
            galleryObserver.observe(item);
        });
    }
}


/**
 * 스크롤 진행 표시기
 */
function initScrollProgress() {
    // HTML에 이미 존재하는 프로그레스 바 사용
    const progressBar = document.getElementById('scrollProgress');
    if (!progressBar) return;

    // 스크롤 이벤트 (throttle 적용으로 성능 개선)
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (window.scrollY / windowHeight) * 100;
                progressBar.style.width = scrolled + '%';
                ticking = false;
            });
            ticking = true;
        }
    });
}

/**
 * 프리미엄 효과 초기화
 */
function initPremiumEffects() {
    // 마우스 움직임에 따른 배경 parallax
    document.addEventListener('mousemove', function(e) {
        const moveX = (e.clientX / window.innerWidth - 0.5) * 20;
        const moveY = (e.clientY / window.innerHeight - 0.5) * 20;

        const heroSections = document.querySelectorAll('.hero-modern');
        heroSections.forEach(function(section) {
            const bg = section.querySelector('.hero-background');
            if (bg) {
                bg.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }
        });
    });

    // 요소가 화면에 들어올 때 카운터 애니메이션
    observeCounters();

    // 카드 호버 시 3D 틸트 효과
    init3DTilt();
}

/**
 * 숫자 카운터 애니메이션
 */
function observeCounters() {
    const counters = document.querySelectorAll('.timeline-year, .meta-item');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    entry.target.classList.add('counted');
                    entry.target.style.opacity = '0';
                    setTimeout(function() {
                        entry.target.style.transition = 'opacity 0.6s ease';
                        entry.target.style.opacity = '1';
                    }, 100);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(function(counter) {
            observer.observe(counter);
        });
    }
}

/**
 * 3D 틸트 효과
 */
function init3DTilt() {
    const cards = document.querySelectorAll('.philosophy-card, .quote-card-academic');

    cards.forEach(function(card) {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });

        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
}

/**
 * 성능 모니터링
 */
window.addEventListener('load', function() {
    if ('performance' in window) {
        setTimeout(function() {
            const perfData = performance.getEntriesByType('navigation')[0];
            if (perfData) {
                const loadTime = perfData.loadEventEnd - perfData.fetchStart;
                console.log('⚡ 페이지 로딩 시간:', (loadTime / 1000).toFixed(2), '초');

                if (loadTime < 2000) {
                    console.log('✅ 로딩 성능 우수 (2초 이내)');
                } else if (loadTime < 3000) {
                    console.log('⚠️ 로딩 성능 양호 (3초 이내)');
                } else {
                    console.warn('⚠️ 로딩 최적화 필요 (3초 초과)');
                }
            }
        }, 0);
    }
});

/**
 * 3D 뷰어 모달 초기화
 */
function init3DViewer() {
    const modal = document.getElementById('viewer3DModal');
    const closeBtn = document.getElementById('viewer3DClose');
    const titleEl = document.getElementById('viewer3DTitle');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // 갤러리 아이템 클릭 이벤트
    galleryItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const itemName = this.getAttribute('data-item');
            const title = this.querySelector('.gallery-item-title').textContent;

            // 모달 열기
            openViewer(title);
        });
    });

    // 닫기 버튼 클릭
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            closeViewer();
        });
    }

    // 모달 배경 클릭 시 닫기
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeViewer();
            }
        });
    }

    // ESC 키로 닫기
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeViewer();
        }
    });

    function openViewer(title) {
        if (modal && titleEl) {
            titleEl.textContent = title;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // 스크롤 방지
        }
    }

    function closeViewer() {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // 스크롤 복원
        }
    }
}

/**
 * 스크롤 탑 버튼 초기화
 */
function initScrollToTop() {
    const scrollBtn = document.getElementById('scrollToTop');

    if (!scrollBtn) return;

    // 스크롤 이벤트
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    // 클릭 이벤트
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * 모바일 메뉴 토글 초기화
 */
function initMobileMenu() {
    const menuToggle = document.getElementById('mobileMenuToggle');
    const navTabs = document.querySelector('.nav-tabs');

    if (!menuToggle || !navTabs) return;

    menuToggle.addEventListener('click', function() {
        navTabs.classList.toggle('mobile-open');

        // 아이콘 변경
        if (navTabs.classList.contains('mobile-open')) {
            menuToggle.textContent = '✕';
        } else {
            menuToggle.textContent = '☰';
        }
    });

    // 탭 클릭 시 메뉴 닫기
    const navTabElements = document.querySelectorAll('.nav-tab');
    navTabElements.forEach(function(tab) {
        tab.addEventListener('click', function() {
            navTabs.classList.remove('mobile-open');
            menuToggle.textContent = '☰';
        });
    });

    // 외부 클릭 시 메뉴 닫기
    document.addEventListener('click', function(e) {
        if (!menuToggle.contains(e.target) && !navTabs.contains(e.target)) {
            navTabs.classList.remove('mobile-open');
            menuToggle.textContent = '☰';
        }
    });
}

/**
 * SNS 공유 버튼 초기화
 */
function initShareButtons() {
    const shareTwitter = document.getElementById('shareTwitter');
    const shareFacebook = document.getElementById('shareFacebook');
    const shareKakao = document.getElementById('shareKakao');
    const copyLink = document.getElementById('copyLink');

    const currentURL = window.location.href;
    const pageTitle = document.title;

    // Twitter 공유
    if (shareTwitter) {
        shareTwitter.addEventListener('click', function() {
            const activeCharacter = document.querySelector('.character-content.active');
            const characterName = activeCharacter ? activeCharacter.id : 'confucius';
            let text;
            if (characterName === 'confucius') {
                text = '공자의 지혜를 만나보세요 - Eastern Philosophy Collection';
            } else if (characterName === 'yisunsin') {
                text = '이순신 장군의 이야기를 만나보세요 - Eastern Philosophy Collection';
            } else if (characterName === 'kimchi') {
                text = '한국의 김치 문화를 만나보세요 - Korean Cultural Heritage';
            } else {
                text = 'Eastern Philosophy Collection';
            }

            const twitterURL = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text) + '&url=' + encodeURIComponent(currentURL);
            window.open(twitterURL, '_blank', 'width=600,height=400');
        });
    }

    // Facebook 공유
    if (shareFacebook) {
        shareFacebook.addEventListener('click', function() {
            const facebookURL = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(currentURL);
            window.open(facebookURL, '_blank', 'width=600,height=400');
        });
    }

    // 카카오톡 공유
    if (shareKakao) {
        shareKakao.addEventListener('click', function() {
            // 카카오톡 공유는 SDK 필요, 현재는 링크 복사로 대체
            copyToClipboardWithMessage(currentURL, '링크가 복사되었습니다! 카카오톡에서 공유해보세요.');
        });
    }

    // 링크 복사
    if (copyLink) {
        copyLink.addEventListener('click', function() {
            copyToClipboardWithMessage(currentURL, '링크가 복사되었습니다!');
        });
    }
}

/**
 * 클립보드 복사 및 메시지 표시
 */
function copyToClipboardWithMessage(text, message) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function() {
            showToast(message);
        }).catch(function() {
            fallbackCopyToClipboard(text, message);
        });
    } else {
        fallbackCopyToClipboard(text, message);
    }
}

/**
 * 구형 브라우저용 클립보드 복사
 */
function fallbackCopyToClipboard(text, message) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    tempInput.style.position = 'fixed';
    tempInput.style.opacity = '0';
    document.body.appendChild(tempInput);
    tempInput.select();

    try {
        document.execCommand('copy');
        showToast(message);
    } catch (err) {
        showToast('복사에 실패했습니다.');
    }

    document.body.removeChild(tempInput);
}

/**
 * 토스트 메시지 표시
 */
function showToast(message) {
    // 기존 토스트 제거
    const existingToast = document.querySelector('.toast-message');
    if (existingToast) {
        existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.textContent = message;
    toast.style.cssText = 'position: fixed; bottom: 100px; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.8); color: white; padding: 1rem 2rem; border-radius: 8px; z-index: 10000; font-size: 0.9rem; animation: fadeInOut 2s ease;';

    document.body.appendChild(toast);

    setTimeout(function() {
        toast.remove();
    }, 2000);
}

// 토스트 애니메이션 스타일 추가
if (!document.querySelector('#toast-animation-style')) {
    const style = document.createElement('style');
    style.id = 'toast-animation-style';
    style.textContent = '@keyframes fadeInOut { 0% { opacity: 0; transform: translateX(-50%) translateY(20px); } 20% { opacity: 1; transform: translateX(-50%) translateY(0); } 80% { opacity: 1; transform: translateX(-50%) translateY(0); } 100% { opacity: 0; transform: translateX(-50%) translateY(-20px); } }';
    document.head.appendChild(style);
}

/**
 * 플로팅 구매 버튼 초기화
 */
function initFloatingPurchase() {
    const floatingBtn = document.getElementById('floatingPurchase');

    if (!floatingBtn) return;

    window.addEventListener('scroll', function() {
        // CTA 섹션 이후에만 표시
        const ctaSections = document.querySelectorAll('.cta-section');
        let showButton = false;

        ctaSections.forEach(function(section) {
            const rect = section.getBoundingClientRect();
            if (rect.bottom < 0) {
                showButton = true;
            }
        });

        if (showButton && window.scrollY > 800) {
            floatingBtn.classList.add('visible');
        } else {
            floatingBtn.classList.remove('visible');
        }
    });
}

/**
 * Register Service Worker for PWA support with update detection
 */
if ('serviceWorker' in navigator) {
    let refreshing = false;

    // Service Worker가 제어권을 가져갈 때 페이지 새로고침
    navigator.serviceWorker.addEventListener('controllerchange', function() {
        if (refreshing) return;
        refreshing = true;
        window.location.reload();
    });

    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('✅ Service Worker registered successfully:', registration.scope);

                // 업데이트 확인
                registration.addEventListener('updatefound', function() {
                    const newWorker = registration.installing;

                    newWorker.addEventListener('statechange', function() {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            // 새 버전 발견 - 사용자에게 알림 표시
                            showUpdateNotification(newWorker);
                        }
                    });
                });

                // 주기적으로 업데이트 확인 (1시간마다)
                setInterval(function() {
                    registration.update();
                }, 3600000);
            })
            .catch(function(error) {
                console.log('❌ Service Worker registration failed:', error);
            });
    });
}

/**
 * 업데이트 알림 표시 및 처리
 */
function showUpdateNotification(worker) {
    // 업데이트 알림 생성
    const notification = document.createElement('div');
    notification.id = 'sw-update-notification';
    notification.innerHTML = `
        <div style="
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px 25px;
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.3);
            z-index: 10000;
            max-width: 350px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            animation: slideInUp 0.3s ease-out;
        ">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                <span style="font-size: 24px;">🎉</span>
                <span style="font-weight: 600; font-size: 16px;">새 버전이 있습니다!</span>
            </div>
            <p style="margin: 0 0 15px 0; font-size: 14px; opacity: 0.95; line-height: 1.5;">
                사이트가 업데이트되었습니다. 최신 버전을 사용하려면 새로고침하세요.
            </p>
            <div style="display: flex; gap: 10px;">
                <button id="sw-update-btn" style="
                    flex: 1;
                    background: white;
                    color: #667eea;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 14px;
                    cursor: pointer;
                    transition: transform 0.2s;
                ">
                    업데이트
                </button>
                <button id="sw-dismiss-btn" style="
                    background: rgba(255,255,255,0.2);
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 14px;
                    cursor: pointer;
                    transition: background 0.2s;
                ">
                    나중에
                </button>
            </div>
        </div>
        <style>
            @keyframes slideInUp {
                from {
                    transform: translateY(100px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
            #sw-update-btn:hover {
                transform: scale(1.05);
            }
            #sw-dismiss-btn:hover {
                background: rgba(255,255,255,0.3);
            }
        </style>
    `;

    document.body.appendChild(notification);

    // 업데이트 버튼 클릭 이벤트
    document.getElementById('sw-update-btn').addEventListener('click', function() {
        // 새 Service Worker에게 skipWaiting 메시지 전송
        worker.postMessage({ type: 'SKIP_WAITING' });
    });

    // 나중에 버튼 클릭 이벤트
    document.getElementById('sw-dismiss-btn').addEventListener('click', function() {
        notification.remove();
    });
}
