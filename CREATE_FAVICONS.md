# 파비콘 및 필수 이미지 생성 가이드

배포 전에 반드시 생성해야 할 이미지 파일들입니다.

## 🎨 필요한 이미지 목록

### 1. 파비콘 (Favicon)
```
favicon-32x32.png    - 32x32px
favicon-16x16.png    - 16x16px  
apple-touch-icon.png - 180x180px
```

### 2. 소셜 미디어 이미지
```
og-image.jpg         - 1200x630px (Open Graph)
twitter-image.jpg    - 1200x600px (Twitter Card)
```

### 3. PWA 아이콘
```
icon-192.png         - 192x192px
icon-512.png         - 512x512px
```

---

## 📋 생성 방법

### 방법 1: 온라인 도구 사용 (가장 쉬움)

#### Favicon 생성:
1. https://realfavicongenerator.net/ 접속
2. 로고 이미지 업로드 (최소 512x512px 권장)
3. 설정:
   - iOS: 180x180px
   - Android: 192x192px, 512x512px
   - Windows: 144x144px
   - macOS Safari: 32x32px, 16x16px
4. "Generate favicons" 클릭
5. 다운로드 후 프로젝트 루트에 복사

#### OG/Twitter 이미지 생성:
1. https://www.canva.com/ 접속
2. "사용자 지정 크기" 선택
   - OG 이미지: 1200 x 630px
   - Twitter 이미지: 1200 x 600px
3. 디자인 생성:
   - 배경: 그라데이션 (#8B2635 → #D4AF37)
   - 텍스트: "동양 사상가 NFC 키링"
   - 부제: "공자·노자·석가모니"
   - 아이콘: 孔老佛
4. PNG/JPG로 다운로드

---

### 방법 2: Photoshop/GIMP 사용

1. **새 파일 생성**
   - OG: 1200x630px, 72dpi
   - Twitter: 1200x600px, 72dpi

2. **디자인 구성**
   ```
   배경 그라데이션:
   - #8B2635 (좌상단)
   - #D4AF37 (우하단)
   
   텍스트:
   - 제목: "동양 사상가 NFC 키링"
   - Font: Noto Sans KR Bold, 72pt
   - Color: White
   
   아이콘:
   - 孔 老 佛
   - Font: Noto Serif KR, 96pt
   ```

3. **내보내기**
   - JPG, 품질 90%
   - 파일명: og-image.jpg, twitter-image.jpg

---

### 방법 3: 명령줄 도구 (ImageMagick)

```bash
# 파비콘 생성 (logo.png가 있다고 가정)
convert logo.png -resize 32x32 favicon-32x32.png
convert logo.png -resize 16x16 favicon-16x16.png
convert logo.png -resize 180x180 apple-touch-icon.png
convert logo.png -resize 192x192 icon-192.png
convert logo.png -resize 512x512 icon-512.png

# OG 이미지 생성 (템플릿)
convert -size 1200x630 \
  gradient:"#8B2635"-"#D4AF37" \
  -gravity center \
  -pointsize 72 -font NotoSansKR-Bold \
  -fill white -annotate +0-50 "동양 사상가 NFC 키링" \
  -pointsize 48 -annotate +0+50 "공자·노자·석가모니" \
  og-image.jpg

# Twitter 이미지 생성
convert -size 1200x600 \
  gradient:"#8B2635"-"#D4AF37" \
  -gravity center \
  -pointsize 72 -font NotoSansKR-Bold \
  -fill white -annotate +0-50 "동양 사상가 NFC 키링" \
  -pointsize 48 -annotate +0+50 "공자·노자·석가모니" \
  twitter-image.jpg
```

---

## ✅ 임시 Placeholder 생성 (테스트용)

배포 전 임시로 사용할 단색 placeholder 이미지:

```bash
# 빨간색 파비콘
convert -size 32x32 xc:"#8B2635" favicon-32x32.png
convert -size 16x16 xc:"#8B2635" favicon-16x16.png
convert -size 180x180 xc:"#8B2635" apple-touch-icon.png

# 빨간색 PWA 아이콘
convert -size 192x192 xc:"#8B2635" icon-192.png
convert -size 512x512 xc:"#8B2635" icon-512.png

# 빨간색 OG 이미지
convert -size 1200x630 xc:"#8B2635" \
  -gravity center \
  -pointsize 72 -fill white \
  -annotate +0+0 "NFC" \
  og-image.jpg

# 빨간색 Twitter 이미지
convert -size 1200x600 xc:"#8B2635" \
  -gravity center \
  -pointsize 72 -fill white \
  -annotate +0+0 "NFC" \
  twitter-image.jpg
```

---

## 📁 최종 파일 구조

```
/
├── favicon-32x32.png        ✅
├── favicon-16x16.png        ✅
├── apple-touch-icon.png     ✅
├── icon-192.png             ✅
├── icon-512.png             ✅
├── og-image.jpg             ✅
├── twitter-image.jpg        ✅
├── index.html
├── purchase.html
└── ...
```

---

## 🧪 검증 방법

### 1. 파비콘 확인
브라우저에서 `http://localhost:8000` 접속 후 탭 확인

### 2. OG 이미지 확인
- https://developers.facebook.com/tools/debug/
- URL 입력 후 "Scrape Again" 클릭

### 3. Twitter 카드 확인
- https://cards-dev.twitter.com/validator
- URL 입력 후 "Preview card" 클릭

### 4. PWA 아이콘 확인
- 개발자 도구 → Application → Manifest
- Icons 섹션에서 이미지 로드 확인

---

## ⚠️ 주의사항

1. **이미지 최적화**
   - JPG 품질: 80-90% (파일 크기 vs 품질)
   - PNG: TinyPNG로 압축 (https://tinypng.com/)

2. **파일명 정확히**
   - 대소문자 구분 (Linux 서버)
   - 하이픈 vs 언더스코어 주의

3. **색상 일관성**
   - 브랜드 색상 사용: #8B2635, #D4AF37
   - 대비 확인 (텍스트 가독성)

---

## 📞 도움이 필요하면

1. Canva: 가장 쉬운 방법
2. Figma: 디자이너용
3. RealFaviconGenerator: Favicon 전문

**예상 작업 시간**: 30분 ~ 1시간
