#!/usr/bin/env python3
"""
노자와 석가모니 콘텐츠 생성 스크립트
"""

# HTML 파일 읽기
with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# 공자 섹션 유지 (1-435줄)
confucius_section = ''.join(lines[:435])

# 노자 섹션 생성
laozi_section = '''
    <!-- 노자 콘텐츠 -->
    <div id="laozi" class="character-content">
        <!-- 히어로 섹션 -->
        <header class="hero-modern hero-laozi">
            <div class="hero-background">
                <div class="gradient-overlay"></div>
            </div>
            <div class="hero-image-container">
                <img src="images/laozi.jpg" alt="노자 초상화" class="hero-portrait">
            </div>
            <div class="hero-text">
                <div class="character-badge">老子</div>
                <h1 class="hero-title">
                    <span data-ko="노자 (老子)" data-en="Laozi (老子)">노자 (老子)</span>
                </h1>
                <p class="hero-subtitle">
                    <span data-ko="고대 중국의 철학자, 도가(道家)의 창시자"
                          data-en="Ancient Chinese philosopher, founder of Taoism">
                        고대 중국의 철학자, 도가(道家)의 창시자
                    </span>
                </p>
                <div class="hero-meta">
                    <span class="meta-item">
                        <span data-ko="BC 6세기경" data-en="ca. 6th century BCE">BC 6세기경</span>
                    </span>
                    <span class="meta-divider">|</span>
                    <span class="meta-item">
                        <span data-ko="성: 이(李), 이름: 이(耳)" data-en="Surname: Li, Name: Er">성: 이(李), 이름: 이(耳)</span>
                    </span>
                    <span class="meta-divider">|</span>
                    <span class="meta-item">
                        <span data-ko="자: 담(聃)" data-en="Courtesy name: Dan">자: 담(聃)</span>
                    </span>
                </div>
            </div>
        </header>

        <!-- 메인 콘텐츠 -->
        <main class="main-modern">

            <!-- 3D 렌더링 갤러리 -->
            <section class="section gallery-3d">
                <div class="container">
                    <h2 class="section-title">
                        <span data-ko="문화재 3D 렌더링" data-en="Cultural Artifacts 3D Rendering">문화재 3D 렌더링</span>
                    </h2>

                    <div class="gallery-grid">
                        <div class="gallery-item" data-item="daodejing">
                            <div class="gallery-item-image">
                                <div class="gallery-item-icon">📜</div>
                                <span class="gallery-badge" data-ko="경전" data-en="Scripture">경전</span>
                            </div>
                            <div class="gallery-item-info">
                                <h3 class="gallery-item-title" data-ko="도덕경 (道德經)" data-en="Tao Te Ching">도덕경 (道德經)</h3>
                                <p class="gallery-item-desc" data-ko="노자의 사상을 담은 도가의 핵심 경전, 81장으로 구성" data-en="Core Taoist text containing Laozi's philosophy, consisting of 81 chapters">노자의 사상을 담은 도가의 핵심 경전, 81장으로 구성</p>
                            </div>
                        </div>

                        <div class="gallery-item" data-item="yinyang">
                            <div class="gallery-item-image">
                                <div class="gallery-item-icon">☯️</div>
                                <span class="gallery-badge" data-ko="상징" data-en="Symbol">상징</span>
                            </div>
                            <div class="gallery-item-info">
                                <h3 class="gallery-item-title" data-ko="태극 (太極)" data-en="Yin Yang">태극 (太極)</h3>
                                <p class="gallery-item-desc" data-ko="도가 사상의 핵심 상징, 음양의 조화를 나타냄" data-en="Core symbol of Taoism representing harmony of yin and yang">도가 사상의 핵심 상징, 음양의 조화를 나타냄</p>
                            </div>
                        </div>

                        <div class="gallery-item" data-item="temple">
                            <div class="gallery-item-image">
                                <div class="gallery-item-icon">⛩️</div>
                                <span class="gallery-badge" data-ko="건축" data-en="Architecture">건축</span>
                            </div>
                            <div class="gallery-item-info">
                                <h3 class="gallery-item-title" data-ko="노자묘 (老子廟)" data-en="Laozi Temple">노자묘 (老子廟)</h3>
                                <p class="gallery-item-desc" data-ko="노자를 기리는 도교 사원, 중국 허난성에 위치" data-en="Taoist temple dedicated to Laozi, located in Henan, China">노자를 기리는 도교 사원, 중국 허난성에 위치</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 명언 섹션 -->
            <section class="section quotes-section">
                <div class="container">
                    <h2 class="section-title">
                        <span data-ko="주요 사상과 명언" data-en="Key Philosophy & Quotes">주요 사상과 명언</span>
                    </h2>

                    <div class="quotes-grid">
                        <div class="quote-card">
                            <div class="quote-icon">道</div>
                            <blockquote class="quote-text">
                                <p data-ko="도가 도라면 항상된 도가 아니요, 이름이 이름이라면 항상된 이름이 아니다."
                                   data-en="The Tao that can be told is not the eternal Tao. The name that can be named is not the eternal name.">
                                    도가 도라면 항상된 도가 아니요, 이름이 이름이라면 항상된 이름이 아니다.
                                </p>
                            </blockquote>
                            <cite class="quote-source" data-ko="도덕경 제1장" data-en="Tao Te Ching, Chapter 1">도덕경 제1장</cite>
                        </div>

                        <div class="quote-card">
                            <div class="quote-icon">無</div>
                            <blockquote class="quote-text">
                                <p data-ko="상선약수(上善若水) - 최상의 선은 물과 같다."
                                   data-en="The highest good is like water.">
                                    상선약수(上善若水) - 최상의 선은 물과 같다.
                                </p>
                            </blockquote>
                            <cite class="quote-source" data-ko="도덕경 제8장" data-en="Tao Te Ching, Chapter 8">도덕경 제8장</cite>
                        </div>

                        <div class="quote-card">
                            <div class="quote-icon">德</div>
                            <blockquote class="quote-text">
                                <p data-ko="무위이무불위(無爲而無不爲) - 함이 없으나 이루지 못함이 없다."
                                   data-en="By not doing, nothing is left undone.">
                                    무위이무불위(無爲而無不爲) - 함이 없으나 이루지 못함이 없다.
                                </p>
                            </blockquote>
                            <cite class="quote-source" data-ko="도덕경 제48장" data-en="Tao Te Ching, Chapter 48">도덕경 제48장</cite>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 학술적 분석 -->
            <section class="section analysis-section">
                <div class="container">
                    <div class="analysis-grid">
                        <div class="analysis-card">
                            <h3 class="analysis-title">
                                <span data-ko="도가 사상의 핵심" data-en="Core of Taoist Philosophy">도가 사상의 핵심</span>
                            </h3>
                            <p class="analysis-text" data-ko="노자의 도가 사상은 '도(道)'와 '덕(德)'을 중심으로, 자연의 순리를 따르는 '무위자연(無爲自然)'을 강조합니다. 인위적인 제도와 지식을 비판하며, 단순하고 소박한 삶을 이상으로 삼았습니다."
                               data-en="Laozi's Taoist philosophy centers on 'Tao' (Way) and 'Te' (Virtue), emphasizing 'wu wei' (non-action) in harmony with nature. It critiques artificial systems and knowledge, advocating for simple and humble living.">
                                노자의 도가 사상은 '도(道)'와 '덕(德)'을 중심으로, 자연의 순리를 따르는 '무위자연(無爲自然)'을 강조합니다. 인위적인 제도와 지식을 비판하며, 단순하고 소박한 삶을 이상으로 삼았습니다.
                            </p>
                        </div>

                        <div class="analysis-card">
                            <h3 class="analysis-title">
                                <span data-ko="역사적 영향" data-en="Historical Influence">역사적 영향</span>
                            </h3>
                            <p class="analysis-text" data-ko="노자 사상은 중국 도교의 철학적 기반이 되었으며, 동아시아 문화와 예술에 깊은 영향을 미쳤습니다. 서양에서도 '도덕경'은 가장 많이 번역된 고전 중 하나로, 현대 생태철학과 동양 사상 연구의 중요한 텍스트입니다."
                               data-en="Laozi's thought became the philosophical foundation of Chinese Taoism and profoundly influenced East Asian culture and arts. In the West, the Tao Te Ching is one of the most translated classics and a crucial text for modern ecological philosophy and Eastern thought studies.">
                                노자 사상은 중국 도교의 철학적 기반이 되었으며, 동아시아 문화와 예술에 깊은 영향을 미쳤습니다. 서양에서도 '도덕경'은 가장 많이 번역된 고전 중 하나로, 현대 생태철학과 동양 사상 연구의 중요한 텍스트입니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    </div>
'''

