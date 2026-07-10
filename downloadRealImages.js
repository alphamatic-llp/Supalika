
const https = require("https");
const fs = require("fs");
const path = require("path");

const data = {
  "gsb": "https://images.pexels.com/photos/16050119/pexels-photo-16050119.jpeg?auto=compress&cs=tinysrgb&w=800",
  "railway": "https://images.pexels.com/photos/35378457/pexels-photo-35378457.jpeg?auto=compress&cs=tinysrgb&w=800",
  "60mm": "https://images.pexels.com/photos/789117/pexels-photo-789117.jpeg?auto=compress&cs=tinysrgb&w=800",
  "40mm": "https://images.pexels.com/photos/5799727/pexels-photo-5799727.jpeg?auto=compress&cs=tinysrgb&w=800",
  "40_60mm": "https://images.pexels.com/photos/14091422/pexels-photo-14091422.jpeg?auto=compress&cs=tinysrgb&w=800",
  "30_40mm": "https://images.pexels.com/photos/12044663/pexels-photo-12044663.jpeg?auto=compress&cs=tinysrgb&w=800",
  "30mm": "https://images.pexels.com/photos/36235847/pexels-photo-36235847.jpeg?auto=compress&cs=tinysrgb&w=800",
  "20mm": "https://images.pexels.com/photos/5734897/pexels-photo-5734897.jpeg?auto=compress&cs=tinysrgb&w=800",
  "10mm": "https://images.pexels.com/photos/29024548/pexels-photo-29024548.jpeg?auto=compress&cs=tinysrgb&w=800",
  "6mm": "https://images.pexels.com/photos/36036277/pexels-photo-36036277.jpeg?auto=compress&cs=tinysrgb&w=800",
  "dust": "https://images.pexels.com/photos/6472943/pexels-photo-6472943.jpeg?auto=compress&cs=tinysrgb&w=800",
  "msand": "https://images.pexels.com/photos/7212812/pexels-photo-7212812.jpeg?auto=compress&cs=tinysrgb&w=800",
  "psand": "https://images.pexels.com/photos/4712039/pexels-photo-4712039.jpeg?auto=compress&cs=tinysrgb&w=800",
  "river": "https://images.pexels.com/photos/14178196/pexels-photo-14178196.jpeg?auto=compress&cs=tinysrgb&w=800"
};

const map = {
  "gsb": "prod_03_gsb.jpg",
  "railway": "prod_04_railway_ballast.jpg",
  "60mm": "prod_05_60mm.jpg",
  "40mm": "prod_06_40mm.jpg",
  "40_60mm": "prod_07_40_60mm.jpg",
  "30_40mm": "prod_08_30_40mm.jpg",
  "30mm": "prod_09_30mm.jpg",
  "20mm": "prod_10_20mm.jpg",
  "10mm": "prod_11_10mm.jpg",
  "6mm": "prod_12_6mm.jpg",
  "dust": "prod_13_dust.jpg",
  "msand": "prod_14_msand.jpg",
  "psand": "prod_15_psand.jpg",
  "river": "prod_16_river.jpg"
};

const destDir = path.join(__dirname, "public", "images", "products");

function downloadImage(key) {
  const url = data[key];
  const destPath = path.join(destDir, map[key]);
  
  return new Promise((resolve) => {
    https.get(url, (response) => {
      const fileStream = fs.createWriteStream(destPath);
      response.pipe(fileStream);
      fileStream.on("finish", () => resolve(true));
    });
  });
}

async function run() {
  const keys = Object.keys(data);
  for (let i = 0; i < keys.length; i++) {
    console.log(`Downloading ${map[keys[i]]}...`);
    await downloadImage(keys[i]);
  }
  console.log("Done downloading real images.");
}

run();

