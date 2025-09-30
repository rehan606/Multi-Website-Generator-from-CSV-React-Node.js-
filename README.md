# 🛠️ Multi Website Generator from CSV (React + Node.js)

This project is a **job task solution** where we automatically generate **multiple React-based websites** using data from a single CSV file.  
Each row in the CSV represents one website, and for each entry, a new React application is generated with a **Hero section** and a **Contact section** populated dynamically from the CSV data.

---

## 🚀 Features

- 📁 Generate multiple websites automatically from `website.csv`
- ⚛️ Uses React for UI rendering
- 🛠️ Node.js script (`generate.js`) reads CSV and creates website folders
- 🦸‍♂️ Hero section with pre-defined text:  
  > Quick delivery service in Dhaka.
- ☎️ Contact section dynamically displays phone and address from CSV
- 📂 Auto-creates build folder structure:

```
/build
├─ foodexpress.com
├─ techhubbd.com
└─ bookbazaar.com
```

- 📦 Lightweight – no heavy CSS, only basic styling for alignment

---

## 📁 Folder Structure
```
multi-site-generator/
├─ build/ # Auto-generated websites (created after running script)
├─ public/
├─ src/
│ ├─ App.css # Basic styling
│ ├─ App.jsx 
│ ├─ index.css 
│ ├─ main.jsx # React entry point
│ └─ website.csv # CSV data source
├─ generate.js # Node script to parse CSV and generate sites
├─ index.html
├─ package-lock.json
├─ package.json
└─ vite.config.js
```


---

## 🧪 Example CSV (`src/website.csv`)

```csv
domain,title,description,phone,address
foodexpress.com,Food Express,Delicious meals delivered fast,01712345678,"House 12, Road 5, Banani, Dhaka"
techhubbd.com,Tech Hub BD,Your trusted tech partner,01898765432,"Level 4, Block B, Dhanmondi, Dhaka"
bookbazaar.com,Book Bazaar,Buy and sell books online,01911223344,"Shop 22, New Market, Chittagong"
```

## ⚙️ Installation & Setup

Clone the repository:
```
git clone https://github.com/your-username/multi-site-generator.git
cd multi-site-generator
```
Install dependencies:

```
npm install
```

Run the generator script and start the development server:

```
npm start
```

## This will:

📊 Parse website.csv

🏗️ Generate individual React projects inside /build

🚀 Launch the development server at http://localhost:5173/


## 🧱 Build Output Example

After running the script, you will see:
```
/build
 ├─ foodexpress.com/
 │   ├─ Hero.jsx
 │   ├─ Contact.jsx
 │   └─ index.html
 ├─ techhubbd.com/
 │   ├─ Hero.jsx
 │   ├─ Contact.jsx
 │   └─ index.html
 └─ bookbazaar.com/
     ├─ Hero.jsx
     ├─ Contact.jsx
     └─ index.html
```

## 📸 Browser Preview

Each generated website will show:
<a ><img src="https://i.ibb.co.com/GvJ3TRsy/Screenshot-1.png" alt="Screenshot-1" ></a>



## 📌 Technologies Used

⚛️ React – Frontend

📜 Node.js – CSV parsing & automation

📊 PapaParse – CSV parsing library

🛠️ fs-extra – File and folder creation


## 🤝 Contribution

This project was built as part of a job task assignment to demonstrate:

CSV-driven automation

Dynamic React application generation

Clean code structure and documentation


## 👨‍💻 Author

**Rehan**  
Frontend Developer | JavaScript | React | Node.js | Next.js | Express.js | MongoDB | Firebase  

🔗 [LinkedIn](https://www.linkedin.com/in/kh-rehan207/)  



---

✅ **Tips before uploading to GitHub:**  
- Replace `https://github.com/your-username/...` with your real GitHub repo link.  
- Replace `LinkedIn` link with your actual profile.  
- Add a screenshot of your browser output if possible (`/screenshots/preview.png`) and mention it in the README.

---