# 석가모니 섹션 생성
buddha_section = '''
    <!-- 석가모니 콘텐츠 -->
    <div id="buddha" class="character-content">
        <!-- 히어로 섹션 -->
        <header class="hero-modern hero-buddha">
            <div class="hero-background">
                <div class="gradient-overlay"></div>
            </div>
            <div class="hero-image-container">
                <img src="images/buddha.jpg" alt="석가모니 초상화" class="hero-portrait">
                </div>
            <div class="hero-text">
                <div class="character-badge">釋迦牟尼</div>
                <h1 class="hero-title">
                    <span data-ko="석가모니 (釋迦牟尼)" data-en="Shakyamuni Buddha (釋迦牟尼)">석가모니 (釋迦牟尼)</span>
                </h1>
                <p class="hero-subtitle">
                    <span data-ko="고대 인도의 성자, 불교의 창시자"
                          data-en="Ancient Indian sage, founder of Buddhism">
                        고대 인도의 성자, 불교의 창시자
                    </span>
                </p>
                <div class="hero-meta">
                    <span class="meta-item">
                        <span data-ko="BC 563–483년경" data-en="ca. 563–483 BCE">BC 563–483년경</span>
                    </span>
                    <span class="meta-divider">|</span>
                    <span class="meta-item">
                        <span data-ko="본명: 싯다르타 고타마" data-en="Birth name: Siddhartha Gautama">본명: 싯다르타 고타마</span>
                    </span>
                    <span class="meta-divider">|</span>
                    <span class="meta-item">
                        <span data-ko="출생지: 룸비니 (현 네팔)" data-en="Birthplace: Lumbini (Nepal)">출생지: 룸비니 (현 네팔)</span>
                    </span>
                </div>
            </div>
        </header>

        <!-- 메인 콘텐츠 -->
        <main class="main-modern">

            <!-- 3D 렌더링 갤러리 -->
            <section class="section gallery-3d">
                <div class="container">
                    <h2 class="section-title">
                        <span data-ko="문화재 3D 렌더링" data-en="Cultural Artifacts 3D Rendering">문화재 3D 렌더링</span>
                    </h2>

                    <div class="gallery-grid">
                        <div class="gallery-item" data-item="tripitaka">
                            <div class="gallery-item-image">
                                <div class="gallery-item-icon">📚</div>
                                <span class="gallery-badge" data-ko="경전" data-en="Scripture">경전</span>
                            </div>
                            <div class="gallery-item-info">
                                <h3 class="gallery-item-title" data-ko="팔만대장경 (八萬大藏經)" data-en="Tripitaka Koreana">팔만대장경 (八萬大藏經)</h3>
                                <p class="gallery-item-desc" data-ko="고려시대 제작된 불교 경전의 집대성, 유네스코 세계기록유산" data-en="Complete Buddhist scriptures from Goryeo Dynasty, UNESCO Memory of the World">고려시대 제작된 불교 경전의 집대성, 유네스코 세계기록유산</p>
                            </div>
                        </div>

                        <div class="gallery-item" data-item="statue">
                            <div class="gallery-item-image">
                                <div class="gallery-item-icon">🗿</div>
                                <span class="gallery-badge" data-ko="국보" data-en="Nat'l Treasure">국보</span>
                            </div>
                            <div class="gallery-item-info">
                                <h3 class="gallery-item-title" data-ko="석굴암 석가여래좌상" data-en="Seokguram Buddha">석굴암 석가여래좌상</h3>
                                <p class="gallery-item-desc" data-ko="통일신라시대의 걸작, 완벽한 비례와 자비로운 표정" data-en="Masterpiece of Unified Silla, perfect proportions and compassionate expression">통일신라시대의 걸작, 완벽한 비례와 자비로운 표정</p>
                            </div>
                        </div>

                        <div class="gallery-item" data-item="dharma-wheel">
                            <div class="gallery-item-image">
                                <div class="gallery-item-icon">☸️</div>
                                <span class="gallery-badge" data-ko="상징" data-en="Symbol">상징</span>
                            </div>
                            <div class="gallery-item-info">
                                <h3 class="gallery-item-title" data-ko="법륜 (法輪)" data-en="Dharma Wheel">법륜 (法輪)</h3>
                                <p class="gallery-item-desc" data-ko="부처의 가르침을 상징하는 법의 수레바퀴" data-en="Wheel symbolizing the Buddha's teachings">부처의 가르침을 상징하는 법의 수레바퀴</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 명언 섹션 -->
            <section class="section quotes-section">
                <div class="container">
                    <h2 class="section-title">
                        <span data-ko="주요 가르침과 명언" data-en="Key Teachings & Quotes">주요 가르침과 명언</span>
                    </h2>

                    <div class="quotes-grid">
                        <div class="quote-card">
                            <div class="quote-icon">覺</div>
                            <blockquote class="quote-text">
                                <p data-ko="모든 것은 마음이 만들어낸 것이다. 우리가 생각하는 것이 곧 우리가 되는 것이다."
                                   data-en="All that we are is the result of what we have thought. What we think, we become.">
                                    모든 것은 마음이 만들어낸 것이다. 우리가 생각하는 것이 곧 우리가 되는 것이다.
                                </p>
                            </blockquote>
                            <cite class="quote-source" data-ko="법구경" data-en="Dhammapada">법구경</cite>
                        </div>

                        <div class="quote-card">
                            <div class="quote-icon">苦</div>
                            <blockquote class="quote-text">
                                <p data-ko="모든 고통은 집착에서 비롯된다."
                                   data-en="All suffering originates from attachment.">
                                    모든 고통은 집착에서 비롯된다.
                                </p>
                            </blockquote>
                            <cite class="quote-source" data-ko="사성제" data-en="Four Noble Truths">사성제</cite>
                        </div>

                        <div class="quote-card">
                            <div class="quote-icon">慈</div>
                            <blockquote class="quote-text">
                                <p data-ko="증오는 증오로써 그치지 않고, 자비로써 그친다. 이것은 영원한 진리이다."
                                   data-en="Hatred is never appeased by hatred. It is appeased by love. This is an eternal law.">
                                    증오는 증오로써 그치지 않고, 자비로써 그친다. 이것은 영원한 진리이다.
                                </p>
                            </blockquote>
                            <cite class="quote-source" data-ko="법구경" data-en="Dhammapada">법구경</cite>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 학술적 분석 -->
            <section class="section analysis-section">
                <div class="container">
                    <div class="analysis-grid">
                        <div class="analysis-card">
                            <h3 class="analysis-title">
                                <span data-ko="불교 사상의 핵심" data-en="Core of Buddhist Philosophy">불교 사상의 핵심</span>
                            </h3>
                            <p class="analysis-text" data-ko="석가모니는 사성제(四聖諦)와 팔정도(八正道)를 통해 인간 고통의 원인과 해결 방법을 제시했습니다. 연기론(緣起論)과 무아론(無我論)을 통해 만물의 상호의존성과 고정된 자아의 부재를 설명했습니다."
                               data-en="Buddha presented the Four Noble Truths and Eightfold Path as the cause and solution to human suffering. Through dependent origination and no-self doctrine, he explained the interdependence of all things and absence of fixed self.">
                                석가모니는 사성제(四聖諦)와 팔정도(八正道)를 통해 인간 고통의 원인과 해결 방법을 제시했습니다. 연기론(緣起論)과 무아론(無我論)을 통해 만물의 상호의존성과 고정된 자아의 부재를 설명했습니다.
                            </p>
                        </div>

                        <div class="analysis-card">
                            <h3 class="analysis-title">
                                <span data-ko="세계적 영향" data-en="Global Influence">세계적 영향</span>
                            </h3>
                            <p class="analysis-text" data-ko="불교는 동아시아, 동남아시아를 거쳐 전 세계로 전파되어 5억 명 이상의 신도를 보유한 세계 4대 종교 중 하나가 되었습니다. 한국, 중국, 일본, 티베트 등 각 지역의 문화와 융합되어 독특한 불교 전통을 형성했습니다."
                               data-en="Buddhism spread from East Asia and Southeast Asia worldwide, becoming one of the four major world religions with over 500 million followers. It merged with local cultures in Korea, China, Japan, and Tibet to form unique Buddhist traditions.">
                                불교는 동아시아, 동남아시아를 거쳐 전 세계로 전파되어 5억 명 이상의 신도를 보유한 세계 4대 종교 중 하나가 되었습니다. 한국, 중국, 일본, 티베트 등 각 지역의 문화와 융합되어 독특한 불교 전통을 형성했습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    </div>
'''

# 파일 끝 부분 찾기 (script 태그부터)
script_start = -1
for i, line in enumerate(lines):
    if '<script' in line and i > 1000:  # 1000줄 이후의 script 태그
        script_start = i
        break

# 나머지 부분 (script와 closing tags)
closing_section = ''.join(lines[script_start:])

# 새 파일 생성
new_content = confucius_section + laozi_section + buddha_section + '\n' + closing_section

# 백업 생성
import shutil
shutil.copy('index.html', 'index-backup-original.html')

# 새 파일 저장
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("✅ 콘텐츠 교체 완료!")
print("📝 백업 파일: index-backup-original.html")
print("\n변경 사항:")
print("- 네비게이션: 공자, 노자, 석가모니")
print("- 노자 섹션 추가 (도덕경, 태극, 노자묘 등)")
print("- 석가모니 섹션 추가 (팔만대장경, 석굴암, 법륜 등)")
print("\n⚠️  이미지 파일 필요:")
print("- images/laozi.jpg")
print("- images/buddha.jpg")
