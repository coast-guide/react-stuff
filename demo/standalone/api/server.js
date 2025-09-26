const express = require("express");
const cors = require("cors");
const { API_PORT, RESTAURANTS_API_URL } = require("./constants");

const app = express();
const PORT = process.env.PORT || API_PORT;

app.use(cors({ origin: "http://localhost:1234" }));

app.use(express.json());

app.get("/api/data", async (req, res) => {
  try {
    const response = await fetch(RESTAURANTS_API_URL, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
      },
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

app.listen(PORT, () =>
  console.log(`API server running on http://localhost:${PORT}`)
);
