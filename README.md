# 동양 사상가 NFC 키링 웹사이트

> 공자, 노자, 석가모니의 지혜를 담은 NFC 키링 공식 웹사이트

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-2.0-green.svg)](CHANGELOG.md)
[![Status](https://img.shields.io/badge/status-production--ready-brightgreen.svg)]()

---

## 📖 프로젝트 소개

동양 3대 사상가(공자, 노자, 석가모니)의 명언과 철학을 NFC 태그를 통해 쉽게 접근할 수 있는 웹 플랫폼입니다.

### 주요 기능

- 📱 **NFC 태그 지원**: 스마트폰으로 태그하면 해당 사상가 페이지로 자동 이동
- 🌏 **이중 언어**: 한국어/English 지원
- 📚 **학술적 콘텐츠**: 검증된 출처와 참고문헌 완비
- 🛒 **통합 구매 페이지**: 단품/세트 구매 옵션
- 📴 **PWA 지원**: 오프라인에서도 사용 가능
- ♿ **접근성**: WCAG 2.1 AA 수준 준수

---

## 🚀 빠른 시작

### 로컬 개발 환경

```bash
# 1. 저장소 클론
git clone https://github.com/yourusername/confucius-nfc-page.git
cd confucius-nfc-page

# 2. 로컬 서버 실행 (Python)
python3 -m http.server 8000

# 또는 Node.js
npx http-server -p 8000

# 3. 브라우저에서 접속
open http://localhost:8000
```

---

## ⚠️ 배포 전 필수 작업

### 1. 환경 변수 설정 (`config.js`)

```javascript
// config.js 파일을 열어 다음 값들을 변경하세요:

const CONFIG = {
    site: {
        domain: 'your-actual-domain.com',        // ⚠️ 변경 필수
        url: 'https://your-actual-domain.com',   // ⚠️ 변경 필수
        email: 'contact@your-domain.com'         // ⚠️ 변경 필수
    },
    social: {
        twitter: '@your_account',                 // ⚠️ 변경 필수
        instagram: '@your_account',               // ⚠️ 변경 필수
        facebook: 'yourpage'                      // ⚠️ 변경 필수
    }
};
```

### 2. index.html 업데이트

다음 라인들의 `yourdomain.com`을 실제 도메인으로 변경:
- Line 27-28: Open Graph URL, 이미지
- Line 39-42: Twitter Card
- Line 54, 61, 83: Schema.org URLs
- Line 93: Canonical URL

### 3. 필수 이미지 생성

아래 이미지 파일들을 생성하세요 (자세한 방법은 `CREATE_FAVICONS.md` 참조):

```
✅ favicon-32x32.png (32x32px)
✅ favicon-16x16.png (16x16px)
✅ apple-touch-icon.png (180x180px)
✅ og-image.jpg (1200x630px)
✅ twitter-image.jpg (1200x600px)
✅ icon-192.png (192x192px)
✅ icon-512.png (512x512px)
```

**간편한 생성 방법:**
- Favicon: https://realfavicongenerator.net/
- OG/Twitter: https://www.canva.com/

---

## 📁 프로젝트 구조

```
confucius-nfc-page/
├── index.html                    # 메인 페이지
├── purchase.html                 # 구매 페이지
├── 404.html                      # 에러 페이지
│
├── config.js                     # 환경 변수 ⚠️ 수정 필수
├── script-modern.js              # 메인 JavaScript
├── purchase.js                   # 구매 페이지 JavaScript
├── features.js                   # 기능 모듈
├── lazy-loading.js               # 이미지 지연 로딩
├── sw.js                         # Service Worker (PWA)
│
├── styles-combined.css           # 통합 CSS
├── manifest.json                 # PWA 설정
├── robots.txt                    # SEO 크롤러 제어
├── sitemap.xml                   # 사이트맵
│
├── images/                       # 이미지 폴더
│   ├── confucius.jpg
│   ├── laozi.jpg
│   └── buddha.jpg
│
├── backups/                      # 백업 파일
│   ├── *.html (백업 HTML)
│   └── *.css (이전 CSS)
│
└── docs/                         # 문서
    ├── DEPLOYMENT_GUIDE.md       # 배포 가이드
    ├── STRICT_EVALUATION_REPORT.md  # 평가 보고서
    ├── CREATE_FAVICONS.md        # 파비콘 생성 가이드
    └── OPTIMIZATION_REPORT.md    # 최적화 보고서
```

---

## 🎯 주요 기능 상세

### NFC 태그 해시 네비게이션

각 NFC 태그는 고유한 URL 해시를 가집니다:

```
공자: https://yourdomain.com/#confucius
노자: https://yourdomain.com/#laozi
석가모니: https://yourdomain.com/#buddha
```

### PWA (Progressive Web App)

- 홈 화면 추가 가능
- 오프라인 지원
- 빠른 로딩 (Service Worker 캐싱)

### 성능 최적화

- ✅ CSS 파일 통합 (5개 → 1개, HTTP 요청 80% 감소)
- ✅ 이미지 lazy loading
- ✅ requestAnimationFrame 스크롤 최적화
- ✅ Service Worker 캐싱

### 접근성

- ✅ ARIA labels 완비
- ✅ 시맨틱 HTML
- ✅ 키보드 네비게이션
- ✅ 스크린 리더 지원

---

## 🌐 배포 방법

### GitHub Pages

```bash
git add .
git commit -m "Initial deployment"
git push origin main

# GitHub Settings → Pages에서 브랜치 선택
```

### Netlify

1. https://app.netlify.com/ 접속
2. "New site from Git" 클릭
3. 저장소 연결
4. 자동 배포

### Vercel

```bash
npm i -g vercel
vercel
```

### 전통적인 FTP 호스팅

필요한 파일만 업로드:
```
✅ index.html, purchase.html, 404.html
✅ *.js, *.css
✅ manifest.json, sw.js
✅ robots.txt, sitemap.xml
✅ images/ 폴더
✅ 파비콘 파일들
```

---

## 📊 성능 지표

### Lighthouse 점수 (예상)

```
Performance:  85-90 / 100
Accessibility: 92-96 / 100
Best Practices: 90-95 / 100
SEO: 95-100 / 100
```

### 파일 크기

```
index.html:        112 KB
purchase.html:      60 KB
styles-combined:    64 KB
script-modern.js:   20 KB
총 이미지:          92 KB (3개)
```

### 로딩 속도 (예상)

```
First Contentful Paint: 1.5s
Largest Contentful Paint: 2.2s
Time to Interactive: 2.8s
```

---

## 🔧 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, CSS Variables
- **JavaScript**: ES6+, Service Worker API
- **PWA**: manifest.json, Service Worker
- **SEO**: Open Graph, Twitter Card, Schema.org

---

## 📚 문서

- [배포 가이드](DEPLOYMENT_GUIDE.md) - 상세한 배포 방법
- [평가 보고서](STRICT_EVALUATION_REPORT.md) - 엄격한 품질 평가
- [파비콘 생성](CREATE_FAVICONS.md) - 이미지 생성 방법
- [최적화 보고서](OPTIMIZATION_REPORT.md) - 성능 개선 내역

---

## ✅ 배포 체크리스트

### 필수 (Priority 1)

- [ ] `config.js`의 모든 placeholder 값 변경
- [ ] `index.html`의 모든 `yourdomain.com` 변경
- [ ] 파비콘 7개 파일 생성
- [ ] OG/Twitter 이미지 생성

### 권장 (Priority 2)

- [ ] Google Analytics 설정 (선택)
- [ ] Facebook Pixel 설정 (선택)
- [ ] Favicon 브라우저 테스트
- [ ] OG 이미지 검증 (Facebook Debugger)
- [ ] Twitter Card 검증

### 선택 (Priority 3)

- [ ] HTML/CSS/JS Minification
- [ ] Gzip/Brotli 압축 설정
- [ ] CDN 설정
- [ ] SSL 인증서 설정

---

## 🐛 문제 해결

### Service Worker가 작동하지 않음

```bash
# 해결: HTTPS 환경 필요 (localhost 제외)
# 브라우저 캐시 삭제 후 재시도
```

### NFC 해시 네비게이션 안됨

```bash
# 해결: script-modern.js 로드 확인
# URL 형식 확인: /#confucius (슬래시 필수)
```

### PWA 설치 프롬프트 안뜸

```bash
# 해결:
# 1. manifest.json 확인
# 2. 아이콘 파일 존재 확인
# 3. HTTPS 환경 확인
```

---

## 📝 라이센스

MIT License - 자유롭게 사용, 수정, 배포 가능

---

## 👥 기여

이슈 제보 및 Pull Request 환영합니다!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📞 지원

- **문서**: [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
- **이슈**: [GitHub Issues](https://github.com/yourusername/confucius-nfc-page/issues)
- **이메일**: contact@yourdomain.com

---

## 🎉 버전 히스토리

### v2.0 (2025-11-04)
- ✅ CSS 파일 통합 (5→1)
- ✅ Service Worker PWA 지원
- ✅ 접근성 개선 (ARIA)
- ✅ 환경 변수 관리 시스템
- ✅ robots.txt, sitemap.xml 추가

### v1.0 (2025-10-22)
- 초기 버전 릴리스
- 3대 사상가 콘텐츠
- NFC 해시 네비게이션
- 구매 페이지

---

**제작**: Claude Code  
**최종 업데이트**: 2025-11-04  
**상태**: Production Ready (배포 전 체크리스트 완료 시)

---

**⚠️ 중요**: 배포하기 전에 반드시 [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)의 체크리스트를 완료하세요!
