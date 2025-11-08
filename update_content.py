#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
새로운 문서 내용으로 index.html 업데이트
"""

# 공자 어록 데이터
confucius_quotes = [
    {
        "source": "『논어』 학이편 제1장",
        "source_link": "https://db.cyberseodang.or.kr/front/sabuList/BookMain.do?bnCode=jti_1h0201&titleId=C7&compare=false",
        "original": "學而時習之 不亦說乎",
        "romanization": "Xué ér shí xí zhī, bù yì yuè hū",
        "translation_ko": "배우고 때때로 익히면 또한 기쁘지 아니한가?",
        "translation_en": "Is it not a joy to learn and practice what you have learned?",
        "meaning_ko": "지식과 성찰의 기쁨을 강조합니다. 『논어』의 첫 구절로, 공자 교육철학의 핵심을 보여줍니다.",
        "meaning_en": "Emphasizes the joy of knowledge and reflection. The opening passage of the Analects, showing the core of Confucian educational philosophy."
    },
    {
        "source": "『논어』 안연편 제12장",
        "source_link": "https://db.cyberseodang.or.kr/front/sabuList/BookMain.do?bnCode=jti_1h0202&titleId=C115&compare=false",
        "original": "己所不欲 勿施於人",
        "romanization": "Jǐ suǒ bù yù, wù shī yú rén",
        "translation_ko": "자기가 원하지 않는 것은 남에게도 행하지 말라",
        "translation_en": "What you do not wish for yourself, do not impose upon others",
        "meaning_ko": "타인을 배려하는 마음을 강조합니다. 공자의 '서(恕)' 사상, 즉 상호성의 원리를 나타냅니다.",
        "meaning_en": "Emphasizes consideration for others. Represents Confucius's principle of 'shu' (reciprocity)."
    },
    {
        "source": "『논어』 위정편 제3장",
        "source_link": "https://db.cyberseodang.or.kr/front/sabuList/BookMain.do?bnCode=jti_1h0201&titleId=C26&compare=false",
        "original": "道之以政 齊之以刑 民免而無恥 道之以德 齊之以禮 有恥且格",
        "romanization": "Dào zhī yǐ zhèng, qí zhī yǐ xíng, mín miǎn ér wú chǐ",
        "translation_ko": "예로써 다스리면 백성이 부끄러워하고 스스로 바르게 된다",
        "translation_en": "When governed with virtue and regulated by propriety, people develop shame and become upright",
        "meaning_ko": "법보다 덕과 예로 다스리는 것이 더 중요함을 강조합니다.",
        "meaning_en": "Emphasizes that governing with virtue and propriety is more important than laws."
    }
]

# 공자 일화 데이터
confucius_anecdotes = [
    {
        "title_ko": "1. 안연의 죽음",
        "title_en": "1. Death of Yan Hui",
        "content_ko": "공자의 가장 뛰어난 제자였던 안연이 젊은 나이에 죽자, 공자는 크게 슬퍼했습니다. 안연은 가난했지만 학문에 힘썼으며, 공자는 그를 진정한 군자라며 눈물을 흘렸습니다. 이는 재물보다 내면의 품격을 중시하는 유교 사상을 보여줍니다.",
        "content_en": "When Yan Hui, Confucius's most outstanding disciple, died young, Confucius grieved deeply. Though poor, Yan Hui devoted himself to learning, and Confucius praised him as a true exemplar, shedding tears. This shows Confucian emphasis on inner character over material wealth.",
        "source_ko": "출처: ",
        "source_en": "Source: ",
        "source_text_ko": "『논어』 선진편 제11장",
        "source_text_en": "Analects, Xian Jin Chapter 11",
        "source_link": "https://db.cyberseodang.or.kr/front/sabuList/BookMain.do?bnCode=jti_1h0202&titleId=C89&compare=false"
    }
]

print("Content data prepared successfully")
print(f"Confucius quotes: {len(confucius_quotes)}")
print(f"Confucius anecdotes: {len(confucius_anecdotes)}")
