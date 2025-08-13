import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// CSV file path
const filePath = path.join(process.cwd(), "contacts.csv");

// Function to create CSV header if file doesn't exist
function createCSVHeader() {
  const header = "Name,Email,Subject,Message,Date\n";
  fs.writeFileSync(filePath, header, { flag: "wx" }); // only create if not exists
}

// POST endpoint for form submissions
app.post("/submit", (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Create file with header if not present
    if (!fs.existsSync(filePath)) {
      createCSVHeader();
    }

    // Append new row
    const date = new Date().toLocaleString();
    const row = `"${name}","${email}","${subject}","${message}","${date}"\n`;
    fs.appendFileSync(filePath, row);

    res.status(200).json({ message: "Form data saved to CSV successfully!" });
  } catch (error) {
    console.error("Error saving to CSV:", error);
    res.status(500).json({ error: "Failed to save form data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
