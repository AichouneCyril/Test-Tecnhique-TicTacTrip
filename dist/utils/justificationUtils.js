"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.justifyText = void 0;
const LINE_LENGTH = 80;
const justifyText = (text) => {
    const lines = [];
    const words = text.trim().split(/\s+/);
    let currentLine = '';
    for (const word of words) {
        if (currentLine.length + word.length <= LINE_LENGTH) {
            currentLine += `${word} `;
        }
        else {
            lines.push(currentLine.trim());
            currentLine = `${word} `;
        }
    }
    if (currentLine.trim().length > 0) {
        lines.push(currentLine.trim());
    }
    return lines.join('\n');
};
exports.justifyText = justifyText;
