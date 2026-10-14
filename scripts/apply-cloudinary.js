import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mapFile = path.join(__dirname, "cloudinary-map.json");

if (!fs.existsSync(mapFile)) {
  console.error("❌ scripts/cloudinary-map.json not found! Run 'node scripts/upload-assets.js' first.");
  process.exit(1);
}

const map = JSON.parse(fs.readFileSync(mapFile, "utf-8"));
console.log(`Loaded ${Object.keys(map).length} mapped assets.`);

// Check which assets have been uploaded
const uploadedFiles = Object.keys(map);
console.log("Uploaded assets ready to be replaced in layouts:", uploadedFiles);
