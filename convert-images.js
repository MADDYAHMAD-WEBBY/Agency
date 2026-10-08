const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDir = path.join(__dirname, 'Images');
const outputDir = path.join(__dirname, 'public', 'images', 'services');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const fileMap = {
  "WorkFlow Automation.png": "workflow-automation.webp",
  "AI Chatbots & Autonomous Agents.png": "ai-chatbots.webp",
  "CRM  Lead Automation.png": "crm-lead-automation.webp",
  "Custom Ai Integerations.png": "custom-ai-integrations.webp",
  "Bussiness Websites.png": "business-websites.webp",
  "Ecom Websites.png": "ecommerce.webp",
  "WordPress & Webflow Development.png": "wordpress-webflow.webp",
  "Web Apps (React  Next.js).png": "web-apps.webp",
  "Home Trades & Contractors.avif": "home-trades-contractors.webp",
};

async function convertAll() {
  const files = fs.readdirSync(inputDir);
  console.log("Input files:", files);

  for (const [inputName, outputName] of Object.entries(fileMap)) {
    const inputPath = path.join(inputDir, inputName);
    const outputPath = path.join(outputDir, outputName);

    if (fs.existsSync(inputPath)) {
      await sharp(inputPath)
        .resize(1200, 900, { fit: 'cover' })
        .webp({ quality: 85 })
        .toFile(outputPath);
      console.log(`Successfully converted: ${inputName} -> ${outputName}`);
    } else {
      console.error(`File not found: ${inputPath}`);
    }
  }
}

convertAll().catch(err => {
  console.error("Conversion failed:", err);
  process.exit(1);
});
