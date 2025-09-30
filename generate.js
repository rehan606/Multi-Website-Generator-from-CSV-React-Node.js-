// generate.js
import fs from "fs-extra";
import Papa from "papaparse";

const csvPath = "./src/website.csv";
const csvData = fs.readFileSync(csvPath, "utf8");

// CSV parse
const { data } = Papa.parse(csvData, { header: true, skipEmptyLines: true });


data.forEach((site) => {
  const folder = `./build/${site.domain}`;
  fs.ensureDirSync(folder);

  // Create Hero.jsx 
  const heroContent = `
import React from "react";

export default function Hero() {
  return <h1>Quick delivery service in Dhaka. </h1>;
}
  `;
  fs.writeFileSync(`${folder}/Hero.jsx`, heroContent);

  // Create Contact.jsx
  const contactContent = `
import React from "react";

export default function Contact() {
  return (
    <>
      <p>Phone: ${site.phone}</p>
      <p>Address: ${site.address}</p>
    </>
  );
}
  `;
  fs.writeFileSync(`${folder}/Contact.jsx`, contactContent);

  // Create index.html
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${site.title}</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/main.jsx"></script>
</body>
</html>
  `;
  fs.writeFileSync(`${folder}/index.html`, htmlContent);
});

console.log("✅ All websites generated successfully!");
