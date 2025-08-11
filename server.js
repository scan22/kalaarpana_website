import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import ExcelJS from "exceljs";

const app = express();
const PORT = 5000; // backend port

// Allow all origins for dev
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.post("/submit", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const workbook = new ExcelJS.Workbook();
    const filePath = "contacts.xlsx";
    let worksheet;

    try {
      await workbook.xlsx.readFile(filePath);
      worksheet = workbook.getWorksheet("Contacts");
      if (!worksheet) {
        worksheet = workbook.addWorksheet("Contacts");
        worksheet.columns = [
          { header: "Name", key: "name", width: 25 },
          { header: "Email", key: "email", width: 30 },
          { header: "Subject", key: "subject", width: 40 },
          { header: "Message", key: "message", width: 50 },
          { header: "Date", key: "date", width: 20 }
        ];
      }
    } catch {
      worksheet = workbook.addWorksheet("Contacts");
      worksheet.columns = [
        { header: "Name", key: "name", width: 25 },
        { header: "Email", key: "email", width: 30 },
        { header: "Subject", key: "subject", width: 40 },
        { header: "Message", key: "message", width: 50 },
        { header: "Date", key: "date", width: 20 }
      ];
    }

    worksheet.addRow({
      name,
      email,
      subject,
      message,
      date: new Date().toLocaleString()
    });

    await workbook.xlsx.writeFile(filePath);

    res.status(200).json({ message: "Form data saved to Excel successfully!" });
  } catch (error) {
    console.error("Error saving to Excel:", error);
    res.status(500).json({ error: "Failed to save form data" });
  }
});

// IMPORTANT: Bind to 0.0.0.0 for LAN access
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
