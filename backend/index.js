require("dotenv").config();
const express = require("express");
const { google } = require("googleapis");
const path = require("path");

const app = express();
app.use(express.json());



// Autoriser les requêtes provenant du front-end (CORS)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") return res.sendStatus(200);
  next();
});





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




app.get("/api/classement", async (req, res) => {
  try {
    const sportFiltre = req.query.sport?.toLowerCase();

    // 1. Lire Users et Activities en parallèle
    const [usersRes, activitiesRes] = await Promise.all([
      sheets.spreadsheets.values.get({ spreadsheetId: SPREADSHEET_ID, range: "Users!A2:B" }),
      sheets.spreadsheets.values.get({ spreadsheetId: SPREADSHEET_ID, range: "Activities!A2:G" }),
    ]);

    const usersRows = usersRes.data.values || [];
    const activitiesRows = activitiesRes.data.values || [];

    // 2. Associer chaque discord_id à son pseudo
    const scores = {};
    for (const [discord_id, username] of usersRows) {
      if (discord_id) scores[discord_id] = { discord_id, username: username || "Anonyme", total_points: 0 };
    }

    // 3. Additionner les points des activités
    for (const [, discord_id, sport, , , points] of activitiesRows) {
      if (!discord_id) continue;
      if (sportFiltre && sport?.toLowerCase() !== sportFiltre) continue;

      if (!scores[discord_id]) {
        scores[discord_id] = { discord_id, username: "Inconnu", total_points: 0 };
      }
      scores[discord_id].total_points += Number(points) || 0;
    }

    // 4. Trier du plus grand score au plus petit
    const classement = Object.values(scores).sort((a, b) => b.total_points - a.total_points);
    res.json({ classement });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});