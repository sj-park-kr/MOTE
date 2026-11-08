// MOTE 워드마크 SVG 생성: 글자를 패스로 바꿔 폰트 없이 똑같이 보이게 한다.
// cd logo/src && npm i opentype.js@1.3.4 && node gen.mjs
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import opentype from 'opentype.js';

const font = opentype.loadSync(fileURLToPath(new URL('../fonts/jost-500.ttf', import.meta.url)));
const SIZE = 200, PAD = 40;
const path = font.getPath('MOTE', 0, SIZE, SIZE, { letterSpacing: 0.08 }); // 자간 0.08em
const b = path.getBoundingBox();
const vb = [b.x1 - PAD, b.y1 - PAD, b.x2 - b.x1 + PAD * 2, b.y2 - b.y1 + PAD * 2].map((v) => +v.toFixed(1));
const d = path.toPathData(2);

const svg = (fill) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb.join(' ')}"><path fill="${fill}" d="${d}"/></svg>\n`;
writeFileSync(new URL('../mote.svg', import.meta.url), svg('#15120F'));         // 밝은 배경용
writeFileSync(new URL('../mote_reverse.svg', import.meta.url), svg('#F2EBDD')); // 어두운 배경용
console.log('viewBox', vb.join(' '));
