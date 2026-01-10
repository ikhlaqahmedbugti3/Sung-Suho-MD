const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "rA1BCKiS#2aDYrX2giy3-iP7qbwvC5mVj0uXuCM-a9WDuG3op4ko",
  OWNER_NUM: process.env.OWNER_NUM || "923346864922",
  OWNER_NAME: process.env.OWNER_NAME || "Muhammad Raj",
  REPO: process.env.REPO || "https://github.com/NaCkS-ai/Sung-Suho-MD", 
  PREFIX: process.env.PREFIX || ".",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
  AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || "true",
  MODE : process.env.MODE || "private", 
  AUTO_STATUS_LIKE: process.env.AUTO_STATUS_LIKE || "true", 
  AUTO_RECORDING: convertToBool(process.env.AUTO_RECORDING || "false"), 
  ANTI_DELETE: convertToBool(process.env.ANTI_DELETE || "true"),
  version: process.env.version || "V2",
};

