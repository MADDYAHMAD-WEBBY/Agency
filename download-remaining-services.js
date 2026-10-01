const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

const outputDir = path.join(__dirname, 'public', 'images', 'services');

const remainingServices = [
  {
    name: "apk-websites.webp",
    url: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "tool-websites.webp",
    url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "gbp-optimization.webp",
    url: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "citation-building.webp",
    url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "review-management.webp",
    url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
];

function downloadAndConvert(url, destPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', async () => {
        try {
          const buffer = Buffer.concat(chunks);
          await sharp(buffer)
            .resize(1200, 900, { fit: 'cover' })
            .webp({ quality: 85 })
            .toFile(destPath);
          console.log(`Saved: ${destPath}`);
          resolve();
        } catch (e) {
          reject(e);
        }
      });
      res.on('error', reject);
    });
  });
}

async function main() {
  for (const s of remainingServices) {
    const dest = path.join(outputDir, s.name);
    await downloadAndConvert(s.url, dest);
  }
}

main().catch(console.error);
