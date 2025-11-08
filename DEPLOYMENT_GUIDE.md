# 배포 가이드 (Deployment Guide)

## 📋 배포 전 체크리스트 (Pre-Deployment Checklist)

배포하기 전에 다음 항목들을 반드시 확인하세요:

### 1. 환경 변수 설정 (config.js)

`config.js` 파일을 열고 다음 값들을 실제 값으로 변경하세요:

```javascript
const CONFIG = {
    site: {
        domain: 'yourdomain.com',  // ✅ TODO: 실제 도메인으로 변경
        url: 'https://yourdomain.com',  // ✅ TODO: 실제 URL로 변경
        email: 'contact@yourdomain.com'  // ✅ TODO: 실제 이메일로 변경
    },
    social: {
        twitter: '@youraccount',  // ✅ TODO: 실제 트위터 계정으로 변경
        instagram: '@youraccount',  // ✅ TODO: 실제 인스타그램 계정으로 변경
        facebook: 'yourpage'  // ✅ TODO: 실제 페이스북 페이지로 변경
    },
    images: {
        ogImage: 'https://yourdomain.com/og-image.jpg',  // ✅ TODO: 실제 OG 이미지 URL
        twitterImage: 'https://yourdomain.com/twitter-image.jpg'  // ✅ TODO: 실제 트위터 이미지 URL
    }
};
```

### 2. 이미지 파일 준비

다음 이미지 파일들을 준비하세요:

- `favicon-32x32.png` - 32x32px 파비콘
- `favicon-16x16.png` - 16x16px 파비콘
- `apple-touch-icon.png` - 180x180px Apple 터치 아이콘
- `og-image.jpg` - 1200x630px Open Graph 이미지
- `twitter-image.jpg` - 1200x600px Twitter 카드 이미지
- `icon-192.png` - 192x192px PWA 아이콘
- `icon-512.png` - 512x512px PWA 아이콘

### 3. Meta 태그 확인

`index.html` 파일에서 다음 메타 태그들을 확인하고 수정하세요:

```html
<!-- Line 27-28: Open Graph URL -->
<meta property="og:url" content="https://yourdomain.com">
<meta property="og:image" content="https://yourdomain.com/og-image.jpg">

<!-- Line 39-42: Twitter Card -->
<meta name="twitter:image" content="https://yourdomain.com/twitter-image.jpg">
<meta name="twitter:site" content="@youraccount">
<meta name="twitter:creator" content="@youraccount">
```

### 4. Analytics 설정 (선택사항)

Google Analytics를 사용하는 경우:

1. `config.js`에서 `analytics.googleAnalyticsId` 값 설정
2. 필요시 `index.html`과 `purchase.html`에 GA4 스크립트 추가

## 🚀 배포 방법

### 방법 1: GitHub Pages

1. GitHub 저장소 생성
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/repository.git
git push -u origin main
```

2. GitHub Settings → Pages에서 배포 설정

### 방법 2: Netlify

1. Netlify에 프로젝트 드래그 앤 드롭
2. 자동 배포 완료

### 방법 3: Vercel

```bash
npm i -g vercel
vercel
```

### 방법 4: 전통적인 웹 호스팅

FTP를 통해 다음 파일들을 업로드:

```
/
├── index.html
├── purchase.html
├── config.js
├── script-modern.js
├── purchase.js
├── features.js
├── lazy-loading.js
├── sw.js
├── manifest.json
├── styles-combined.css
├── favicon-*.png
├── apple-touch-icon.png
├── og-image.jpg
├── twitter-image.jpg
├── icon-*.png
└── images/
    ├── confucius.jpg
    ├── laozi.jpg
    └── buddha.jpg
```

## 🔍 배포 후 확인사항

### 1. 기능 테스트

- [ ] 언어 전환 (한국어 ↔ English)
- [ ] NFC 태그 해시 네비게이션 (#confucius, #laozi, #buddha)
- [ ] 구매 페이지 번들 선택
- [ ] 수량 증감 버튼
- [ ] Service Worker 등록 확인 (개발자 도구 → Application)
- [ ] PWA 설치 프롬프트

### 2. SEO 검증

- [ ] [Google Rich Results Test](https://search.google.com/test/rich-results)에서 구조화된 데이터 확인
- [ ] [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)에서 OG 태그 확인
- [ ] [Twitter Card Validator](https://cards-dev.twitter.com/validator)에서 Twitter 카드 확인

### 3. 성능 테스트

- [ ] [Google PageSpeed Insights](https://pagespeed.web.dev/)에서 성능 점수 확인
- [ ] 목표: 모바일 90+, 데스크톱 95+

### 4. 접근성 테스트

- [ ] [WAVE](https://wave.webaim.org/) 접근성 검사
- [ ] 스크린 리더 테스트

## 📊 성능 최적화

이미 적용된 최적화:

✅ CSS 파일 통합 (5개 → 1개, HTTP 요청 80% 감소)
✅ Service Worker 캐싱
✅ Lazy loading
✅ requestAnimationFrame을 통한 스크롤 최적화
✅ 이미지 lazy loading

추가 최적화 (선택사항):

- 이미지 WebP 포맷 변환
- CSS/JS Minification
- CDN 사용

## 🐛 문제 해결

### Service Worker가 작동하지 않는 경우

1. HTTPS 환경에서만 작동합니다 (localhost 제외)
2. 브라우저 캐시 삭제 후 재시도
3. 개발자 도구 → Application → Service Workers에서 Unregister 후 재등록

### NFC 해시 네비게이션이 작동하지 않는 경우

1. `script-modern.js`가 로드되었는지 확인
2. 브라우저 콘솔에서 에러 확인
3. URL 해시가 정확한지 확인 (#confucius, #laozi, #buddha)

## 📞 지원

문제가 발생하면 다음을 확인하세요:

1. 브라우저 개발자 도구 콘솔에서 에러 메시지 확인
2. `FINAL_EVALUATION_REPORT.md` 참고
3. `OPTIMIZATION_REPORT.md` 참고

## 📝 버전 관리

현재 버전: 2.0

주요 변경사항:
- CSS 파일 통합
- Service Worker 추가
- 접근성 개선 (ARIA labels)
- 환경 변수 관리 시스템 (config.js)
