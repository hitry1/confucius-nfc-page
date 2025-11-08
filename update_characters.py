#!/usr/bin/env python3
"""
동양 사상가 3인 (공자, 노자, 석가모니)로 콘텐츠 교체 스크립트
"""

# HTML 파일 읽기
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. yisunsin을 laozi로 교체
content = content.replace('id="yisunsin"', 'id="laozi"')
content = content.replace('data-character="yisunsin"', 'data-character="laozi"')
content = content.replace('hero-yisunsin', 'hero-laozi')
content = content.replace('class="character-content">\n        <!-- 히어로 섹션 -->\n        <header class="hero-modern hero-laozi">', 'class="character-content">\n        <!-- 히어로 섹션 -->\n        <header class="hero-modern hero-laozi">')

# 2. kimchi를 buddha로 교체
content = content.replace('id="kimchi"', 'id="buddha"')
content = content.replace('data-character="kimchi"', 'data-character="buddha"')
content = content.replace('hero-kimchi', 'hero-buddha')

# 백업 저장
with open('index-backup-before-update.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ ID 변경 완료")
print("📝 백업 파일 생성: index-backup-before-update.html")
print("\n다음 단계:")
print("1. 노자 콘텐츠 작성")
print("2. 석가모니 콘텐츠 작성")
print("3. 이미지 파일 준비")
