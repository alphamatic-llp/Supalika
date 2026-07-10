const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = path.join(__dirname, 'public', 'images', 'process');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const images = [
  { url: "https://loremflickr.com/800/600/survey,engineer/all?lock=101", name: "01-survey.jpg" },
  { url: "https://loremflickr.com/800/600/excavator,dirt/all?lock=102", name: "02-overburden.jpg" },
  { url: "https://loremflickr.com/800/600/drilling,rock/all?lock=103", name: "03-drilling.jpg" },
  { url: "https://loremflickr.com/800/600/explosion,quarry/all?lock=104", name: "04-blasting.jpg" },
  { url: "https://loremflickr.com/800/600/hydraulic,breaker/all?lock=105", name: "05-breaking.jpg" },
  { url: "https://loremflickr.com/800/600/loader,boulder/all?lock=106", name: "06-loading.jpg" },
  { url: "https://loremflickr.com/800/600/dumptruck,quarry/all?lock=107", name: "07-transport.jpg" },
  { url: "https://loremflickr.com/800/600/waterpump,industrial/all?lock=108", name: "08-dewatering.jpg" },
  { url: "https://loremflickr.com/800/600/sprinkler,road/all?lock=109", name: "09-environmental.jpg" },
  { url: "https://loremflickr.com/800/600/weighbridge,truck/all?lock=110", name: "10-weighment.jpg" },
  { url: "https://loremflickr.com/800/600/crusher,hopper/all?lock=111", name: "11-unload.jpg" },
  { url: "https://loremflickr.com/800/600/jaw,crusher/all?lock=112", name: "12-primary.jpg" },
  { url: "https://loremflickr.com/800/600/magnet,industrial/all?lock=113", name: "13-iron.jpg" },
  { url: "https://loremflickr.com/800/600/silo,hopper/all?lock=114", name: "14-surge.jpg" },
  { url: "https://loremflickr.com/800/600/conveyor,belt/all?lock=115", name: "15-secondary.jpg" },
  { url: "https://loremflickr.com/800/600/cone,crusher/all?lock=116", name: "16-cone.jpg" },
  { url: "https://loremflickr.com/800/600/vibrating,screen,industrial/all?lock=117", name: "17-screening.jpg" },
  { url: "https://loremflickr.com/800/600/gravel,pile/all?lock=118", name: "18-final.jpg" }
];

async function download() {
  for (const img of images) {
    console.log(`Downloading ${img.name}...`);
    const file = fs.createWriteStream(path.join(dir, img.name));
    await new Promise((resolve) => {
      https.get(img.url, (response) => {
        if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
          const redirectUrl = new URL(response.headers.location, 'https://loremflickr.com').toString();
          https.get(redirectUrl, (res) => {
            res.pipe(file);
            file.on('finish', () => { file.close(); resolve(); });
          });
        } else {
          response.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
        }
      });
    });
  }
  console.log("Done");
}
download();
