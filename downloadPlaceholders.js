
const https = require("https");
const fs = require("fs");
const path = require("path");

const products = [
  { file: "prod_03_gsb.jpg", text: "GSB\nGRANULAR SUB-BASE" },
  { file: "prod_04_railway_ballast.jpg", text: "40-60MM\nRAILWAY BALLAST" },
  { file: "prod_05_60mm.jpg", text: "60MM\nCRUSHER AGGREGATE" },
  { file: "prod_06_40mm.jpg", text: "40MM\nCRUSHER AGGREGATE" },
  { file: "prod_07_40_60mm.jpg", text: "40-60MM\nCRUSHER AGGREGATE" },
  { file: "prod_08_30_40mm.jpg", text: "30-40MM\nCRUSHER AGGREGATE" },
  { file: "prod_09_30mm.jpg", text: "30MM\nCRUSHER AGGREGATE" },
  { file: "prod_10_20mm.jpg", text: "20MM\nCRUSHER AGGREGATE" },
  { file: "prod_11_10mm.jpg", text: "10MM\nCRUSHER AGGREGATE" },
  { file: "prod_12_6mm.jpg", text: "6MM\nCRUSHER AGGREGATE" },
  { file: "prod_13_dust.jpg", text: "STONE DUST\nFINE" },
  { file: "prod_14_msand.jpg", text: "M-SAND\nCONTRACTUAL" },
  { file: "prod_15_psand.jpg", text: "P-SAND\nCONTRACTUAL" },
  { file: "prod_16_river.jpg", text: "RIVER SAND\nNATURAL" }
];

const destDir = path.join(__dirname, "public", "images", "products");

function downloadImage(prod) {
  const urlText = encodeURIComponent(prod.text);
  const url = `https://placehold.co/800x600/1e293b/f59e0b.png?text=${urlText}&font=montserrat`;
  const destPath = path.join(destDir, prod.file);
  
  return new Promise((resolve) => {
    https.get(url, (response) => {
      const fileStream = fs.createWriteStream(destPath);
      response.pipe(fileStream);
      fileStream.on("finish", () => resolve(true));
    });
  });
}

async function run() {
  for (let i = 0; i < products.length; i++) {
    console.log(`Downloading ${products[i].file}...`);
    await downloadImage(products[i]);
  }
  console.log("Done downloading placeholders.");
}

run();

