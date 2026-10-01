const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outputDir = path.join(__dirname, 'public', 'images', 'services');

const tasks = [
  {
    src: "C:\\Users\\Hammad\\.gemini\\antigravity-ide\\brain\\977dba92-1602-4bdf-91db-d1d75441bd7d\\saas_architect_mockup_1790861789767.jpg",
    dest: path.join(outputDir, "custom-software-saas.webp"),
  },
  {
    src: "C:\\Users\\Hammad\\.gemini\\antigravity-ide\\brain\\977dba92-1602-4bdf-91db-d1d75441bd7d\\mobile_apps_mockup_1790861830992.jpg",
    dest: path.join(outputDir, "mobile-apps.webp"),
  },
  {
    src: "C:\\Users\\Hammad\\.gemini\\antigravity-ide\\brain\\977dba92-1602-4bdf-91db-d1d75441bd7d\\api_integrations_mockup_1790861875983.jpg",
    dest: path.join(outputDir, "api-integrations.webp"),
  },
];

async function processAll() {
  for (const t of tasks) {
    if (fs.existsSync(t.src)) {
      await sharp(t.src)
        .resize(1200, 900, { fit: 'cover' })
        .webp({ quality: 85 })
        .toFile(t.dest);
      console.log(`Converted: ${t.dest}`);
    } else {
      console.error(`Source missing: ${t.src}`);
    }
  }
}

processAll().catch(err => {
  console.error("Error processing generated images:", err);
  process.exit(1);
});
