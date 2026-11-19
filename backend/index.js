require("dotenv").config();
const express = require("express");
const { google } = require("googleapis");
const path = require("path");

const app = express();
app.use(express.json());

// Authentification Google Sheets avec credentials.json
const auth = new google.auth.GoogleAuth({
  keyFile: path.join(__dirname, "credentials.json"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;

// Route de test pour vérifier la connexion au serveur
app.get("/health", (req, res) => {
  res.json({ ok: true, message: "Serveur Défi Sportif opérationnel !" });
});

// Route de test pour lire l'onglet Activities de ton Google Sheet
app.get("/api/test-sheets", async (req, res) => {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: "Activities!A1:G10",
    });
    res.json({ rows: response.data.values || [] });
  } catch (error) {
    console.error("Erreur Google Sheets :", error.message);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});