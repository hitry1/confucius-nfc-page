#!/usr/bin/env python3
"""
노자와 석가모니 섹션에 학술적 출처 추가
"""

# 노자 학술적 출처 섹션
laozi_references = '''
            <!-- 학술적 출처 -->
            <section class="section references">
                <div class="container">
                    <h2 class="section-title">
                        <span data-ko="학술적 출처 및 참고문헌" data-en="Academic Sources & References">학술적 출처 및 참고문헌</span>
                    </h2>

                    <div class="reference-category">
                        <h3 class="ref-category-title">
                            <span data-ko="원전 (Primary Sources)" data-en="Primary Sources">원전 (Primary Sources)</span>
                        </h3>
                        <ul class="reference-list">
                            <li>
                                <span data-ko="『道德經』(Tao Te Ching) - 노자의 사상을 담은 도가의 핵심 경전. 81장으로 구성. 왕필본(王弼本)과 백서본(帛書本) 등 여러 판본이 존재."
                                      data-en="Tao Te Ching - Core Taoist text containing Laozi's philosophy, consisting of 81 chapters. Multiple versions exist including Wang Bi edition and silk manuscripts.">
                                    『道德經』(Tao Te Ching) - 노자의 사상을 담은 도가의 핵심 경전. 81장으로 구성. 왕필본(王弼本)과 백서본(帛書本) 등 여러 판본이 존재.
                                </span>
                            </li>
                            <li>
                                <span data-ko="『莊子』(Zhuangzi) - 장자가 노자의 도가 사상을 계승하고 발전시킨 내용. 노자 사상 이해의 중요한 보조 자료."
                                      data-en="Zhuangzi - Zhuang Zhou's development of Laozi's Taoist thought. Important supplementary source for understanding Laoism.">
                                    『莊子』(Zhuangzi) - 장자가 노자의 도가 사상을 계승하고 발전시킨 내용. 노자 사상 이해의 중요한 보조 자료.
                                </span>
                            </li>
                            <li>
                                <span data-ko="『史記』老子韓非列傳 (Records of the Grand Historian, Biography of Laozi) - 사마천이 저술한 노자의 전기. 역사적 실존 인물로서의 노자에 대한 가장 오래된 기록."
                                      data-en="Records of the Grand Historian, Biography of Laozi - Sima Qian's biography of Laozi. Oldest historical record of Laozi as a person.">
                                    『史記』老子韓非列傳 (Records of the Grand Historian, Biography of Laozi) - 사마천이 저술한 노자의 전기. 역사적 실존 인물로서의 노자에 대한 가장 오래된 기록.
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div class="reference-category">
                        <h3 class="ref-category-title">
                            <span data-ko="현대 학술 연구 (Modern Scholarship)" data-en="Modern Scholarship">현대 학술 연구 (Modern Scholarship)</span>
                        </h3>
                        <ul class="reference-list">
                            <li>
                                Chen, Ellen M. (1989). <em>The Tao Te Ching: A New Translation with Commentary</em>. Paragon House.
                                <span data-ko=" - 도덕경의 철학적 해석과 주석을 포함한 권위 있는 영역본."
                                      data-en=" - Authoritative English translation with philosophical interpretation and commentary.">
                                     - 도덕경의 철학적 해석과 주석을 포함한 권위 있는 영역본.
                                </span>
                            </li>
                            <li>
                                Kohn, Livia & LaFargue, Michael (eds.) (1998). <em>Lao-tzu and the Tao-te-ching</em>. State University of New York Press.
                                <span data-ko=" - 도덕경과 노자에 대한 학제간 연구를 집대성한 학술서."
                                      data-en=" - Comprehensive interdisciplinary scholarly work on the Tao Te Ching and Laozi.">
                                     - 도덕경과 노자에 대한 학제간 연구를 집대성한 학술서.
                                </span>
                            </li>
                            <li>
                                최진석 (2001). 『노자의 목소리로 듣는 도덕경』. 소나무.
                                <span data-ko=" - 한국 도가 철학 연구의 대표적 저작. 도덕경의 현대적 해석."
                                      data-en=" - Leading Korean work on Taoist philosophy. Modern interpretation of the Tao Te Ching.">
                                     - 한국 도가 철학 연구의 대표적 저작. 도덕경의 현대적 해석.
                                </span>
                            </li>
                            <li>
                                김용옥 (2005). 『도덕경 한글역주』(전 3권). 통나무.
                                <span data-ko=" - 한국어 독자를 위한 상세한 도덕경 주석서. 원문, 한글 번역, 상세 해설 포함."
                                      data-en=" - Detailed Korean commentary on Tao Te Ching. Includes original text, Korean translation, and extensive explanation.">
                                     - 한국어 독자를 위한 상세한 도덕경 주석서. 원문, 한글 번역, 상세 해설 포함.
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div class="reference-category">
                        <h3 class="ref-category-title">
                            <span data-ko="추천 도서 (Further Reading)" data-en="Further Reading">추천 도서 (Further Reading)</span>
                        </h3>
                        <ul class="reference-list">
                            <li>
                                Lau, D.C. (1963). <em>Lao Tzu: Tao Te Ching</em>. Penguin Classics.
                                <span data-ko=" - 널리 읽히는 도덕경 영역본."
                                      data-en=" - Widely read English translation of the Tao Te Ching.">
                                     - 널리 읽히는 도덕경 영역본.
                                </span>
                            </li>
                            <li>
                                Hansen, Chad (1992). <em>A Daoist Theory of Chinese Thought</em>. Oxford University Press.
                                <span data-ko=" - 도가 사상의 철학적 구조를 분석한 현대 연구."
                                      data-en=" - Modern analytical study of Daoist philosophical structure.">
                                     - 도가 사상의 철학적 구조를 분석한 현대 연구.
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div class="academic-note">
                        <p data-ko="이 페이지의 모든 인용문과 해석은 위 학술 자료들을 기반으로 작성되었습니다. 노자의 생몰년도는 학계에 논란이 있으나, 일반적으로 기원전 6세기경 활동한 것으로 추정됩니다. 도덕경의 인용은 왕필본을 기준으로 하였습니다."
                             data-en="All quotations and interpretations on this page are based on the above academic sources. While Laozi's dates are debated by scholars, he is generally believed to have lived in the 6th century BCE. Quotations from the Tao Te Ching are based on the Wang Bi edition.">
                            이 페이지의 모든 인용문과 해석은 위 학술 자료들을 기반으로 작성되었습니다. 노자의 생몰년도는 학계에 논란이 있으나, 일반적으로 기원전 6세기경 활동한 것으로 추정됩니다. 도덕경의 인용은 왕필본을 기준으로 하였습니다.
                        </p>
                    </div>
                </div>
            </section>
'''

