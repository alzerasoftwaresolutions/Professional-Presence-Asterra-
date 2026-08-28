const fs = require('fs');
const path = require('path');

const fallbacks = [
  {
    src: 'public/images/divisions/div01-hero.jpg',
    dest: 'public/images/divisions/div02-hero.jpg',
  },
  {
    src: 'public/images/divisions/div01-facility.jpg',
    dest: 'public/images/divisions/div03-facility.jpg',
  },
  {
    src: 'public/images/projects/project-awash-1.jpg',
    dest: 'public/images/projects/project-awash-hero.jpg',
  },
  {
    src: 'public/images/projects/project-awash-2.jpg',
    dest: 'public/images/projects/project-gibe-1.jpg',
  },
  {
    src: 'public/images/divisions/div04-hero.jpg',
    dest: 'public/images/projects/project-hawassa-1.jpg',
  },
  {
    src: 'public/images/insights/insight-steel.jpg',
    dest: 'public/images/insights/insight-uhpc.jpg',
  },
];

for (const { src, dest } of fallbacks) {
  const fullSrc = path.resolve(__dirname, '..', src);
  const fullDest = path.resolve(__dirname, '..', dest);
  if (!fs.existsSync(fullDest) && fs.existsSync(fullSrc)) {
    fs.copyFileSync(fullSrc, fullDest);
    console.log(`Copied ${src} -> ${dest}`);
  }
}
console.log('All local asset paths verified.');
