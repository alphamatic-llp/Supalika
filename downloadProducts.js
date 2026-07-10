
const https = require("https");
const fs = require("fs");
const path = require("path");

const products = [
  { file: "prod_03_gsb.jpg", kw: "gravel,dirt" },
  { file: "prod_04_railway_ballast.jpg", kw: "ballast,rocks" },
  { file: "prod_05_60mm.jpg", kw: "large,gravel,stones" },
  { file: "prod_06_40mm.jpg", kw: "crushed,stone,grey" },
  { file: "prod_07_40_60mm.jpg", kw: "rocks,aggregate" },
  { file: "prod_08_30_40mm.jpg", kw: "aggregate,stones" },
  { file: "prod_09_30mm.jpg", kw: "grey,gravel" },
  { file: "prod_10_20mm.jpg", kw: "concrete,aggregate" },
  { file: "prod_11_10mm.jpg", kw: "small,gravel,stones" },
  { file: "prod_12_6mm.jpg", kw: "pebbles,chips,stone" },
  { file: "prod_13_dust.jpg", kw: "stone,dust,powder" },
  { file: "prod_14_msand.jpg", kw: "manufactured,sand" },
  { file: "prod_15_psand.jpg", kw: "fine,sand,plaster" },
  { file: "prod_16_river.jpg", kw: "river,sand,brown" }
];

const destDir = path.join(__dirname, "public", "images", "products");

if (!fs.existsSync(destDir)){
    fs.mkdirSync(destDir, { recursive: true });
}

function downloadImage(prod, index) {
  const url = `https://loremflickr.com/800/600/${prod.kw}/all?lock=${200 + index}`;
  const destPath = path.join(destDir, prod.file);
  
  return new Promise((resolve) => {
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        let loc = response.headers.location;
        if (loc.startsWith("/")) {
            loc = "https://loremflickr.com" + loc;
        }
        https.get(loc, (res2) => {
          const fileStream = fs.createWriteStream(destPath);
          res2.pipe(fileStream);
          fileStream.on("finish", () => resolve(true));
        });
      } else {
        const fileStream = fs.createWriteStream(destPath);
        response.pipe(fileStream);
        fileStream.on("finish", () => resolve(true));
      }
    });
  });
}

async function run() {
  for (let i = 0; i < products.length; i++) {
    console.log(`Downloading ${products[i].file}...`);
    await downloadImage(products[i], i);
  }
  console.log("Done downloading product images.");
}

run();

