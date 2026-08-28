const fs = require('fs');
const path = require('path');
const https = require('https');

const assets = [
  // Divisions
  {
    url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80',
    dest: 'public/images/divisions/div01-hero.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/divisions/div01-facility.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1600&q=80',
    dest: 'public/images/divisions/div02-hero.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/divisions/div02-facility.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80',
    dest: 'public/images/divisions/div03-hero.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/divisions/div03-facility.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1600&q=80',
    dest: 'public/images/divisions/div04-hero.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/divisions/div04-facility.jpg',
  },

  // Projects
  {
    url: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1600&q=80',
    dest: 'public/images/projects/project-awash-hero.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/project-awash-1.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/project-awash-2.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/project-awash-3.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1600&q=80',
    dest: 'public/images/projects/project-diredawa-hero.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/project-diredawa-1.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1600&q=80',
    dest: 'public/images/projects/project-gibe-hero.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/project-gibe-1.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80',
    dest: 'public/images/projects/project-hawassa-hero.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/project-hawassa-1.jpg',
  },

  // Leadership
  {
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/leadership/leader-tadesse.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/leadership/leader-selam.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/leadership/leader-yohannes.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/leadership/leader-meron.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/leadership/leader-daniel.jpg',
  },

  // Insights
  {
    url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80',
    dest: 'public/images/insights/insight-steel.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1600&q=80',
    dest: 'public/images/insights/insight-uhpc.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80',
    dest: 'public/images/insights/insight-esg.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80',
    dest: 'public/images/insights/insight-pipe.jpg',
  },
];

async function downloadFile(url, dest) {
  const fullDest = path.resolve(__dirname, '..', dest);
  const dir = path.dirname(fullDest);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
      }
      const fileStream = fs.createWriteStream(fullDest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Saved ${dest}`);
        resolve();
      });
      fileStream.on('error', reject);
    }).on('error', reject);
  });
}

async function run() {
  console.log(`Starting download of ${assets.length} assets...`);
  for (const item of assets) {
    try {
      await downloadFile(item.url, item.dest);
    } catch (err) {
      console.error(`Error downloading ${item.dest}:`, err.message);
    }
  }
  console.log('All downloads finished.');
}

run();