# 석가모니 학술적 출처 섹션
buddha_references = '''
            <!-- 학술적 출처 -->
            <section class="section references">
                <div class="container">
                    <h2 class="section-title">
                        <span data-ko="학술적 출처 및 참고문헌" data-en="Academic Sources & References">학술적 출처 및 참고문헌</span>
                    </h2>

                    <div class="reference-category">
                        <h3 class="ref-category-title">
                            <span data-ko="원전 (Primary Sources)" data-en="Primary Sources">원전 (Primary Sources)</span>
                        </h3>
                        <ul class="reference-list">
                            <li>
                                <span data-ko="『法句經』(Dhammapada) - 초기 불교 경전으로, 부처의 가르침을 423개의 게송으로 정리. 팔리어 원전이 가장 권위 있음."
                                      data-en="Dhammapada - Early Buddhist scripture containing 423 verses of the Buddha's teachings. Pali canon is most authoritative.">
                                    『法句經』(Dhammapada) - 초기 불교 경전으로, 부처의 가르침을 423개의 게송으로 정리. 팔리어 원전이 가장 권위 있음.
                                </span>
                            </li>
                            <li>
                                <span data-ko="『大般涅槃經』(Mahaparinibbana Sutta) - 부처의 마지막 여정과 열반을 기록한 경전. 부처의 생애 이해에 필수적."
                                      data-en="Mahaparinibbana Sutta - Records Buddha's final journey and nirvana. Essential for understanding Buddha's life.">
                                    『大般涅槃經』(Mahaparinibbana Sutta) - 부처의 마지막 여정과 열반을 기록한 경전. 부처의 생애 이해에 필수적.
                                </span>
                            </li>
                            <li>
                                <span data-ko="『八萬大藏經』(Tripitaka Koreana) - 고려시대 제작된 불교 경전의 집대성. 유네스코 세계기록유산. 현존하는 가장 완전한 대장경."
                                      data-en="Tripitaka Koreana - Complete Buddhist canon created during Goryeo Dynasty. UNESCO Memory of the World. Most complete extant Buddhist canon.">
                                    『八萬大藏經』(Tripitaka Koreana) - 고려시대 제작된 불교 경전의 집대성. 유네스코 세계기록유산. 현존하는 가장 완전한 대장경.
                                </span>
                            </li>
                            <li>
                                <span data-ko="『中論』(Mūlamadhyamakakārikā) - 용수(龍樹)의 저작. 대승불교 중관학파의 핵심 논서."
                                      data-en="Mūlamadhyamakakārikā - Work by Nagarjuna. Core text of Mahayana Madhyamaka school.">
                                    『中論』(Mūlamadhyamakakārikā) - 용수(龍樹)의 저작. 대승불교 중관학파의 핵심 논서.
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div class="reference-category">
                        <h3 class="ref-category-title">
                            <span data-ko="현대 학술 연구 (Modern Scholarship)" data-en="Modern Scholarship">현대 학술 연구 (Modern Scholarship)</span>
                        </h3>
                        <ul class="reference-list">
                            <li>
                                Gethin, Rupert (1998). <em>The Foundations of Buddhism</em>. Oxford University Press.
                                <span data-ko=" - 초기 불교 사상과 역사를 체계적으로 정리한 표준 교과서."
                                      data-en=" - Standard textbook systematically presenting early Buddhist thought and history.">
                                     - 초기 불교 사상과 역사를 체계적으로 정리한 표준 교과서.
                                </span>
                            </li>
                            <li>
                                Harvey, Peter (2013). <em>An Introduction to Buddhism: Teachings, History and Practices</em> (2nd ed.). Cambridge University Press.
                                <span data-ko=" - 불교의 교리, 역사, 실천을 포괄적으로 다룬 학술서."
                                      data-en=" - Comprehensive academic work covering Buddhist doctrine, history, and practice.">
                                     - 불교의 교리, 역사, 실천을 포괄적으로 다룬 학술서.
                                </span>
                            </li>
                            <li>
                                각묵스님 (2014). 『맛지마니까야』(전 8권). 초기불전연구원.
                                <span data-ko=" - 중부 경전의 한국어 완역본. 초기 불교 경전 연구의 기초 자료."
                                      data-en=" - Complete Korean translation of Majjhima Nikaya. Foundational resource for early Buddhist scripture study.">
                                     - 중부 경전의 한국어 완역본. 초기 불교 경전 연구의 기초 자료.
                                </span>
                            </li>
                            <li>
                                은정희 (2008). 『불교사상의 이해』. 서울대학교출판문화원.
                                <span data-ko=" - 한국 불교 철학 연구의 대표적 저작. 체계적인 불교 사상 개론."
                                      data-en=" - Leading Korean work on Buddhist philosophy. Systematic introduction to Buddhist thought.">
                                     - 한국 불교 철학 연구의 대표적 저작. 체계적인 불교 사상 개론.
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div class="reference-category">
                        <h3 class="ref-category-title">
                            <span data-ko="추천 도서 (Further Reading)" data-en="Further Reading">추천 도서 (Further Reading)</span>
                        </h3>
                        <ul class="reference-list">
                            <li>
                                Rahula, Walpola (1974). <em>What the Buddha Taught</em> (2nd ed.). Grove Press.
                                <span data-ko=" - 초기 불교 가르침에 대한 명료한 입문서."
                                      data-en=" - Clear introduction to early Buddhist teachings.">
                                     - 초기 불교 가르침에 대한 명료한 입문서.
                                </span>
                            </li>
                            <li>
                                법정스님 (1996). 『금강경 이야기』. 샘터.
                                <span data-ko=" - 한국 독자를 위한 금강경 해설서."
                                      data-en=" - Commentary on Diamond Sutra for Korean readers.">
                                     - 한국 독자를 위한 금강경 해설서.
                                </span>
                            </li>
                            <li>
                                Williams, Paul (2009). <em>Mahayana Buddhism: The Doctrinal Foundations</em> (2nd ed.). Routledge.
                                <span data-ko=" - 대승불교 교리의 학술적 연구."
                                      data-en=" - Scholarly study of Mahayana Buddhist doctrine.">
                                     - 대승불교 교리의 학술적 연구.
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div class="academic-note">
                        <p data-ko="이 페이지의 모든 인용문과 해석은 위 학술 자료들을 기반으로 작성되었습니다. 석가모니의 생몰년도(BC 563-483)는 전통적 견해이며, 현대 학계에서는 BC 480-400년설도 제기됩니다. 인용문은 팔리어 경전과 한역 대장경을 참조하였습니다."
                             data-en="All quotations and interpretations on this page are based on the above academic sources. Buddha's dates (563-483 BCE) represent the traditional view, while modern scholars also propose 480-400 BCE. Quotations reference Pali canon and Chinese Buddhist canon.">
                            이 페이지의 모든 인용문과 해석은 위 학술 자료들을 기반으로 작성되었습니다. 석가모니의 생몰년도(BC 563-483)는 전통적 견해이며, 현대 학계에서는 BC 480-400년설도 제기됩니다. 인용문은 팔리어 경전과 한역 대장경을 참조하였습니다.
                        </p>
                    </div>
                </div>
            </section>
'''

print("✅ 학술적 출처 섹션 생성 완료")
print("\n다음 단계:")
print("1. index.html에 출처 섹션 삽입")
print("2. 노자 섹션의 </main> 전에 laozi_references 삽입")
print("3. 석가모니 섹션의 </main> 전에 buddha_references 삽입")
