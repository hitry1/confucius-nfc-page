# NFC 키링 설정 가이드

## 📱 NFC 태그별 URL 설정

각 NFC 키링에 다음 URL을 입력하여 해당 인물의 페이지로 바로 이동하도록 설정합니다.

### 1️⃣ 공자 (Confucius) 키링
```
http://yourwebsite.com/index.html#confucius
```
또는 로컬 테스트:
```
http://localhost:8080/index.html#confucius
```

### 2️⃣ 노자 (Laozi) 키링
```
http://yourwebsite.com/index.html#laozi
```
또는 로컬 테스트:
```
http://localhost:8080/index.html#laozi
```

### 3️⃣ 석가모니 (Buddha) 키링
```
http://yourwebsite.com/index.html#buddha
```
또는 로컬 테스트:
```
http://localhost:8080/index.html#buddha
```

⚠️ **중요**: URL에 반드시 `index.html`을 포함하고 `#` 해시태그를 정확히 입력해야 합니다.
`/`로 끝나는 URL이나 해시가 없는 URL은 항상 공자 페이지가 먼저 표시됩니다.

---

## 🛠️ NFC 태그 설정 방법

### 방법 1: NFC Tools 앱 사용 (권장)

#### iOS (iPhone)
1. **App Store**에서 **"NFC Tools"** 앱 다운로드
2. 앱 실행 → **"쓰기"** 탭 선택
3. **"레코드 추가"** → **"URL/URI"** 선택
4. 위의 URL 중 하나 입력 (예: `http://yourwebsite.com/#confucius`)
5. **"쓰기"** 버튼 누르고 NFC 태그에 iPhone 접촉
6. 성공 메시지 확인

#### Android
1. **Google Play**에서 **"NFC Tools"** 앱 다운로드
2. 앱 실행 → **"쓰기"** 탭 선택
3. **"레코드 추가"** → **"URL/URI"** 선택
4. 위의 URL 중 하나 입력 (예: `http://yourwebsite.com/#laozi`)
5. **"쓰기"** 버튼 누르고 NFC 태그에 스마트폰 접촉
6. 성공 메시지 확인

---

### 방법 2: 무료 온라인 NFC 인코더 사용

1. 다음 웹사이트 방문:
   - https://nfc.rocks
   - https://tagwriter.app

2. **"URL/URI"** 옵션 선택

3. URL 입력 (예: `http://yourwebsite.com/index.html#buddha`)
   - ⚠️ **중요**: `index.html#buddha` 부분을 정확히 입력해야 합니다!

4. NFC 지원 스마트폰으로 태그에 접촉하여 쓰기

---

## 🔍 NFC 태그 테스트 방법

### 설정 후 확인
1. NFC 태그에 스마트폰을 가까이 댑니다
2. 자동으로 브라우저가 열리며 해당 인물 페이지로 이동
3. 정확한 인물 페이지가 표시되는지 확인

### 로컬 테스트 (개발 단계)
현재 로컬 서버(`http://localhost:8080`)에서 테스트 중이라면:
- 공자: http://localhost:8080/index.html#confucius
- 노자: http://localhost:8080/index.html#laozi
- 석가모니: http://localhost:8080/index.html#buddha

각 URL을 브라우저에서 열어 올바른 섹션으로 이동하는지 확인하세요.

⚠️ **주의**: `http://localhost:8080/#confucius` (슬래시로 끝나는 형태)는 작동하지 않습니다!
반드시 `index.html#confucius` 형태로 입력하세요.

---

## 🌐 실제 배포 시 URL 변경

웹사이트를 실제 도메인에 배포한 후에는 다음과 같이 URL을 업데이트해야 합니다:

### 예시: Vercel 배포
```
https://your-project.vercel.app/index.html#confucius
https://your-project.vercel.app/index.html#laozi
https://your-project.vercel.app/index.html#buddha
```

또는 (Vercel이 자동으로 index.html을 처리하는 경우):
```
https://your-project.vercel.app/#confucius
https://your-project.vercel.app/#laozi
https://your-project.vercel.app/#buddha
```

### 예시: GitHub Pages 배포
```
https://yourusername.github.io/confucius-nfc-page/index.html#confucius
https://yourusername.github.io/confucius-nfc-page/index.html#laozi
https://yourusername.github.io/confucius-nfc-page/index.html#buddha
```

### 예시: 커스텀 도메인
```
https://dongyang-munhwasa.com/index.html#confucius
https://dongyang-munhwasa.com/index.html#laozi
https://dongyang-munhwasa.com/index.html#buddha
```

💡 **팁**: 배포 후 먼저 브라우저에서 URL을 직접 테스트하여 올바르게 동작하는지 확인한 후 NFC 태그에 쓰세요!

---

## 📋 NFC 태그 스펙 권장사항

### 권장 NFC 칩
- **NTAG215** (504 bytes) - 충분한 용량, 가격 저렴
- **NTAG216** (888 bytes) - 더 많은 데이터 저장 가능
- **NTAG213** (144 bytes) - URL만 저장하면 충분

### 필요한 용량
- 단순 URL만 저장: 최소 100 bytes
- 현재 설정: ~40-50 bytes (URL 길이에 따라)

---

## 🔐 보안 및 잠금 설정 (선택사항)

### NFC 태그 쓰기 보호
설정 후 태그를 **읽기 전용**으로 잠그면 다른 사람이 URL을 변경할 수 없습니다.

**NFC Tools 앱 사용:**
1. **"기타"** 탭 선택
2. **"태그 잠금"** 선택
3. 비밀번호 설정 (선택사항)
4. 잠금 실행

⚠️ **주의**: 잠금 후에는 URL 변경이 불가능하므로, 최종 배포 URL이 확정된 후에만 잠그세요!

---

## 📱 스마트폰 NFC 설정

### iPhone (iOS 13 이상)
- 자동으로 NFC 활성화됨
- 별도 설정 불필요
- iPhone 상단을 NFC 태그에 접촉

### Android
1. **설정** → **연결된 기기** → **연결 환경설정**
2. **NFC** 켜기
3. 스마트폰 뒷면을 NFC 태그에 접촉

---

## ❓ 문제 해결

### NFC 태그가 인식되지 않아요
- 스마트폰의 NFC가 활성화되어 있는지 확인
- 스마트폰 케이스가 너무 두꺼우면 제거
- 태그와 스마트폰을 더 가까이 접촉

### 다른 페이지로 이동해요
- URL이 올바르게 설정되었는지 확인
- 해시태그(#) 빠뜨리지 않았는지 확인
- 태그를 다시 포맷하고 재설정

### 웹페이지가 열리지 않아요
- 인터넷 연결 확인
- URL 형식이 올바른지 확인 (`http://` 또는 `https://` 포함)
- 로컬 테스트라면 서버가 실행 중인지 확인

---

## 📞 기술 지원

문제가 계속되면 다음을 확인하세요:
- NFC 태그 제조사 사양
- 스마트폰 NFC 호환성
- 서버/도메인 상태

---

## 🎯 빠른 설정 체크리스트

- [ ] NFC Tools 앱 설치
- [ ] 각 키링에 맞는 URL 확인
- [ ] 공자 키링: `#confucius` URL 쓰기
- [ ] 노자 키링: `#laozi` URL 쓰기
- [ ] 석가모니 키링: `#buddha` URL 쓰기
- [ ] 각 태그 테스트 완료
- [ ] (선택) 태그 잠금 설정

---

**제작:** 동양문화사
**버전:** 1.0
**최종 업데이트:** 2025-11-03
