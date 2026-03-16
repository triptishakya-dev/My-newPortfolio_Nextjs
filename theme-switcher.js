const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function buildFileList(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      buildFileList(path.join(dir, file), fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.css')) {
      fileList.push(path.join(dir, file));
    }
  }
  return fileList;
}

const files = buildFileList(srcDir);

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Replace class names and CSS variables
  content = content.replace(/amber/g, 'emerald');
  content = content.replace(/orange/g, 'teal');
  
  // Replace hex codes in globals.css
  if (file.endsWith('globals.css')) {
    // amber-400 -> emerald-400: #fbbf24 -> #34d399
    content = content.replace(/#fbbf24/g, '#34d399');
    // amber-500 -> emerald-500: #f59e0b -> #10b981
    content = content.replace(/#f59e0b/g, '#10b981');
    // amber-600 -> emerald-600: #d97706 -> #059669
    content = content.replace(/#d97706/g, '#059669');
    // orange-400 -> teal-400: #fb923c -> #2dd4bf
    content = content.replace(/#fb923c/g, '#2dd4bf');
    // orange-500 -> teal-500: #f97316 -> #14b8a6
    content = content.replace(/#f97316/g, '#14b8a6');
    // Selection text color
    content = content.replace(/color: #f59e0b/g, 'color: #10b981');
  } else if (file.endsWith('Hero.tsx')) {
    // rgba(245,158,11...) -> rgba(16,185,129...) -> emerald-500
    // rgba(251,146,60...) -> rgba(20,184,166...) -> teal-500
    content = content.replace(/245,158,11/g, '16,185,129');
    content = content.replace(/251,146,60/g, '20,184,166');
  }

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}

console.log('Theme replacement complete.');
