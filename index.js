import dotenv from "dotenv";
import express from "express";
import { createRequire } from "module";
import bodyParser from "body-parser";
const require = createRequire(import.meta.url);

dotenv.config();
const twilio = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_TOKEN
);

const app = express();
const PORT = process.env.PORT || 3000;

// setup middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.post("/sms", (req, res) => {
  const { mobile } = req.body;

  if (!mobile) {
    return res.status(400).json("Mobile number is required");
  }

  twilio.messages
    .create({
      body: "Hello from SMS Notification!",
      from: process.env.TWILIO_PHONE_NUMBER,
      to: mobile,
    })
    .then((message) => {
      console.log(message);
      res.status(200).json("Message sent");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json("Error sending SMS");
    });
});
