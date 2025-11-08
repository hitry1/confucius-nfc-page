# 새 로고 이미지 저장 안내

제공하신 새 로고 이미지를 다음 위치에 저장해주세요:

## 저장 위치
`/Users/icheongho/confucius-nfc-page/images/doheop-logo-new.png`

## 이미지 설명
- DOTEOP 브랜드 로고 (네이비 + 골드)
- 道接 한자 포함
- 베이지 배경

## 저장 후 작업
이미지를 저장하신 후, 다음 명령어로 가로로 길게 크롭하겠습니다:
```bash
sips --cropToHeightWidth 400 900 --cropOffset 312 62 /Users/icheongho/confucius-nfc-page/images/doheop-logo-new.png --out /Users/icheongho/confucius-nfc-page/images/doheop-logo.png
```

이 명령어는 이미지를 900x400 크기로 가로로 길게 크롭합니다.
