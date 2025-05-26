const fs = require('fs');
const path = require('path');

const targetDir = path.resolve(__dirname, 'src');
const exts = ['.js', '.jsx', '.ts', '.tsx'];

// Regex para: require(`...${condition ? 'a.svg' : 'b.svg'}`)
const regex = /require\(`([^`]*?)\$\{([^?]+)\?\s*['"`](.*?)['"`]\s*:\s*['"`](.*?)['"`]\s*\}([^`]*)`\)/g;

function convertFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;

  const newContent = content.replace(regex, (match, prefix, condition, left, right, suffix) => {
    updated = true;
    return `${condition.trim()} ? new URL('${prefix}${left}${suffix}', import.meta.url).href : new URL('${prefix}${right}${suffix}', import.meta.url).href`;
  });

  if (updated) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`✅ Ternario actualizado en: ${filePath}`);
  }
}

function walk(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath);
    } else if (exts.includes(path.extname(file))) {
      convertFile(fullPath);
    }
  });
}

console.log('🚀 Reemplazando require(`...${cond ? a : b}`) por new URL(...) ternario');
walk(targetDir);
console.log('🎉 Conversión completada.');
