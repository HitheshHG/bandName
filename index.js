import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve form on GET request
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Generate band name and respond on POST request
app.post("/submit", (req, res) => {
    const bandName = req.body["street"] + req.body["pet"];
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Band Name Result</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea, #764ba2);
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .container {
          background-color: #fff;
          padding: 40px 30px;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          text-align: center;
          width: 100%;
          max-width: 400px;
        }

        h1 {
          color: #333;
          margin-bottom: 10px;
        }

        h2 {
          color: #5a67d8;
          font-size: 24px;
          margin-bottom: 20px;
        }

        a {
          text-decoration: none;
          color: white;
          background-color: #667eea;
          padding: 10px 20px;
          border-radius: 8px;
          display: inline-block;
          transition: background-color 0.3s ease;
        }

        a:hover {
          background-color: #5a67d8;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Your band name is:</h1>
        <h2>${bandName} ✌️</h2>
        <a href="/">Generate Another</a>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
