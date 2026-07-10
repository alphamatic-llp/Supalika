
const https = require("https");
const fs = require("fs");

async function scrapeUnsplash(query, destPath) {
  return new Promise((resolve) => {
    const options = {
      hostname: "unsplash.com",
      path: `/s/photos/${query}`,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
      }
    };
    https.get(options, (res) => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => {
        const match = data.match(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+[^\\s"\\&\\?]+/);
        if (match) {
           let imgUrl = match[0];
           imgUrl = imgUrl + "?w=800&q=80";
           console.log("Found URL:", imgUrl);
           https.get(imgUrl, (res2) => {
             const fileStream = fs.createWriteStream(destPath);
             res2.pipe(fileStream);
             fileStream.on("finish", () => resolve(true));
           });
        } else {
           console.log("No match found for", query);
           resolve(false);
        }
      });
    }).on("error", (e) => {
      console.log("Error:", e);
      resolve(false);
    });
  });
}

scrapeUnsplash("crushed-stone", "test_stone.jpg").then(() => console.log("Done"));

