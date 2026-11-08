# 로고

대문자 워드마크 **MOTE**, 한 색. 장식(그라데이션·빛 번짐·강조색) 없음.

| 파일 | 용도 |
|---|---|
| `mote.svg` | 밝은 배경용(잉크 글자, 투명 바탕) |
| `mote_reverse.svg` | 어두운 배경용(크림 글자, 투명 바탕) |
| `mote_light.png` / `mote_dark.png` | 미리보기(1600x560, 바탕 포함) |

SVG는 글자를 패스로 변환해 폰트 없이 똑같이 보임.

## 컬러
| 용도 | HEX |
|---|---|
| 잉크(글자) | `#15120F` |
| 크림(밝은 바탕 / 어두운 바탕 위 글자) | `#F4EEE3` / `#F2EBDD` |

- 노랑·주황 + 검정은 쓰지 않는다(이마트 로고와 비슷해 보임).

## 폰트
Jost Medium(500), 자간 0.08em. OFL(Google Fonts), `fonts/jost-500.ttf`.

## 재생성
```bash
cd logo/src
npm i opentype.js@1.3.4
node gen.mjs   # mote.svg, mote_reverse.svg
```

## 이전 시안
볕뉘(BYEONNWI) 워드마크(A안 THE GAP 등)는 git 기록(`bec0b0e`)에 남아 있다.
