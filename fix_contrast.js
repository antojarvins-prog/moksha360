const fs = require('fs');
const path = require('path');

const filesToFix = [
  'artist-management/page.tsx',
  'music-promotion/page.tsx',
  'live-events/page.tsx',
  'mentorship/page.tsx',
  'xr-ai/page.tsx'
];

filesToFix.forEach(file => {
  const filePath = path.join(__dirname, 'app', file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    content = content.replace(/<main className="min-h-screen pt-20 pb-32">/g, '<main className="min-h-screen pt-32 pb-32 bg-[#050505] text-white">');
    content = content.replace(/bg-gray-50/g, 'bg-white/5 backdrop-blur-md');
    content = content.replace(/border-gray-100/g, 'border-white/10');
    content = content.replace(/text-gray-900/g, 'text-white');
    content = content.replace(/text-gray-700/g, 'text-gray-300');
    content = content.replace(/text-gray-600/g, 'text-gray-400');
    
    // Fix H1 green text to gradient
    content = content.replace(/text-\[\#3D7500\] mb-6/g, 'text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-[#13AFF0] mb-8');

    fs.writeFileSync(filePath, content);
  }
});
console.log('Fixed contrast on all 5 service pages.');
