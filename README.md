# 공자 (孔子) NFC 연동 웹페이지

동양 문화 굿즈 '공자' 키링에 연동된 모바일 최적화 웹페이지입니다.

## 📱 프로젝트 개요

NFC 태그가 내장된 '공자' 키링 굿즈를 스마트폰으로 태그하면 이 페이지로 연결됩니다.
중국 전통 문화의 분위기를 살린 디자인과 함께 공자의 명언, 업적, 생애를 간결하게 소개합니다.

## ✨ 주요 기능

- **모바일 퍼스트 디자인**: 스마트폰 화면에 완벽하게 최적화
- **중국풍 UI/UX**: 전통 색상(적색, 금색)과 화선지 질감 배경
- **빠른 로딩**: 정적 페이지로 3초 이내 로딩 목표
- **스크롤 애니메이션**: 부드러운 fade-in 효과
- **반응형 레이아웃**: 모바일, 태블릿, 데스크톱 모두 지원

## 🎨 디자인 특징

### 컬러 팔레트
- **주조색**: 깊은 빨간색 (#8B2635), 어두운 갈색 (#3E2723)
- **강조색**: 금색 (#D4AF37), 옥색 (#3E5F4F)
- **배경색**: 미색 (#F5F1E8), 베이지 (#EAE3D2)

### 타이포그래피
- **폰트**: Noto Serif KR (Google Fonts)
- **스타일**: 전통적인 명조체로 고풍스러운 분위기 연출

## 📂 파일 구조

```
confucius-nfc-page/
├── index.html       # 메인 HTML 파일
├── styles.css       # 전체 스타일시트
├── script.js        # 인터랙션 스크립트
└── README.md        # 프로젝트 문서
```

## 🚀 로컬 실행 방법

### 1. 파일 다운로드
```bash
# 프로젝트 폴더로 이동
cd confucius-nfc-page
```

### 2. 브라우저에서 열기
`index.html` 파일을 더블클릭하거나, 간단한 로컬 서버 실행:

```bash
# Python 3 사용
python3 -m http.server 8000

# Node.js npx 사용
npx serve
```

브라우저에서 `http://localhost:8000` 접속

## 🌐 배포 방법

### GitHub Pages (추천)

1. **GitHub 저장소 생성**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: 공자 NFC 페이지"
   git branch -M main
   git remote add origin https://github.com/your-username/confucius-nfc.git
   git push -u origin main
   ```

2. **GitHub Pages 활성화**
   - GitHub 저장소 → Settings → Pages
   - Source: `main` 브랜치 선택
   - 저장 후 `https://your-username.github.io/confucius-nfc/` 에서 접속 가능

### Netlify (드래그 앤 드롭)

1. [Netlify](https://www.netlify.com) 접속
2. `confucius-nfc-page` 폴더를 드래그 앤 드롭
3. 자동으로 URL 생성 (예: `https://confucius-nfc.netlify.app`)

### Vercel

```bash
# Vercel CLI 설치
npm install -g vercel

# 프로젝트 배포
vercel
```

## 📱 NFC 태그 설정

### NFC 태그에 URL 쓰기

1. **NFC 쓰기 앱 다운로드**
   - iOS: NFC Tools
   - Android: NFC Tools

2. **URL 레코드 작성**
   - Record Type: `URL`
   - URL: `https://your-domain.com/index.html?source=nfc`
   - `?source=nfc` 파라미터로 NFC 접속 추적 가능

3. **태그에 쓰기**
   - 스마트폰을 NFC 태그에 태그
   - Write 버튼 클릭

## 🎯 성능 최적화

### 달성 목표
- ✅ 3초 이내 페이지 로딩
- ✅ 모바일 화면 완벽 대응
- ✅ 경량 JavaScript (외부 라이브러리 없음)

### 최적화 기법
- Google Fonts의 `display=swap` 옵션
- Intersection Observer로 스크롤 애니메이션 최적화
- CSS 그라디언트/패턴으로 이미지 대체
- 불필요한 외부 스크립트 제거

## 🔧 커스터마이징

### 색상 변경
`styles.css`의 `:root` 섹션에서 CSS 변수 수정:

```css
:root {
    --primary-red: #8B2635;    /* 주 빨간색 */
    --gold: #D4AF37;            /* 금색 */
    --ivory: #F5F1E8;           /* 배경색 */
}
```

### 콘텐츠 수정
`index.html`에서 명언, 업적, 생애 내용 직접 수정 가능

### 다른 인물 적용
이 템플릿을 다른 동양 철학자(노자, 맹자 등)에도 적용 가능:
- HTML의 텍스트 콘텐츠 변경
- CSS 색상 팔레트 조정
- 한자 문자 업데이트

## 📊 브라우저 지원

- ✅ Chrome (Android/iOS)
- ✅ Safari (iOS)
- ✅ Samsung Internet
- ✅ Firefox Mobile
- ✅ Edge Mobile

## 📝 라이선스

이 프로젝트는 자유롭게 사용, 수정, 배포할 수 있습니다.

## 🙏 크레딧

- **디자인 영감**: 중국 전통 서예 및 인장 문화
- **폰트**: Google Fonts - Noto Serif KR
- **개발**: 동양 문화 굿즈 프로젝트

---

**굿즈 구매 문의**: [브랜드명 또는 이메일 주소]
