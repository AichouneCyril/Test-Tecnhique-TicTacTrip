const LINE_LENGTH = 80;

export const justifyText = (text: string): string => {
  const lines: string[] = [];
  const words = text.trim().split(/\s+/);

  let currentLine = '';
  for (const word of words) {
    if (currentLine.length + word.length <= LINE_LENGTH) {
      currentLine += `${word} `;
    } else {
      lines.push(currentLine.trim());
      currentLine = `${word} `;
    }
  }

  if (currentLine.trim().length > 0) {
    lines.push(currentLine.trim());
  }

  return lines.join('\n');

};
