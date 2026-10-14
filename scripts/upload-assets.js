import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env
dotenv.config({ path: path.join(__dirname, "../.env") });

cloudinary.config({
  cloud_url: process.env.CLOUDINARY_URL,
  secure: true
});

// Assets used by about, community, features
const ASSETS_TO_UPLOAD = [
  // about
  "btnfirst.png",
  "btnsecond.png",
  "add.png",
  // community
  "fill.png",
  "profile.png",
  "plus.svg",
  "Community01.png",
  "Community11.png",
  "Community3.png",
  "Community4.png",
  "Community001.png",
  "Community002.png",
  "Community004.png",
  "Community006.png",
  "Community12.png",
  "Community13.png",
  // features
  "Calling.png",
  "Calling1.png",
  "Calling2.png",
  "feat1.png",
  "feat2.png",
  "feat3.png",
  "featThird.png",
  "Memojis.png",
  "Memojis1.png",
  "Memojis2.png",
  "Memojis4.png",
  "Memojis6.png",
  "Memojis8.png",
  "Discover.png",
  "Messages.png",
  "Story.png",
  "story1.png",
  "Upload1.png",
  "Frame01.svg",
  "Frame00.svg",
  "Community.png",
  "Groups.png",
  "pro.png",
  "profile1.png"
];

// Deduplicate
const uniqueAssets = [...new Set(ASSETS_TO_UPLOAD)];
const assetsDir = path.join(__dirname, "../src/assets");
const mapFile = path.join(__dirname, "cloudinary-map.json");

// Load existing map if any
let existingMap = {};
if (fs.existsSync(mapFile)) {
  try {
    existingMap = JSON.parse(fs.readFileSync(mapFile, "utf-8"));
  } catch (e) {
    existingMap = {};
  }
}

async function uploadAll() {
  console.log(`Starting upload for ${uniqueAssets.length} assets...`);
  const resultMap = { ...existingMap };
  let successCount = 0;
  let skipCount = 0;
  let failCount = 0;

  for (const filename of uniqueAssets) {
    if (resultMap[filename]) {
      console.log(`⏩ Skipping already mapped: ${filename} -> ${resultMap[filename]}`);
      skipCount++;
      continue;
    }

    const filePath = path.join(assetsDir, filename);
    if (!fs.existsSync(filePath)) {
      console.warn(`⚠️ File not found in assets: ${filename}`);
      continue;
    }

    const publicId = `afta/${path.parse(filename).name}`;
    console.log(`⬆️ Uploading ${filename}...`);

    try {
      const res = await cloudinary.uploader.upload(filePath, {
        public_id: publicId,
        resource_type: filename.endsWith(".svg") ? "image" : "auto",
        overwrite: true,
        use_filename: true,
        unique_filename: false,
      });

      resultMap[filename] = res.secure_url;
      console.log(`✅ Uploaded ${filename}: ${res.secure_url}`);
      successCount++;

      // Save incrementally
      fs.writeFileSync(mapFile, JSON.stringify(resultMap, null, 2));
    } catch (err) {
      console.error(`❌ Failed ${filename}:`, err.message);
      failCount++;
    }
  }

  console.log(`\n🎉 Upload complete! Success: ${successCount}, Skipped: ${skipCount}, Failed: ${failCount}`);
  console.log(`Mapping saved to: ${mapFile}`);
}

uploadAll().catch(console.error);
